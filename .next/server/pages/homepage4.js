module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/homepage4.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/common/ClientOnlyPortal.js":
/*!****************************************!*\
  !*** ./src/common/ClientOnlyPortal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientOnlyPortal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


function ClientOnlyPortal({
  children,
  selector
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: mounted,
    1: setMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);
  return mounted ? Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, ref.current) : null;
}

/***/ }),

/***/ "./src/common/WithHeaderScroll.js":
/*!****************************************!*\
  !*** ./src/common/WithHeaderScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\common\\WithHeaderScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function WithHeaderScroll(WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header-scroll-wrapper ${isHeaderFixed ? "fixed" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(WrappedComponent, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    })));
  };
}

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: SHOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
const SHOP = {
  category: [{
    name: "clothing",
    sub: [{
      name: "accessories",
      iconClass: "icon-accessories"
    }, {
      name: "pants",
      iconClass: "icon-pant"
    }, {
      name: "shorts",
      iconClass: "icon-short"
    }, {
      name: "jacket",
      iconClass: "icon-jacket"
    }, {
      name: "dress",
      iconClass: "icon-dress"
    }, {
      name: "suits",
      iconClass: "icon-suit"
    }, {
      name: "shirt",
      iconClass: "icon-shirt"
    }]
  }, {
    name: "fruits",
    sub: [{
      name: "vegatables",
      iconClass: "icon-vegetable"
    }, {
      name: "fruits",
      iconClass: "icon-fruit"
    }, {
      name: "nut",
      iconClass: "icon-nut"
    }, {
      name: "mushroom",
      iconClass: "icon-mushroom"
    }]
  }, {
    name: "electronic",
    sub: [{
      name: "air conditioning",
      iconClass: "icon-air-conditioning"
    }, {
      name: "phone",
      iconClass: "icon-phone"
    }, {
      name: "tv",
      iconClass: "icon-desktop"
    }, {
      name: "speaker",
      iconClass: "icon-speaker"
    }, {
      name: "fridge",
      iconClass: "icon-fridge"
    }, {
      name: "fan",
      iconClass: "icon-fan"
    }]
  }, {
    name: "furniture",
    sub: [{
      name: "table",
      iconClass: "icon-table"
    }, {
      name: "chair",
      iconClass: "icon-chair"
    }, {
      name: "cabinet",
      iconClass: "icon-cabinet"
    }, {
      name: "lamp",
      iconClass: "icon-lamp"
    }, {
      name: "bed",
      iconClass: "icon-bed"
    }]
  }, {
    name: "comestic",
    sub: [{
      name: "lipstick",
      iconClass: "icon-lipstick"
    }, {
      name: "powder",
      iconClass: "icon-powder"
    }, {
      name: "perfume",
      iconClass: "icon-perfurm"
    }, {
      name: "nail polish",
      iconClass: "icon-nail"
    }, {
      name: "mascara",
      iconClass: "icon-mascara"
    }]
  }]
};

/***/ }),

/***/ "./src/common/shopUtils.js":
/*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
/*! exports provided: getProductsByCategory, getProductsBySlug, getAllValuesOfKey, getAllSubCategories, getProductsBySort, getProductsByFilter, getProductsBySearch, getTotalProductInCart, calculateTotalPrice, checkProductInCart, checkAvaiableQuantityToAdd, checkProductInWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByCategory", function() { return getProductsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllValuesOfKey", function() { return getAllValuesOfKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubCategories", function() { return getAllSubCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySort", function() { return getProductsBySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByFilter", function() { return getProductsByFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySearch", function() { return getProductsBySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductInCart", function() { return getTotalProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInCart", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAvaiableQuantityToAdd", function() { return checkAvaiableQuantityToAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInWishlist", function() { return checkProductInWishlist; });
//Products
const getProductsByCategory = (arr, category) => {
  return category ? arr.filter(item => item.category.toLowerCase() === category.toLowerCase()) : arr;
};
const getProductsBySlug = (arr, slug) => {
  return slug && typeof slug === "string" ? arr.find(p => p.slug.toLowerCase() === slug.toLowerCase()) : arr;
};
const getAllValuesOfKey = (arr, key) => {
  if (key && typeof key === "string") {
    let subCategory = [];

    for (let i = 0; i < arr.length; i++) {
      if (!subCategory.includes(arr[i][key])) {
        subCategory.push(arr[i][key]);
      }
    }

    return subCategory.length > 0 ? subCategory : null;
  } else {
    return null;
  }
};
const getAllSubCategories = (arr, category) => {
  if (category && typeof category === "string") {
    let products = getProducts(arr, category);
    let subCategoriesArr = getAllValuesOfKey(products, "subCategory");
    return subCategoriesArr !== null ? subCategoriesArr : null;
  } else {
    return null;
  }
};
const getProductsBySort = (products, type) => {
  function sortWithCondition(arr, value, reverse = false) {
    let num = reverse ? -1 : 1;
    return arr.sort((a, b) => {
      if (a[value] < b[value]) {
        return -1 * num;
      }

      if (a[value] > b[value]) {
        return 1 * num;
      }

      return 0;
    });
  }

  if (type === "az") {
    return sortWithCondition(products, "name");
  } else if (type === "za") {
    return sortWithCondition(products, "name", true);
  } else if (type === "lowHigh") {
    return sortWithCondition(products, "price");
  } else if (type === "highLow") {
    return sortWithCondition(products, "price", true);
  } else {
    return products;
  }
};
const getProductsByFilter = (products, sortType, subCategory) => {
  let filteredProduct = subCategory ? products.filter(product => product.subCategory.toLowerCase() === subCategory.toLowerCase()) : products;
  return getProductsBySort(filteredProduct, sortType);
};
const getProductsBySearch = (products, keyword) => {
  return keyword && keyword !== "" ? products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase())) : products;
}; //Cart

const getTotalProductInCart = arr => {
  return arr ? arr.reduce((total, item) => total + item.cartQuantity, 0) : 0;
};
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
};
const checkProductInCart = (cartArr, pid) => {
  return pid ? cartArr.find(item => item.id === pid) : null;
};
const checkAvaiableQuantityToAdd = (arr, product) => {
  const productsInCart = arr.filter(item => item.id === product.id);

  if (productsInCart && productsInCart.length > 0) {
    const totalProductQuantityInCart = productsInCart.length > 0 && productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
    let avaiable = product.quantity - totalProductQuantityInCart;
    return avaiable < 1 ? 0 : avaiable;
  } else {
    product.quantity;
  }
}; //Wishlist

const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : null;
};

/***/ }),

/***/ "./src/common/useDebound.js":
/*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

/***/ }),

/***/ "./src/common/useProductData.js":
/*!**************************************!*\
  !*** ./src/common/useProductData.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProductData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopUtils */ "./src/common/shopUtils.js");


function useProductData(productData, category, query) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(productData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const product = query ? Object(_shopUtils__WEBPACK_IMPORTED_MODULE_1__["getProductsBySearch"])(Object(_shopUtils__WEBPACK_IMPORTED_MODULE_1__["getProductsByCategory"])(productData, category), query) : Object(_shopUtils__WEBPACK_IMPORTED_MODULE_1__["getProductsByCategory"])(productData, category);
    setData(product);
    setData(product);
  }, [category, query]);
  return data;
}

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
}; // export const translateString = (string, language, API_key) => {
//   if (!API_key) {
//     return string;
//   } else {
//     let traslatedString;
//     return translate("Hello world", {
//       to: language,
//       key: API_key,
//     })
//       .then((res) => (traslatedString = res))
//       .catch((err) => console.log(err));
//   }
// };

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/***/ }),

/***/ "./src/components/cart/CartSidebar.js":
/*!********************************************!*\
  !*** ./src/components/cart/CartSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CartSidebarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartSidebarItem */ "./src/components/cart/CartSidebarItem.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\cart\\CartSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








function CartSidebar() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.cartReducer);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.globalReducer);
  const {
    currency,
    locales
  } = globalState.currency;
  return cartState.length === 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: "cart-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "cart-sidebar-products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, cartState.map((item, index) => __jsx(_CartSidebarItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "cart-sidebar-total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Total:", " ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["calculateTotalPrice"])(cartState), locales, currency))), __jsx("div", {
    className: "cart-sidebar-total__buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Checkout"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(CartSidebar));

/***/ }),

/***/ "./src/components/cart/CartSidebarItem.js":
/*!************************************************!*\
  !*** ./src/components/cart/CartSidebarItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/QuantitySelector */ "./src/components/controls/QuantitySelector.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\cart\\CartSidebarItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function CartSidebarItem({
  data
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.cartQuantity);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const {
    currency,
    locales
  } = globalState.currency;

  const onRemoveProductFromCart = e => {
    e.preventDefault();
    showModal();
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["removeFromCart"])(data.cartId));
    setVisible(false);
    return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from cart");
  };

  const handleCancel = e => {
    setVisible(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "cart-sidebar-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cart-sidebar-item__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: data.thumbImage[0],
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "cart-sidebar-item__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, data.name)), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])((data.price - data.discount) * data.cartQuantity, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price * data.cartQuantity, locales, currency)), __jsx(_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    defaultValue: data.cartQuantity,
    min: 1,
    max: data.quantity,
    onDecrease: () => dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["decreaseQuantityCart"])(data.cartId)),
    onIncrease: () => dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["increaseQuantityCart"])(data.cartId)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "cart-sidebar-item__close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    onClick: onRemoveProductFromCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Cofirm this action",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Are your sure to remove product from cart ?")));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CartSidebarItem));

/***/ }),

/***/ "./src/components/controls/QuantitySelector.js":
/*!*****************************************************!*\
  !*** ./src/components/controls/QuantitySelector.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\controls\\QuantitySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function QuantitySelector({
  min,
  max,
  defaultValue,
  onChange,
  size,
  noRound,
  className,
  onDecrease,
  onIncrease
}) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onChange && onChange(value);
  }, [value]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }

      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (value >= max) {
      return;
    }

    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return __jsx("div", {
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)} -${classnames__WEBPACK_IMPORTED_MODULE_2___default()(size)} -${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "no-round": noRound
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "quantity-selector-controller",
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "-"), __jsx("div", {
    className: "quantity-selector-number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, value), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "quantity-selector-controller",
    type: "link",
    disabled: value >= max,
    onClick: increaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "+"));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_FooterSubcribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/FooterSubcribe */ "./src/components/footer/elements/FooterSubcribe.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/footer-links.json */ "./src/data/footer-links.json", 1);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Footer({
  containerType
}) {
  return __jsx("div", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "center",
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: "24",
    sm: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-top-item -col-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo-dark.png",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "7176 Blue Spring Lane Santa Monica, CA 90403"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, "hi.avitex@gmail.com"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "+01 123 456 888")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: "24",
    sm: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-top-item -col-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Information"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5__.information.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, item.name)))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "My account"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5__.account.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, item.name))))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: "24",
    sm: 18,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-top-item -col-three",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Subscribe to our Newsletter"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Subscribe to our newsletter and get 10% off your first purchase"), __jsx(_elements_FooterSubcribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Copyright \xA9 2020 Avitex Inc. All rights reserved"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

/***/ }),

/***/ "./src/components/footer/elements/FooterSubcribe.js":
/*!**********************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribe.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSubcribe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\footer\\elements\\FooterSubcribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  status,
  message,
  onValidated
}) => {
  const onFinish = value => {
    console.log("Success:", value);
    value && onValidated({
      EMAIL: value.email
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "footer-subcribe__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "SUBSCRIBE"))), status === "sending" && __jsx("div", {
    style: {
      color: "blue"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 32
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
});
function FooterSubcribe({
  url
}) {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/Menu */ "./src/components/header/elements/Menu.js");
/* harmony import */ var _elements_TopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/TopNav */ "./src/components/header/elements/TopNav.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Header({
  containerType,
  headerStyle
}) {
  const renderStyleClass = type => {
    switch (type) {
      case "two":
        return "-style-two";

      default:
        return "default";
    }
  };

  return __jsx("div", {
    className: `header-one ${renderStyleClass(headerStyle)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_elements_TopNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_elements_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Header));

/***/ }),

/***/ "./src/components/header/elements/Menu.js":
/*!************************************************!*\
  !*** ./src/components/header/elements/Menu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_product_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/product.json */ "./src/data/product.json");
var _data_product_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/product.json */ "./src/data/product.json", 1);
/* harmony import */ var _cart_CartSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/CartSidebar */ "./src/components/cart/CartSidebar.js");
/* harmony import */ var _wishlist_WishlistSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../wishlist/WishlistSidebar */ "./src/components/wishlist/WishlistSidebar.js");
/* harmony import */ var _MenuSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuSidebar */ "./src/components/header/elements/MenuSidebar.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchBar */ "./src/components/header/elements/SearchBar.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\header\\elements\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Menu({
  containerType
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.wishlistReducer);
  const {
    0: cartSidebarOpen,
    1: setCartSidebarOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: menuSidebarOpen,
    1: setMenuSidebarOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: wishlistSidebarOpen,
    1: setWishlistSidebarOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    className: "menu-sidebar-opener",
    onClick: e => {
      e.preventDefault();
      setMenuSidebarOpen(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  })))), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fillData: _data_product_json__WEBPACK_IMPORTED_MODULE_5__,
    placeholder: "What are you looking for ?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "menu-functions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "Join now"))), __jsx("div", {
    className: "menu-function-item",
    onClick: () => setWishlistSidebarOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + "/assets/images/header/menu-wishlist.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, wishlistState.length)), __jsx("div", {
    className: "menu-function-item",
    onClick: () => setCartSidebarOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + "/assets/images/header/menu-bag.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_10__["getTotalProductInCart"])(cartState))))))), __jsx("div", {
    className: "menu-mobile-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fillData: _data_product_json__WEBPACK_IMPORTED_MODULE_5__,
    placeholder: "Searching...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    placement: "right",
    title: `Wishlist (${wishlistState.length})`,
    closable: true,
    onClose: () => setWishlistSidebarOpen(false),
    closeIcon: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, "Close"), " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 26
      }
    })),
    visible: wishlistSidebarOpen,
    width: 445,
    className: "menu-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_wishlist_WishlistSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    placement: "right",
    title: `Shopping cart (${Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_10__["getTotalProductInCart"])(cartState)})`,
    closable: true,
    onClose: () => setCartSidebarOpen(false),
    closeIcon: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, "Close"), " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 26
      }
    })),
    visible: cartSidebarOpen,
    width: 445,
    className: "menu-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_cart_CartSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    placement: "right",
    closable: true,
    title: " ",
    onClose: () => setMenuSidebarOpen(false),
    closeIcon: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }, "Close"), " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 26
      }
    })),
    visible: menuSidebarOpen,
    width: 350,
    className: "menu-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_MenuSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Menu));

/***/ }),

/***/ "./src/components/header/elements/MenuSidebar.js":
/*!*******************************************************!*\
  !*** ./src/components/header/elements/MenuSidebar.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/globalActions */ "./src/redux/actions/globalActions.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\header\\elements\\MenuSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MenuSidebar() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);

  const onSelectLanguage = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__["setGlobalLanguage"])(value));
  };

  const onSelectCurrency = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__["setGlobalCurrency"])(value));
  };

  return __jsx("div", {
    className: "menu-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "sub1",
    title: "Homepages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Homepage 1"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/homepage2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Homepage 2"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/homepage3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Homepage 3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/homepage4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Homepage 4")))), __jsx(SubMenu, {
    key: "sub2",
    title: "Shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "sub2-1",
    title: "Shop detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/product-detail/product-detail-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Product Detail 1"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/product-detail/product-detail-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Product Detail 2"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/product-detail/product-detail-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Product Detail 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Checkout"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/checkout-complete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Checkout Complete")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Help"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Offer")))), __jsx("div", {
    className: "menu-sidebar-selects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: globalState.language,
    style: {
      width: 120
    },
    bordered: false,
    onChange: onSelectLanguage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "en",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "English"), __jsx(Option, {
    value: "jp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "Japanese"), __jsx(Option, {
    value: "vi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "Vietnamese")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: globalState.currency.currency,
    style: {
      width: 150
    },
    bordered: false,
    onChange: onSelectCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "USD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "USD - Dollar"), __jsx(Option, {
    value: "JPY",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "JPY - Yen"), __jsx(Option, {
    value: "VND",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "VND - Vietnam dong"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MenuSidebar));

/***/ }),

/***/ "./src/components/header/elements/SearchBar.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/SearchBar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/globalActions */ "./src/redux/actions/globalActions.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/useDebound */ "./src/common/useDebound.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\header\\elements\\SearchBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function SearchBarMobile({
  fillData,
  placeholder
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: showDropdownOptions,
    1: setShowDropdownOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_8__["default"])(search, 300);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_6__["setGlobalSearch"])(deboundValue));
  }, [deboundValue]);

  const renderAutoFillItem = () => {
    let product = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["getProductsByCategory"])(fillData, globalState.category);
    return product.map(item => ({
      value: item.name
    }));
  };

  const onSelectCateory = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_6__["setGlobalCategory"])(value));
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__["setSubCategory"])(""));
  };

  const openDropdownOption = value => {
    setShowDropdownOptions(true);
    setSearch(value);
  };

  const closeDropdownOption = () => {
    setShowDropdownOptions(false);
  };

  const onSelectOption = (value, option) => {
    setSearch(value);
    closeDropdownOption();
  };

  const onSearch = () => {
    if (!search || search === "") {
      router.push("/");
    } else {
      router.push({
        pathname: "/",
        query: {
          q: search
        }
      });
    }
  };

  return __jsx("div", {
    className: "menu-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "menu-search__form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    className: "menu-search__form-select",
    defaultValue: globalState.category,
    style: {
      width: 150
    },
    onChange: onSelectCateory,
    value: globalState.category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, _common_defines__WEBPACK_IMPORTED_MODULE_4__["SHOP"].category.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, item.name))), __jsx("div", {
    className: "menu-search__form-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    allowClear: true,
    backfill: true,
    open: showDropdownOptions,
    onSearch: openDropdownOption,
    onBlur: closeDropdownOption,
    onSelect: onSelectOption,
    options: renderAutoFillItem(),
    placeholder: placeholder,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchBarMobile));

/***/ }),

/***/ "./src/components/header/elements/TopNav.js":
/*!**************************************************!*\
  !*** ./src/components/header/elements/TopNav.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/globalActions */ "./src/redux/actions/globalActions.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\header\\elements\\TopNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function TopNav({
  containerType
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_0__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);

  const onSelectLanguage = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__["setGlobalLanguage"])(value));
  };

  const onSelectCurrency = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__["setGlobalCurrency"])(value));
  };

  return __jsx("div", {
    className: "top-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "top-nav-selects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    defaultValue: globalState.language,
    style: {
      width: 90
    },
    bordered: false,
    onChange: onSelectLanguage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "en",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "English"), __jsx(Option, {
    value: "jp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Japanese"), __jsx(Option, {
    value: "vi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Vietnamese")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    defaultValue: globalState.currency.currency,
    style: {
      width: 120
    },
    bordered: false,
    onChange: onSelectCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "USD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "USD - Dollar"), __jsx(Option, {
    value: "JPY",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "JPY - Yen"), __jsx(Option, {
    value: "VND",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "VND - Vietnam dong"))), __jsx("div", {
    className: "top-nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "top-nav-links__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_question_alt2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }), "Help"))), __jsx("div", {
    className: "top-nav-links__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_gift",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }), " Offer")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(TopNav));

/***/ }),

/***/ "./src/components/layouts/LayoutOne.js":
/*!*********************************************!*\
  !*** ./src/components/layouts/LayoutOne.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _common_WithHeaderScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/WithHeaderScroll */ "./src/common/WithHeaderScroll.js");
/* harmony import */ var _subpages_SubpagesSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subpages/SubpagesSidebar */ "./src/components/subpages/SubpagesSidebar.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\layouts\\LayoutOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ScrollHeader = Object(_common_WithHeaderScroll__WEBPACK_IMPORTED_MODULE_6__["default"])(_header_Header__WEBPACK_IMPORTED_MODULE_4__["default"]);

function LayoutOne({
  title,
  headerStyle,
  containerType,
  children,
  clearSpaceTop
}) {
  antd__WEBPACK_IMPORTED_MODULE_2__["message"].config({
    maxCount: 3,
    duration: 1
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title)), __jsx(ScrollHeader, {
    headerStyle: headerStyle,
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: `content ${classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "clear-top": clearSpaceTop
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, children), __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_subpages_SubpagesSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutOne));

/***/ }),

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\other\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  type,
  children
}) {
  const renderContainerType = type => {
    switch (type) {
      case "fluid":
        return "container-fluid";

      default:
        return "container";
    }
  };

  return __jsx("div", {
    className: renderContainerType(type),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, children);
}

/***/ }),

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _shop_ShopQuickView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shop/ShopQuickView */ "./src/components/shop/ShopQuickView.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Product({
  data,
  productStyle
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: imageLoading,
    1: setImageLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.wishlistReducer);
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_6__["checkProductInWishlist"])(wishlistState, data.id);
  const avaiableQuantity = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_6__["checkAvaiableQuantityToAdd"])(cartState, data);
  const {
    currency,
    locales
  } = globalState.currency;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setImageLoading(true);
  }, [globalState.category]);

  const renderProductType = () => {
    if (data.discount && !data.isNew) {
      return __jsx("p", {
        className: "product-type -sale",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      }, "Sale");
    } else if (data.isNew && !data.discount) {
      return __jsx("p", {
        className: "product-type -new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 14
        }
      }, "New");
    } else if (data.isNew && data.discount) {
      return __jsx("p", {
        className: "product-type -new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      }, "New");
    } else {
      return null;
    }
  };

  console.log(avaiableQuantity);

  const onAddToCart = data => {
    if (avaiableQuantity === 0) {
      return;
    }

    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addToCart"])(data, 1, "none", "none"));
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart successfully");
  };

  const onAddToWishlist = data => {
    if (productInWishlist) {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_8__["removeFromWishlist"])(data.id));
      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
    } else {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_8__["addToWishlist"])(data));
      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist successfully");
    }
  };

  const renderStyleClass = () => {
    const avaialeStyles = ["one", "two", "three"];

    if (avaialeStyles.includes(productStyle)) {
      if (!productStyle || productStyle === "one") {
        return "-style-one";
      } else {
        return "-style-" + productStyle;
      }
    } else {
      return "-style-one";
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  return data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `product ${renderStyleClass()}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      loading: imageLoading
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, data.thumbImage && data.thumbImage.map((item, index) => __jsx("img", {
    onLoad: handleImageLoaded,
    key: index,
    src: item,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  })))), imageLoading && __jsx("div", {
    className: "product-image-loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), renderProductType(), productStyle === "two" ? __jsx("div", {
    className: "product-button-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Quick view",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: showModal,
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: productInWishlist ? "Remove from wishlist" : "Add to wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: `product-atw ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: productInWishlist
    })}`,
    type: "text",
    onClick: () => onAddToWishlist(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Add to cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: avaiableQuantity === 0,
    type: "text",
    onClick: () => onAddToCart(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  })))) : null, !productStyle || productStyle === "one" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "left",
    title: productInWishlist ? "Remove from wishlist" : "Add to wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: `product-atw ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: productInWishlist
    })}`,
    type: "text",
    shape: "circle",
    onClick: () => onAddToWishlist(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: showModal,
    className: "product-qv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "Quick view")) : null), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, data.name)), __jsx("div", {
    className: "product-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
    defaultValue: data.rate,
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "product-rate-quantity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, "(06)")), __jsx("div", {
    className: "product-content__footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-content__footer-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price - data.discount, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency)), data.discount && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency))), !productStyle || productStyle === "one" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Add to cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: avaiableQuantity === 0,
    className: "product-atc",
    type: "text",
    shape: "circle",
    onClick: () => onAddToCart(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }))) : null), productStyle === "three" ? __jsx("div", {
    className: "product-button-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-button-group__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: "Quick view",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: showModal,
    shape: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon_search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: productInWishlist ? "Remove from wishlist" : "Add to wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    shape: "circle",
    className: `product-atw ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: productInWishlist
    })}`,
    onClick: () => onAddToWishlist(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: "Add to cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: avaiableQuantity === 0,
    shape: "circle",
    onClick: () => onAddToCart(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }))))) : null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    footer: null,
    afterClose: handleCancel,
    onCancel: handleCancel,
    visible: visible,
    width: 850,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx(_shop_ShopQuickView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setModalVisible: setVisible,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "./src/components/productDetail/elements/ProductGuaranteed.js":
/*!********************************************************************!*\
  !*** ./src/components/productDetail/elements/ProductGuaranteed.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductGuaranteed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\productDetail\\elements\\ProductGuaranteed.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProductGuaranteed() {
  return __jsx("div", {
    className: "product-detail-guaranteed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Guaranteed Safe Checkout"), __jsx("img", {
    src: "" + "/assets/images/shop/shop-detail/guaranteed.png",
    alt: "Guaranteed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/productDetail/productDetailContent/ProductDetailContentOne.js":
/*!**************************************************************************************!*\
  !*** ./src/components/productDetail/productDetailContent/ProductDetailContentOne.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../controls/QuantitySelector */ "./src/components/controls/QuantitySelector.js");
/* harmony import */ var _elements_ProductGuaranteed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/ProductGuaranteed */ "./src/components/productDetail/elements/ProductGuaranteed.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\productDetail\\productDetailContent\\ProductDetailContentOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function ProductDetailContentOne({
  data,
  onAddedToCart,
  hideGuaranteed,
  quantityControllerNoRound,
  showCountdown
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: currentColor,
    1: setCurrentColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none");
  const {
    0: currentSize,
    1: setCurrentSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none");
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer);
  const avaiableQuantity = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["checkAvaiableQuantityToAdd"])(cartState, data);
  const {
    currency,
    locales
  } = globalState.currency;

  const onAddProductToCart = data => {
    if (avaiableQuantity === 0) {
      return;
    }

    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["addToCart"])(data, quantity, currentColor, currentSize));
    onAddedToCart && onAddedToCart();
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Product added to cart successfully");
  };

  const onChooseSize = e => {
    setCurrentSize(e.target.value);
  };

  const onChooseColor = e => {
    setCurrentColor(e.target.value);
  };

  return __jsx("div", {
    className: "product-detail-content-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, data.name), __jsx("div", {
    className: "product-detail-content-one-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    disabled: true,
    defaultValue: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "product-detail-content-one-review-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "- 5 Reviews")), __jsx("div", {
    className: "product-detail-content-one-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price - data.discount, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency)), data.discount && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency))), __jsx("p", {
    className: "product-detail-content-one-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo possimus quae tenetur. Porro aliquam quaerat dolorum pariatur molestias commodi ipsa"), showCountdown && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "product-detail-content-one-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Hurry Up ! Sales end in :"), __jsx("div", {
    className: "product-detail-content-one-countdown__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    date: Date.now() + 100000000,
    renderer: ({
      days,
      hours,
      minutes,
      seconds,
      completed
    }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "product-detail-content-one-countdown__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 23
      }
    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(days)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 23
      }
    }, "days")), ":", __jsx("div", {
      className: "product-detail-content-one-countdown__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }, "hours")), ":", __jsx("div", {
      className: "product-detail-content-one-countdown__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 23
      }
    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, "mins")), ":", __jsx("div", {
      className: "product-detail-content-one-countdown__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 23
      }
    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 23
      }
    }, "secs"))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "product-detail-content-one-countdown__sold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    percent: 50,
    showInfo: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "sold-data",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "Already Sold:", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, "20")), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Total:", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, "20")))))), __jsx("div", {
    className: "product-detail-content-one-variation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, data.size && __jsx("div", {
    className: "variation-item -size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Size:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    onChange: onChooseSize,
    defaultValue: "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, data.size.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, item.name))))), data.variation && __jsx("div", {
    className: "variation-item -color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Color:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    onChange: onChooseColor,
    defaultValue: "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, data.variation.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    key: index,
    value: item.color,
    style: {
      backgroundColor: item.colorCode
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "product-detail-content-one-actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx(_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noRound: quantityControllerNoRound,
    defaultValue: 1,
    onChange: val => setQuantity(val),
    size: "big",
    max: Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["checkAvaiableQuantityToAdd"])(cartState, data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => onAddProductToCart(data),
    disabled: avaiableQuantity === 0,
    className: `product-detail-content-one-atc ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      disabled: avaiableQuantity === 0
    })}`,
    type: "link",
    danger: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, "Add to cart")), !hideGuaranteed && __jsx(_elements_ProductGuaranteed__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 27
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailContentOne));

/***/ }),

/***/ "./src/components/shop/ShopContent.js":
/*!********************************************!*\
  !*** ./src/components/shop/ShopContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShopContentHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopContentHeader */ "./src/components/shop/ShopContentHeader.js");
/* harmony import */ var _ShopContentProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopContentProduct */ "./src/components/shop/ShopContentProduct.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\shop\\ShopContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ShopContent({
  fiveColumn,
  productResponsive,
  data,
  productPerPage,
  productStyle
}) {
  return __jsx("div", {
    className: "shop-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_ShopContentHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    productPerPage: productPerPage,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_ShopContentProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productStyle: productStyle,
    fiveColumn: fiveColumn,
    productResponsive: productResponsive,
    data: data,
    productPerPage: productPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopContent));

/***/ }),

/***/ "./src/components/shop/ShopContentHeader.js":
/*!**************************************************!*\
  !*** ./src/components/shop/ShopContentHeader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\shop\\ShopContentHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ShopContentHeader({
  data,
  productPerPage
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);

  const handleChange = value => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__["setSort"])(value));
  };

  return __jsx("div", {
    className: "shop-content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-content__header-showing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Showing 1 - ", productPerPage, " of ", data.length, " Products")), __jsx("div", {
    className: "shop-content__header-filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Filter by:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    className: "shop-content__header-filter__select",
    defaultValue: shopState.sort,
    style: {
      width: 250 / 16 + "em"
    },
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Default"), __jsx(Option, {
    value: "lowHigh",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Price: Low to High"), __jsx(Option, {
    value: "highLow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Price: High to Low"), __jsx(Option, {
    value: "az",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "A to Z"), __jsx(Option, {
    value: "za",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Z to A"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopContentHeader));

/***/ }),

/***/ "./src/components/shop/ShopContentProduct.js":
/*!***************************************************!*\
  !*** ./src/components/shop/ShopContentProduct.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\shop\\ShopContentProduct.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ShopContentProduct({
  productResponsive,
  fiveColumn,
  data,
  productPerPage,
  productStyle
}) {
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);
  const {
    0: currentData,
    1: setCurrentData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let filteredProduct = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["getProductsByFilter"])([...data], shopState.sort, shopState.subCategory);
    setCurrentData(filteredProduct);
    setOffset(0);
  }, [shopState, data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPage(1);
  }, [globalState]);

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fal fa-angle-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }));
    }

    if (type === "next") {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fal fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }));
    }

    return originalElement;
  };

  const onChangeOffset = (page, pageSize) => {
    let offset = (page - 1) * pageSize;
    setPage(page);
    setOffset(offset);
  };

  return __jsx("div", {
    className: "shop-content__product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, !currentData ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in this category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentData.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [{
      xs: 5,
      sm: 5,
      xl: 15,
      xxl: 30
    }, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, currentData.slice(offset, offset + productPerPage).map((product, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "five-col": fiveColumn
    })
  }, productResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: product,
    productStyle: productStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  })))), currentData.length >= productPerPage && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    classNames: "shop-content__product-pagination",
    defaultCurrent: 1,
    current: page,
    total: currentData.length,
    pageSize: productPerPage,
    itemRender: itemRender,
    onChange: (page, pageSize) => onChangeOffset(page, pageSize),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopContentProduct));

/***/ }),

/***/ "./src/components/shop/ShopLayout.js":
/*!*******************************************!*\
  !*** ./src/components/shop/ShopLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShopSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopSidebar */ "./src/components/shop/ShopSidebar.js");
/* harmony import */ var _ShopContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShopContent */ "./src/components/shop/ShopContent.js");
/* harmony import */ var _ShopQuickView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShopQuickView */ "./src/components/shop/ShopQuickView.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\shop\\ShopLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ShopLayout({
  shopSidebarResponsive,
  shopContentResponsive,
  productResponsive,
  fiveColumn,
  data,
  productPerPage,
  productStyle,
  containerType
}) {
  return __jsx("div", {
    className: "shop-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    className: "gutter-row"
  }, shopSidebarResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_ShopSidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    className: "gutter-row"
  }, shopContentResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_ShopContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productStyle: productStyle,
    productPerPage: productPerPage,
    fiveColumn: fiveColumn,
    productResponsive: productResponsive,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopLayout));

/***/ }),

/***/ "./src/components/shop/ShopQuickView.js":
/*!**********************************************!*\
  !*** ./src/components/shop/ShopQuickView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productDetail_productDetailContent_ProductDetailContentOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productDetail/productDetailContent/ProductDetailContentOne */ "./src/components/productDetail/productDetailContent/ProductDetailContentOne.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\shop\\ShopQuickView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function ShopQuickView({
  data,
  setModalVisible
}) {
  const slider1Settings = {
    arrows: false
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const onAddedToCart = () => {
    setModalVisible(false);
  };

  return __jsx("div", {
    className: "shop-qv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    align: "middle",
    gutter: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "gutter-row",
    span: 24,
    sm: 24,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "shop-qv__slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "shop-qv__slide-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), data && data.images.map((img, index) => __jsx("div", {
    key: index,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    className: "shop-qv__slide-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), data && data.images.map((img, index) => __jsx("div", {
    key: index,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "gutter-row",
    span: 24,
    sm: 24,
    md: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_productDetail_productDetailContent_ProductDetailContentOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    hideGuaranteed: true,
    onAddedToCart: onAddedToCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopQuickView));

/***/ }),

/***/ "./src/components/shop/ShopSidebar.js":
/*!********************************************!*\
  !*** ./src/components/shop/ShopSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/defines */ "./src/common/defines.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\shop\\ShopSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ShopSidebar({
  categories
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_4__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const subCategory = _common_defines__WEBPACK_IMPORTED_MODULE_5__["SHOP"].category.find(item => item.name.toLowerCase() === globalState.category.toLowerCase());

  const onChooseSubCategory = data => {
    if (!data || data === "all") {
      return dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__["setSubCategory"])(""));
    }

    return dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__["setSubCategory"])(data));
  };

  const handleChange = value => {
    onChooseSubCategory(value);
  };

  return __jsx("div", {
    className: "shop-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, globalState.category), __jsx("div", {
    className: "shop-sidebar__subcategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: shopState.subCategory === ""
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: e => {
      e.preventDefault();
      onChooseSubCategory("all");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "icon_document_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), "All Category"))), subCategory && subCategory.sub.slice(0, 7).map((item, index) => __jsx("li", {
    key: index,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: shopState.subCategory === item.name
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: e => {
      e.preventDefault();
      onChooseSubCategory(item.name);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: item.iconClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), item.name)))))), __jsx("div", {
    className: "shop-sidebar__subcategory-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    defaultValue: "all",
    style: {
      width: "100%"
    },
    onChange: handleChange,
    value: shopState.subCategory === "" ? "all" : shopState.subCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "all",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_document_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), "All Category"), subCategory && subCategory.sub.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, " ", __jsx("i", {
    className: item.iconClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), item.name)))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopSidebar));

/***/ }),

/***/ "./src/components/subpages/SubpagesSidebar.js":
/*!****************************************************!*\
  !*** ./src/components/subpages/SubpagesSidebar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubpagesSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ClientOnlyPortal */ "./src/common/ClientOnlyPortal.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\subpages\\SubpagesSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SubpagesSidebar() {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return __jsx(_common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selector: "#subpages-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    placement: "right",
    closable: false,
    onClose: onClose,
    visible: visible,
    forceRender: true,
    className: "subpages-sidebar-main",
    width: 445,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: showDrawer,
    className: "subpages-sidebar-opener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-cog fa-spin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "4"), "Demo"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "You can easily combine various features from different demos."), __jsx("div", {
    className: "subpages-homepages-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/subpages/home1.png",
    alt: "Homepage 01",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Homepage 01"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/homepage2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/subpages/home2.png",
    alt: "Homepage 02",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Homepage 02"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/homepage3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/subpages/home3.png",
    alt: "Homepage 03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Homepage 03"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/homepage4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/subpages/home4.png",
    alt: "Homepage 04",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Homepage 04"))))));
}

/***/ }),

/***/ "./src/components/wishlist/WishlistSidebar.js":
/*!****************************************************!*\
  !*** ./src/components/wishlist/WishlistSidebar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WishlistSidebarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WishlistSidebarItem */ "./src/components/wishlist/WishlistSidebarItem.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\wishlist\\WishlistSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function WishlistSidebar() {
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.wishlistReducer);
  return wishlistState.length === 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: "wishlist-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, wishlistState.map((item, index) => __jsx(_WishlistSidebarItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WishlistSidebar));

/***/ }),

/***/ "./src/components/wishlist/WishlistSidebarItem.js":
/*!********************************************************!*\
  !*** ./src/components/wishlist/WishlistSidebarItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\wishlist\\WishlistSidebarItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function WishlistSidebarItem({
  data
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer);
  const {
    currency,
    locales
  } = globalState.currency;
  const avaiableQuantity = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkAvaiableQuantityToAdd"])(cartState, data);
  const productInCart = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductInCart"])(cartState, data.id);

  const onRemoveProductFromWishlist = e => {
    e.preventDefault();
    showModal();
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_6__["removeFromWishlist"])(data.id));
    setVisible(false);
    return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const onAddToCart = () => {
    if (avaiableQuantity === 0) {
      return;
    }

    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addToCart"])(data));
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart successfully");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "wishlist-sidebar-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "wishlist-sidebar-item__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: data.thumbImage[0],
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "wishlist-sidebar-item__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, data.name)), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price, locales, currency)), data.quantity < 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn-sold-mobile",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "icon_close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn-sold",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Sold out")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onAddToCart,
    disabled: productInCart,
    className: "btn-atc-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onAddToCart,
    disabled: productInCart,
    className: "btn-atc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, productInCart ? "Added to cart" : "Add to Cart"))), __jsx("div", {
    className: "wishlist-sidebar-item__close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    onClick: onRemoveProductFromWishlist,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Cofirm this action",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Are your sure to remove product from wishlist ?")));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WishlistSidebarItem));

/***/ }),

/***/ "./src/data/footer-links.json":
/*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
/*! exports provided: information, account, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"information\":[{\"name\":\"About Us\",\"src\":\"/about\"},{\"name\":\"Contact Us\",\"src\":\"/contact\"},{\"name\":\"Testmonials\",\"src\":\"/contact\"},{\"name\":\"Terms & Conditions\",\"src\":\"/contact\"},{\"name\":\"Affiliate Program\",\"src\":\"/contact\"}],\"account\":[{\"name\":\"Orders\",\"src\":\"/contact\"},{\"name\":\"Downloads\",\"src\":\"/contact\"},{\"name\":\"Addresses\",\"src\":\"/contact\"},{\"name\":\"Account details\",\"src\":\"/contact\"},{\"name\":\"Logout\",\"src\":\"/contact\"}]}");

/***/ }),

/***/ "./src/data/product.json":
/*!*******************************!*\
  !*** ./src/data/product.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"category\":\"clothing\",\"subCategory\":\"coat\",\"name\":\"Jack & Jones Men's T-Shirt\",\"rate\":4,\"reviewCount\":10,\"price\":59.99,\"discount\":20,\"new\":true,\"quantity\":8,\"sex\":\"men\",\"size\":[{\"name\":\"XXL\"},{\"name\":\"XL\"},{\"name\":\"L\"}],\"thumbImage\":[\"/assets/images/products/clothes/1.png\",\"/assets/images/products/clothes/2.png\"],\"images\":[\"/assets/images/products/clothes/1.png\",\"/assets/images/products/clothes/2.png\",\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\"],\"description\":\"\",\"slug\":\"jack-jones-mens-t-shirt-1\"},{\"id\":\"2\",\"category\":\"clothing\",\"subCategory\":\"coat\",\"name\":\"Fold Over Collar Plain Blazers\",\"rate\":5,\"price\":84,\"quantity\":6,\"isNew\":true,\"sex\":\"men\",\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\"}],\"thumbImage\":[\"/assets/images/products/clothes/2.png\",\"/assets/images/products/clothes/3.png\"],\"images\":[\"/assets/images/products/clothes/2.png\",\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\",\"/assets/images/products/clothes/5.png\"],\"description\":\"\",\"slug\":\"fold-over-collar-plain-blazers-2\"},{\"id\":\"3\",\"category\":\"clothing\",\"subCategory\":\"shirt\",\"name\":\"Ivory Check Longline Tunic Shirt\",\"rate\":5,\"price\":69,\"quantity\":12,\"sex\":\"men\",\"size\":[{\"name\":\"XXL\"},{\"name\":\"XL\"},{\"name\":\"L\"}],\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\"}],\"thumbImage\":[\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\"],\"images\":[\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\",\"/assets/images/products/clothes/5.png\",\"/assets/images/products/clothes/6.png\"],\"description\":\"\",\"slug\":\"ivory-check-longline-tunic-shirt-3\"},{\"id\":\"4\",\"category\":\"clothing\",\"subCategory\":\"pants\",\"name\":\"Vero Moda Coco Wide Pant\",\"rate\":3,\"price\":36,\"quantity\":4,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/5.png\",\"/assets/images/products/clothes/6.png\"],\"images\":[\"/assets/images/products/clothes/5.png\",\"/assets/images/products/clothes/6.png\",\"/assets/images/products/clothes/7.png\",\"/assets/images/products/clothes/8.png\"],\"description\":\"\",\"slug\":\"vero-moda-coco-wide-pant-4\"},{\"id\":\"5\",\"category\":\"clothing\",\"subCategory\":\"suits\",\"name\":\"Boxy Cardigan\",\"rate\":4,\"price\":72,\"discount\":13,\"quantity\":9,\"sex\":\"women\",\"thumbImage\":[\"/assets/images/products/clothes/7.png\",\"/assets/images/products/clothes/8.png\"],\"images\":[\"/assets/images/products/clothes/7.png\",\"/assets/images/products/clothes/8.png\",\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\"],\"description\":\"\",\"slug\":\"boxy-cardigan-5\"},{\"id\":\"6\",\"category\":\"clothing\",\"subCategory\":\"dress\",\"name\":\"New now committed brothers & sisters\",\"rate\":5,\"price\":69,\"quantity\":9,\"sex\":\"women\",\"thumbImage\":[\"/assets/images/products/clothes/8.png\",\"/assets/images/products/clothes/9.png\"],\"images\":[\"/assets/images/products/clothes/8.png\",\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\"],\"description\":\"\",\"slug\":\"new-now-committed-brothers-sisters-6\"},{\"id\":\"7\",\"category\":\"clothing\",\"subCategory\":\"shorts\",\"name\":\"Scotch Soda Skim Jeans\",\"rate\":5,\"price\":29,\"isNew\":true,\"quantity\":0,\"sex\":\"women\",\"thumbImage\":[\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\"],\"images\":[\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\"],\"description\":\"\",\"slug\":\"scotch-soda-skim-jeans-7\"},{\"id\":\"8\",\"category\":\"clothing\",\"subCategory\":\"dress\",\"name\":\"Champion dress\",\"rate\":4,\"price\":35,\"quantity\":16,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\"],\"images\":[\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\"],\"description\":\"\",\"slug\":\"champion-dress-8\"},{\"id\":\"9\",\"category\":\"clothing\",\"subCategory\":\"suits\",\"name\":\"Solid Notch Lapel Single Button Long Sleeve Blazer\",\"rate\":5,\"price\":75,\"quantity\":6,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\"],\"images\":[\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\"],\"description\":\"\",\"slug\":\"solid-notch-lapel-single-button-long-sleeve-blazer-9\"},{\"id\":\"10\",\"category\":\"clothing\",\"subCategory\":\"shirt\",\"name\":\"Levi'S Western Denim Shirt\",\"rate\":5,\"price\":37,\"quantity\":25,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\"],\"images\":[\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\"],\"description\":\"\",\"slug\":\"levis-western-denim-shirt-10\"},{\"id\":\"11\",\"category\":\"clothing\",\"subCategory\":\"jacket\",\"name\":\"Loap Infery Kids Winter Jacket\",\"rate\":5,\"price\":37,\"quantity\":25,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\"],\"images\":[\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\"],\"description\":\"\",\"slug\":\"loap-infery-kids-winter-jacket-11\"},{\"id\":\"12\",\"category\":\"clothing\",\"subCategory\":\"pants\",\"name\":\"Richtan Hero\",\"rate\":4,\"price\":22,\"quantity\":30,\"isNew\":true,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\"],\"images\":[\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\"],\"description\":\"\",\"slug\":\"richtan-hero-12\"},{\"id\":\"13\",\"category\":\"clothing\",\"subCategory\":\"suits\",\"name\":\"David Jones\",\"rate\":5,\"price\":78,\"quantity\":3,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\"],\"images\":[\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\"],\"description\":\"\",\"slug\":\"david-jones-13\"},{\"id\":\"14\",\"category\":\"clothing\",\"subCategory\":\"dress\",\"name\":\"Basic Hollow Out Flared Midi Skirt\",\"rate\":3,\"price\":22,\"quantity\":18,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\"],\"images\":[\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\"],\"description\":\"\",\"slug\":\"basic-hollow-out-flared-midi-skirt-14\"},{\"id\":\"15\",\"category\":\"clothing\",\"subCategory\":\"shorts\",\"name\":\"Plain Midi Flared Skirts\",\"rate\":3,\"price\":22,\"quantity\":18,\"discount\":4,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\"],\"images\":[\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\",\"/assets/images/products/clothes/20.png\"],\"description\":\"\",\"slug\":\"plain-midi-flared-skirts-15\"},{\"id\":\"16\",\"category\":\"clothing\",\"subCategory\":\"shirt\",\"name\":\"Lapel Zips Plain Long Sleeve Jackets\",\"rate\":5,\"price\":36,\"quantity\":6,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\"],\"images\":[\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\",\"/assets/images/products/clothes/20.png\",\"/assets/images/products/clothes/1.png\"],\"description\":\"\",\"slug\":\"lapel-zips-plain-long-sleeve-jackets-16\"},{\"id\":\"17\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Onion\",\"rate\":5,\"price\":12,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/1.png\",\"/assets/images/products/fruits/2.png\"],\"images\":[\"/assets/images/products/fruits/1.png\",\"/assets/images/products/fruits/2.png\",\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\"],\"description\":\"\",\"slug\":\"onion-17\"},{\"id\":\"18\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Samba onion\",\"rate\":5,\"price\":12,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/2.png\",\"/assets/images/products/fruits/3.png\"],\"images\":[\"/assets/images/products/fruits/2.png\",\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\"],\"description\":\"\",\"slug\":\"samba-onion-18\"},{\"id\":\"19\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"tomato\",\"rate\":4,\"price\":8,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\"],\"images\":[\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\"],\"description\":\"\",\"slug\":\"tomato-19\"},{\"id\":\"20\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"potatoes\",\"rate\":5,\"price\":12,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\"],\"images\":[\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\"],\"description\":\"\",\"slug\":\"potatoes-20\"},{\"id\":\"21\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"lady finger\",\"rate\":3,\"price\":6,\"quantity\":15,\"thumbImage\":[\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\"],\"images\":[\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\"],\"description\":\"\",\"slug\":\"lady-finger-21\"},{\"id\":\"22\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"gingerbone\",\"rate\":4,\"price\":10,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\"],\"images\":[\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\"],\"description\":\"\",\"slug\":\"gingerbone-22\"},{\"id\":\"23\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"lemon\",\"rate\":5,\"price\":5,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\"],\"images\":[\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\"],\"description\":\"\",\"slug\":\"lemon-23\"},{\"id\":\"24\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"pear\",\"rate\":4,\"price\":10,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\"],\"images\":[\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\"],\"description\":\"\",\"slug\":\"pear-24\"},{\"id\":\"25\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Green capsicum\",\"rate\":5,\"price\":13,\"quantity\":9,\"thumbImage\":[\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\"],\"images\":[\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\"],\"description\":\"\",\"slug\":\"green-capsicum-25\"},{\"id\":\"26\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Garlic\",\"rate\":5,\"price\":5,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\"],\"images\":[\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/12.png\"],\"description\":\"\",\"slug\":\"garlic-26\"},{\"id\":\"27\",\"category\":\"fruits\",\"subCategory\":\"nut\",\"name\":\"coconut\",\"rate\":5,\"price\":20,\"quantity\":30,\"thumbImage\":[\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\"],\"images\":[\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\"],\"description\":\"\",\"slug\":\"coconut-27\"},{\"id\":\"28\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Watermelon\",\"rate\":4,\"price\":22,\"discount\":2,\"quantity\":17,\"thumbImage\":[\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/13.png\"],\"images\":[\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\"],\"description\":\"\",\"slug\":\"watermelon-28\"},{\"id\":\"29\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"bitter melon\",\"rate\":4,\"price\":11,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\"],\"images\":[\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\"],\"description\":\"\",\"slug\":\"bitter-melon-29\"},{\"id\":\"30\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Mango\",\"rate\":5,\"price\":26,\"discount\":5,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\"],\"images\":[\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\"],\"description\":\"\",\"slug\":\"mango-30\"},{\"id\":\"31\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Pomegranate\",\"rate\":4,\"price\":11,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\"],\"images\":[\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\"],\"description\":\"\",\"slug\":\"pomegranate-31\"},{\"id\":\"32\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Cabbage\",\"rate\":3,\"price\":16,\"quantity\":20,\"thumbImage\":[\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\"],\"images\":[\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\"],\"description\":\"\",\"slug\":\"cabbage-32\"},{\"id\":\"33\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Orange\",\"rate\":5,\"price\":13,\"isNew\":true,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\"],\"images\":[\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\",\"/assets/images/products/fruits/20.png\"],\"description\":\"\",\"slug\":\"pomegranate-31\"},{\"id\":\"34\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Cauliflower\",\"rate\":4,\"price\":23,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\"],\"images\":[\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\",\"/assets/images/products/fruits/20.png\",\"/assets/images/products/fruits/1.png\"],\"description\":\"\",\"slug\":\"cauliflower-34\"},{\"id\":\"35\",\"category\":\"electronic\",\"subCategory\":\"fridge\",\"name\":\"Panasonic Inverter\",\"rate\":4,\"price\":356,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/1.png\",\"/assets/images/products/electronic/2.png\"],\"images\":[\"/assets/images/products/electronic/1.png\",\"/assets/images/products/electronic/2.png\",\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\"],\"description\":\"\",\"slug\":\"panasonic-inverter-35\"},{\"id\":\"36\",\"category\":\"electronic\",\"subCategory\":\"tv\",\"name\":\"LG Smart Tv 4k 55 inch\",\"rate\":4,\"price\":399,\"discount\":50,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/2.png\",\"/assets/images/products/electronic/3.png\"],\"images\":[\"/assets/images/products/electronic/2.png\",\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\"],\"description\":\"\",\"slug\":\"lg-smart-tv-4k-55-inch-36\"},{\"id\":\"37\",\"category\":\"electronic\",\"subCategory\":\"tv\",\"name\":\"Samsung Smart Tv 4K 55 inch\",\"rate\":5,\"price\":599,\"quantity\":10,\"thumbImage\":[\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\"],\"images\":[\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\"],\"description\":\"\",\"slug\":\"samsung-smart-tv-4k-55-inch-37\"},{\"id\":\"38\",\"category\":\"electronic\",\"subCategory\":\"phone\",\"name\":\"Apple iphone 11 pro max\",\"rate\":4,\"price\":356,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\"],\"images\":[\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\"],\"description\":\"\",\"slug\":\"apple-iphone-11-pro-max-38\"},{\"id\":\"39\",\"category\":\"electronic\",\"subCategory\":\"phone\",\"name\":\"Apple iphone 6s\",\"rate\":5,\"price\":299,\"quantity\":13,\"thumbImage\":[\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\"],\"images\":[\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\"],\"description\":\"\",\"slug\":\"apple-iphone-6s-39\"},{\"id\":\"40\",\"category\":\"electronic\",\"subCategory\":\"fridge\",\"name\":\"Bosch 7 kg Fully-Automatic Front Loading Washing Machine\",\"rate\":4,\"price\":799,\"isNew\":true,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\"],\"images\":[\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\"],\"description\":\"\",\"slug\":\"bosch-7-kg-fully-automatic-front-loading-washing-machine-40\"},{\"id\":\"41\",\"category\":\"electronic\",\"subCategory\":\"air conditioning\",\"name\":\"Split Wall Mounted Air Conditioner 12000 Btu With Led\",\"rate\":3,\"price\":459,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\"],\"images\":[\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\"],\"description\":\"\",\"slug\":\"split-wall-mounted-air-conditioner-12000-btu-with-led-41\"},{\"id\":\"42\",\"category\":\"electronic\",\"subCategory\":\"fan\",\"name\":\"Challenge Black Oscillating Desk Fan\",\"rate\":5,\"price\":199,\"quantity\":13,\"thumbImage\":[\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\"],\"images\":[\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\"],\"description\":\"\",\"slug\":\"challenge-black-oscillating-desk-fan-42\"},{\"id\":\"43\",\"category\":\"electronic\",\"subCategory\":\"fan\",\"name\":\"Lasko Adjustable-Height 16\",\"rate\":3,\"price\":215,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\"],\"images\":[\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\"],\"description\":\"\",\"slug\":\"lasko-adjustable-height-16-43\"},{\"id\":\"44\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"JBL Link Music Bluetooth Speaker\",\"rate\":5,\"price\":239,\"quantity\":4,\"thumbImage\":[\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\"],\"images\":[\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\",\"/assets/images/products/electronic/13.png\"],\"description\":\"\",\"slug\":\"jbl-link-music-bluetooth-speaker-44\"},{\"id\":\"45\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Sony High Power XB60 Portable Bluetooth Speaker\",\"rate\":5,\"price\":199,\"quantity\":23,\"thumbImage\":[\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\"],\"images\":[\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\",\"/assets/images/products/electronic/13.png\",\"/assets/images/products/electronic/14.png\"],\"description\":\"\",\"slug\":\"sony-high-power-xb60-portable-bluetooth-speaker-45\"},{\"id\":\"46\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Sony Wireless Headphones WH-CH510\",\"rate\":4,\"price\":267,\"quantity\":17,\"thumbImage\":[\"/assets/images/products/electronic/12.png\",\"/assets/images/products/electronic/13.png\"],\"images\":[\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\"],\"description\":\"\",\"slug\":\"sony-wireless-headphones-wh-ch510\"},{\"id\":\"47\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Wired Exclusive Smart Design Sony Headphones\",\"rate\":5,\"price\":145,\"quantity\":11,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/electronic/13.png\",\"/assets/images/products/electronic/14.png\"],\"images\":[\"/assets/images/products/electronic/13.png\",\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\"],\"description\":\"\",\"slug\":\"wired-exclusive-smart-design-sony-headphones-47\"},{\"id\":\"48\",\"category\":\"electronic\",\"subCategory\":\"fridge\",\"name\":\"Playstation 4 pro edition\",\"rate\":5,\"price\":365,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\"],\"images\":[\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\"],\"description\":\"\",\"slug\":\"playstation-4-pro-edition-48\"},{\"id\":\"49\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Sony High Power XB60 Portable Bluetooth Speaker\",\"rate\":5,\"price\":199,\"quantity\":23,\"thumbImage\":[\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\"],\"images\":[\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\"],\"description\":\"\",\"slug\":\"sony-high-power-xb60-portable-bluetooth-speaker-45\"},{\"id\":\"50\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Nintendo Switch Lite Turquoise\",\"rate\":5,\"price\":229,\"quantity\":16,\"discount\":15,\"thumbImage\":[\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\"],\"images\":[\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\"],\"description\":\"\",\"slug\":\"nintendo-switch-lite-turquoise-50\"},{\"id\":\"51\",\"category\":\"electronic\",\"subCategory\":\"phone\",\"name\":\"Eureka PowerSpeed Bagless Upright Vacuum Cleaner\",\"rate\":4,\"price\":399,\"quantity\":4,\"thumbImage\":[\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\"],\"images\":[\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\"],\"description\":\"\",\"slug\":\"eureka-powerspeed-bagless-upright-vacuum-cleaner\"},{\"id\":\"52\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"sailing smart robot vacuum cleaner powerful\",\"rate\":5,\"price\":199,\"quantity\":23,\"thumbImage\":[\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\"],\"images\":[\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\",\"/assets/images/products/electronic/21png\"],\"description\":\"\",\"slug\":\"sailing-smart-robot-vacuum-cleaner-powerful-52\"},{\"id\":\"53\",\"category\":\"electronic\",\"subCategory\":\"tv\",\"name\":\"Winterhalter Undercounter Dishwasher\",\"rate\":4,\"price\":699,\"isNew\":true,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\"],\"images\":[\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\",\"/assets/images/products/electronic/1.png\",\"/assets/images/products/electronic/2.png\"],\"description\":\"\",\"slug\":\"winterhalter-undercounter-dishwasher-53\"},{\"id\":\"54\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Afteroom Dining Chair\",\"rate\":5,\"price\":389,\"quantity\":10,\"thumbImage\":[\"/assets/images/products/furniture/1.png\",\"/assets/images/products/furniture/2.png\"],\"images\":[\"/assets/images/products/furniture/1.png\",\"/assets/images/products/furniture/2.png\",\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\"],\"description\":\"\",\"slug\":\"afteroom-dining-chair-54\"},{\"id\":\"55\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Affordances Side Table\",\"rate\":5,\"price\":299,\"discount\":10,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/furniture/2.png\",\"/assets/images/products/furniture/3.png\"],\"images\":[\"/assets/images/products/furniture/2.png\",\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\"],\"description\":\"\",\"slug\":\"affordances-side-table-55\"},{\"id\":\"56\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Armchair 811\",\"rate\":5,\"price\":276,\"quantity\":2,\"thumbImage\":[\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\"],\"images\":[\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\"],\"description\":\"\",\"slug\":\"armchair-811-56\"},{\"id\":\"57\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Bird Stool\",\"rate\":4,\"price\":99,\"quantity\":40,\"thumbImage\":[\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\"],\"images\":[\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\"],\"description\":\"\",\"slug\":\"bird-stool-57\"},{\"id\":\"58\",\"category\":\"furniture\",\"subCategory\":\"table\",\"name\":\"64 Bench\",\"rate\":5,\"price\":457,\"quantity\":3,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\"],\"images\":[\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\"],\"description\":\"\",\"slug\":\"64-bench-58\"},{\"id\":\"59\",\"category\":\"furniture\",\"subCategory\":\"table\",\"name\":\"August Stool\",\"rate\":3,\"price\":129,\"quantity\":13,\"thumbImage\":[\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\"],\"images\":[\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\"],\"description\":\"\",\"slug\":\"august-stool-59\"},{\"id\":\"60\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Aurea Coffee Table\",\"rate\":4,\"price\":155,\"quantity\":14,\"thumbImage\":[\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\"],\"images\":[\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\"],\"description\":\"\",\"slug\":\"aurea-coffee-table-60\"},{\"id\":\"61\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"BM62 Armchair\",\"rate\":5,\"price\":369,\"quantity\":29,\"thumbImage\":[\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\"],\"images\":[\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\"],\"description\":\"\",\"slug\":\"bm62-armchair-57\"},{\"id\":\"62\",\"category\":\"furniture\",\"subCategory\":\"cabinet\",\"name\":\"Carabottino Cabinet\",\"rate\":5,\"price\":4209,\"quantity\":5,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\"],\"images\":[\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\"],\"description\":\"\",\"slug\":\"carabottino-cabinet-62\"},{\"id\":\"63\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"Covent Sofa Narrow, 3 Seater\",\"rate\":5,\"price\":625,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\"],\"images\":[\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\"],\"description\":\"\",\"slug\":\"covent-sofa-narrow-3-seater-63\"},{\"id\":\"64\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"Clerici Lounge Chair\",\"rate\":5,\"price\":625,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\"],\"images\":[\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\"],\"description\":\"\",\"slug\":\"clerici-lounge-chair-64\"},{\"id\":\"65\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Coast Table Square\",\"rate\":3,\"price\":459,\"discount\":15,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\"],\"images\":[\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\",\"/assets/images/products/furniture/15.png\"],\"description\":\"\",\"slug\":\"coast-table-square-65\"},{\"id\":\"66\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"Cugino\",\"rate\":5,\"price\":149,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\"],\"images\":[\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\",\"/assets/images/products/furniture/15.png\",\"/assets/images/products/furniture/16.png\"],\"description\":\"\",\"slug\":\"cugino-66\"},{\"id\":\"67\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"DL1 Tangram Low Side Table\",\"rate\":5,\"price\":479,\"quantity\":9,\"thumbImage\":[\"/assets/images/products/furniture/14.png\",\"/assets/images/products/furniture/15.png\"],\"images\":[\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\",\"/assets/images/products/furniture/19.png\"],\"description\":\"\",\"slug\":\"dl1-tangram-low-side-table-66\"},{\"id\":\"68\",\"category\":\"furniture\",\"subCategory\":\"cabinet\",\"name\":\"Champ Stool\",\"rate\":5,\"price\":149,\"isNew\":true,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/furniture/15.png\",\"/assets/images/products/furniture/16.png\"],\"images\":[\"/assets/images/products/furniture/15.png\",\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\"],\"description\":\"\",\"slug\":\"champ-stool-68\"},{\"id\":\"69\",\"category\":\"furniture\",\"subCategory\":\"cabinet\",\"name\":\"Circle Mirror\",\"rate\":4,\"price\":129,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\"],\"images\":[\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\",\"/assets/images/products/furniture/19.png\"],\"description\":\"\",\"slug\":\"circle-mirror-69\"},{\"id\":\"70\",\"category\":\"furniture\",\"subCategory\":\"lamp\",\"name\":\"Carrie\",\"rate\":5,\"price\":49,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\"],\"images\":[\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\",\"/assets/images/products/furniture/19.png\",\"/assets/images/products/furniture/20.png\"],\"description\":\"\",\"slug\":\"carrie-70\"},{\"id\":\"71\",\"category\":\"comestic\",\"subCategory\":\"lipstick\",\"name\":\"The expert mascaraa\",\"rate\":4,\"price\":35,\"new\":true,\"quantity\":0,\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\"}],\"thumbImage\":[\"/assets/images/products/comestic/1.png\",\"/assets/images/products/comestic/2.png\"],\"images\":[\"/assets/images/products/comestic/1.png\",\"/assets/images/products/comestic/2.png\",\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\"],\"description\":\"\",\"slug\":\"the-expert-mascaraa-71\"},{\"id\":\"72\",\"category\":\"comestic\",\"subCategory\":\"lipstick\",\"name\":\"Velvet Melon High Intensity\",\"rate\":5,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/2.png\",\"/assets/images/products/comestic/3.png\"],\"images\":[\"/assets/images/products/comestic/2.png\",\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\"],\"description\":\"\",\"slug\":\"velvet-melon-high-intensity-72\"},{\"id\":\"73\",\"category\":\"comestic\",\"subCategory\":\"lipstick\",\"name\":\"Leather shopper bag\",\"rate\":4,\"price\":35,\"discount\":5,\"quantity\":3,\"thumbImage\":[\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\"],\"images\":[\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\"],\"description\":\"\",\"slug\":\"leather-shopper-bag-73\"},{\"id\":\"74\",\"category\":\"comestic\",\"subCategory\":\"powder\",\"name\":\"Luxe jewel lipstick\",\"rate\":5,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\"],\"images\":[\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\",\"/assets/images/products/comestic/7.png\"],\"description\":\"\",\"slug\":\"luxe-jewel-lipstick-74\"},{\"id\":\"75\",\"category\":\"comestic\",\"subCategory\":\"powder\",\"name\":\"Penpoint seamless beauty\",\"rate\":5,\"price\":40,\"quantity\":12,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\"],\"images\":[\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\",\"/assets/images/products/comestic/7.png\",\"/assets/images/products/comestic/8.png\"],\"description\":\"\",\"slug\":\"penpoint-seamless-beauty-75\"},{\"id\":\"76\",\"category\":\"comestic\",\"subCategory\":\"powder\",\"name\":\"The Sneaky lips\",\"rate\":5,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/7.png\",\"/assets/images/products/comestic/8.png\"],\"images\":[\"/assets/images/products/comestic/6.png\",\"/assets/images/products/comestic/7.png\",\"/assets/images/products/comestic/8.png\",\"/assets/images/products/comestic/9.png\"],\"description\":\"\",\"slug\":\"the-sneaky-lips-76\"},{\"id\":\"77\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"White Facial Cream\",\"rate\":4,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/8.png\",\"/assets/images/products/comestic/9.png\"],\"images\":[\"/assets/images/products/comestic/8.png\",\"/assets/images/products/comestic/9.png\",\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\"],\"description\":\"\",\"slug\":\"white-facial-cream-77\"},{\"id\":\"78\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"Orange Massage Cream\",\"rate\":4,\"price\":55,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/9.png\",\"/assets/images/products/comestic/10.png\"],\"images\":[\"/assets/images/products/comestic/9.png\",\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\"],\"description\":\"\",\"slug\":\"orange-massage-cream-78\"},{\"id\":\"79\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"Valinta Fairness Massage Cream\",\"rate\":4,\"price\":27,\"discount\":3,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\"],\"images\":[\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\"],\"description\":\"\",\"slug\":\"valinta-fairness-massage-cream-79\"},{\"id\":\"80\",\"category\":\"comestic\",\"subCategory\":\"nail polish\",\"name\":\"Massage Cream Cucumber\",\"rate\":4,\"price\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\"],\"images\":[\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\"],\"description\":\"\",\"slug\":\"massage-cream-cucumber-80\"},{\"id\":\"81\",\"category\":\"comestic\",\"subCategory\":\"nail polish\",\"name\":\"Matte Walnut & Bamboo Scrub\",\"rate\":4,\"price\":32,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\"],\"images\":[\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\",\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/15.png\"],\"description\":\"\",\"slug\":\"matte-walnut-&-bamboo-scrub-81\"},{\"id\":\"82\",\"category\":\"comestic\",\"subCategory\":\"mascara\",\"name\":\"Castor Oil BP\",\"rate\":4,\"price\":24,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/13.png\",\"/assets/images/products/comestic/14.png\"],\"images\":[\"/assets/images/products/comestic/13.png\",\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/1.png\",\"/assets/images/products/comestic/2.png\"],\"description\":\"\",\"slug\":\"castor-oil-bp-82\"},{\"id\":\"83\",\"category\":\"comestic\",\"subCategory\":\"mascara\",\"name\":\"Metallic Cap Cosmetic\",\"rate\":5,\"price\":44,\"brand\":\"kenzo\",\"code\":\"PM 03\",\"point\":17,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/15.png\"],\"images\":[\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/15.png\",\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\"],\"description\":\"\",\"slug\":\"metallic-cap-cosmetic-83\"},{\"id\":\"84\",\"category\":\"comestic\",\"subCategory\":\"mascara\",\"name\":\"Photo Match Concealer\",\"rate\":5,\"price\":39,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/15.png\",\"/assets/images/products/comestic/16.png\"],\"images\":[\"/assets/images/products/comestic/15.png\",\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\"],\"description\":\"\",\"slug\":\"photo-match-concealer-84\"},{\"id\":\"85\",\"category\":\"comestic\",\"subCategory\":\"nail polish\",\"name\":\"Matte Mousse Foundation\",\"rate\":5,\"price\":46,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\"],\"images\":[\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\",\"/assets/images/products/comestic/19.png\"],\"description\":\"\",\"slug\":\"matte-mousse-foundation-85\"},{\"id\":\"86\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"White Sandal Beauty\",\"rate\":5,\"price\":67,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\"],\"images\":[\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\",\"/assets/images/products/comestic/19.png\",\"/assets/images/products/comestic/20.png\"],\"description\":\"\",\"slug\":\"white-sandal-beauty-86\"}]");

/***/ }),

/***/ "./src/pages/homepage4.js":
/*!********************************!*\
  !*** ./src/pages/homepage4.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/LayoutOne */ "./src/components/layouts/LayoutOne.js");
/* harmony import */ var _components_shop_ShopLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop/ShopLayout */ "./src/components/shop/ShopLayout.js");
/* harmony import */ var _data_product_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/product.json */ "./src/data/product.json");
var _data_product_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/product.json */ "./src/data/product.json", 1);
/* harmony import */ var _common_useProductData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/useProductData */ "./src/common/useProductData.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\pages\\homepage4.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.globalReducer);
  const data = Object(_common_useProductData__WEBPACK_IMPORTED_MODULE_6__["default"])(_data_product_json__WEBPACK_IMPORTED_MODULE_5__, globalState.category, router.query.q);
  return __jsx(_components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Homepage 3",
    containerType: "fluid",
    headerStyle: "two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_shop_ShopLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shopSidebarResponsive: {
      xs: 24,
      lg: 4
    },
    shopContentResponsive: {
      xs: 24,
      lg: 20
    },
    productResponsive: {
      xs: 12,
      sm: 8,
      md: 6,
      xxl: 4
    },
    productPerPage: 18,
    data: [...data],
    containerType: "fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: addToCart, removeFromCart, removeAllFromCart, decreaseQuantityCart, increaseQuantityCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllFromCart", function() { return removeAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseQuantityCart", function() { return decreaseQuantityCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseQuantityCart", function() { return increaseQuantityCart; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const addToCart = (product, quantity, color, size) => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].ADD_TO_CART,
  product,
  quantity,
  color,
  size
});
const removeFromCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].REMOVE_FROM_CART,
  cartId
});
const removeAllFromCart = () => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].REMOVE_ALL_FROM_CART
});
const decreaseQuantityCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].DECREASE_QUANTITY_CART,
  cartId
});
const increaseQuantityCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].INCREASE_QUANTITY_CART,
  cartId
});

/***/ }),

/***/ "./src/redux/actions/globalActions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/globalActions.js ***!
  \********************************************/
/*! exports provided: setGlobalLanguage, setGlobalCurrency, setGlobalCategory, setGlobalSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalLanguage", function() { return setGlobalLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCurrency", function() { return setGlobalCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCategory", function() { return setGlobalCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalSearch", function() { return setGlobalSearch; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const setGlobalLanguage = lang => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_LANGUAGE,
  lang
});
const setGlobalCurrency = cur => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CURRENCY,
  cur
});
const setGlobalCategory = category => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CATEGORY,
  category
});
const setGlobalSearch = keyword => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_SEARCH,
  keyword
});

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: setSort, setSubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubCategory", function() { return setSubCategory; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const setSort = sortType => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SORT,
  sortType
});
const setSubCategory = subCategory => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SUBCATEGORY,
  subCategory
});

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: addToWishlist, removeFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlist", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromWishlist", function() { return removeFromWishlist; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const addToWishlist = product => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].ADD_TO_WISHLIST,
  product
});
const removeFromWishlist = productId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].REMOVE_FROM_WISHLIST,
  productId
});

/***/ }),

/***/ "./src/redux/defines.js":
/*!******************************!*\
  !*** ./src/redux/defines.js ***!
  \******************************/
/*! exports provided: GLOBAL, CART, WISHLIST, SHOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
const GLOBAL = {
  SET_LANGUAGE: "SET_LANGUAGE",
  SET_CURRENCY: "SET_CURRENCY",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SEARCH: "SET_SEARCH"
};
const CART = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  DECREASE_QUANTITY_CART: "DECREASE_QUANTITY_CART",
  INCREASE_QUANTITY_CART: "INCREASE_QUANTITY_CART"
};
const WISHLIST = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST"
};
const SHOP = {
  SET_SORT: "SET_SORT",
  SET_SUBCATEGORY: "SET_SUBCATEGORY"
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9DbGllbnRPbmx5UG9ydGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vV2l0aEhlYWRlclNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zaG9wVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91c2VEZWJvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlUHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L0NhcnRTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvQ2FydFNpZGViYXJJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1F1YW50aXR5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyU3ViY3JpYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTWVudVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvVG9wTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbC9lbGVtZW50cy9Qcm9kdWN0R3VhcmFudGVlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWxDb250ZW50L1Byb2R1Y3REZXRhaWxDb250ZW50T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvU2hvcENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hvcC9TaG9wQ29udGVudEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaG9wL1Nob3BDb250ZW50UHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaG9wL1Nob3BMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hvcC9TaG9wUXVpY2tWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvU2hvcFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3VicGFnZXMvU3VicGFnZXNTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpc2hsaXN0L1dpc2hsaXN0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aXNobGlzdC9XaXNobGlzdFNpZGViYXJJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lcGFnZTQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIl0sIm5hbWVzIjpbImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInByb3BzIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsInVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2xpZW50T25seVBvcnRhbCIsInNlbGVjdG9yIiwidXNlUmVmIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlUG9ydGFsIiwiV2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJzZXRTY3JvbGwiLCJpc0hlYWRlckZpeGVkIiwic2V0SXNIZWFkZXJGaXhlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsIlNIT1AiLCJjYXRlZ29yeSIsImljb25DbGFzcyIsImdldFByb2R1Y3RzQnlDYXRlZ29yeSIsImFyciIsImZpbHRlciIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImdldFByb2R1Y3RzQnlTbHVnIiwic2x1ZyIsImZpbmQiLCJnZXRBbGxWYWx1ZXNPZktleSIsInN1YkNhdGVnb3J5IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJnZXRBbGxTdWJDYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsInN1YkNhdGVnb3JpZXNBcnIiLCJnZXRQcm9kdWN0c0J5U29ydCIsInR5cGUiLCJzb3J0V2l0aENvbmRpdGlvbiIsInJldmVyc2UiLCJudW0iLCJzb3J0IiwiYSIsImIiLCJnZXRQcm9kdWN0c0J5RmlsdGVyIiwic29ydFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJwcm9kdWN0IiwiZ2V0UHJvZHVjdHNCeVNlYXJjaCIsImtleXdvcmQiLCJnZXRUb3RhbFByb2R1Y3RJbkNhcnQiLCJyZWR1Y2UiLCJ0b3RhbCIsImNhcnRRdWFudGl0eSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJmb3JFYWNoIiwiZGlzY291bnQiLCJwcmljZSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImNhcnRBcnIiLCJwaWQiLCJpZCIsImNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkIiwicHJvZHVjdHNJbkNhcnQiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsImF2YWlhYmxlIiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbldpc2hsaXN0Iiwid2lzaGxpc3RBcnIiLCJ1c2VEZWJvdW5jZSIsImRlbGF5IiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ1c2VQcm9kdWN0RGF0YSIsInByb2R1Y3REYXRhIiwic2V0RGF0YSIsImZvcm1hdEN1cnJlbmN5IiwibG9jYWxlcyIsImN1cnJlbmN5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiZm9ybWF0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkNhcnRTaWRlYmFyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnRTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0UmVkdWNlciIsImdsb2JhbFN0YXRlIiwiZ2xvYmFsUmVkdWNlciIsIm1hcCIsImluZGV4IiwibWVtbyIsIkNhcnRTaWRlYmFySXRlbSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2V0UXVhbnRpdHkiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsInByZXZlbnREZWZhdWx0Iiwic2hvd01vZGFsIiwiaGFuZGxlT2siLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJZCIsImhhbmRsZUNhbmNlbCIsInRodW1iSW1hZ2UiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiUXVhbnRpdHlTZWxlY3RvciIsIm1pbiIsIm1heCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwic2l6ZSIsIm5vUm91bmQiLCJjbGFzc05hbWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsInNldFZhbHVlIiwiZGVjcmVhc2VWYWx1ZSIsInVzZUNhbGxiYWNrIiwiaW5jcmVhc2VWYWx1ZSIsImNsYXNzTmFtZXMiLCJGb290ZXIiLCJjb250YWluZXJUeXBlIiwibGlua3MiLCJpbmZvcm1hdGlvbiIsImFjY291bnQiLCJDdXN0b21Gb3JtIiwic3RhdHVzIiwib25WYWxpZGF0ZWQiLCJvbkZpbmlzaCIsImxvZyIsIkVNQUlMIiwiZW1haWwiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJjb2xvciIsIl9faHRtbCIsIkZvb3RlclN1YmNyaWJlIiwic3Vic2NyaWJlIiwiZm9ybURhdGEiLCJIZWFkZXIiLCJoZWFkZXJTdHlsZSIsInJlbmRlclN0eWxlQ2xhc3MiLCJNZW51Iiwid2lzaGxpc3RTdGF0ZSIsIndpc2hsaXN0UmVkdWNlciIsImNhcnRTaWRlYmFyT3BlbiIsInNldENhcnRTaWRlYmFyT3BlbiIsIm1lbnVTaWRlYmFyT3BlbiIsInNldE1lbnVTaWRlYmFyT3BlbiIsIndpc2hsaXN0U2lkZWJhck9wZW4iLCJzZXRXaXNobGlzdFNpZGViYXJPcGVuIiwicHJvZHVjdHNEYXRhIiwiTWVudVNpZGViYXIiLCJTdWJNZW51IiwiT3B0aW9uIiwiU2VsZWN0Iiwib25TZWxlY3RMYW5ndWFnZSIsInNldEdsb2JhbExhbmd1YWdlIiwib25TZWxlY3RDdXJyZW5jeSIsInNldEdsb2JhbEN1cnJlbmN5IiwibGFuZ3VhZ2UiLCJ3aWR0aCIsIlNlYXJjaEJhck1vYmlsZSIsImZpbGxEYXRhIiwicGxhY2Vob2xkZXIiLCJ1c2VSb3V0ZXIiLCJzZXRTZWFyY2giLCJzaG93RHJvcGRvd25PcHRpb25zIiwic2V0U2hvd0Ryb3Bkb3duT3B0aW9ucyIsImRlYm91bmRWYWx1ZSIsInNldEdsb2JhbFNlYXJjaCIsInJlbmRlckF1dG9GaWxsSXRlbSIsIm9uU2VsZWN0Q2F0ZW9yeSIsInNldEdsb2JhbENhdGVnb3J5Iiwic2V0U3ViQ2F0ZWdvcnkiLCJvcGVuRHJvcGRvd25PcHRpb24iLCJjbG9zZURyb3Bkb3duT3B0aW9uIiwib25TZWxlY3RPcHRpb24iLCJvcHRpb24iLCJvblNlYXJjaCIsInEiLCJpbnB1dFZhbHVlIiwiaW5kZXhPZiIsIlRvcE5hdiIsIlNjcm9sbEhlYWRlciIsIkxheW91dE9uZSIsInRpdGxlIiwiY2xlYXJTcGFjZVRvcCIsImNvbmZpZyIsIm1heENvdW50IiwiZHVyYXRpb24iLCJDb250YWluZXIiLCJyZW5kZXJDb250YWluZXJUeXBlIiwiUHJvZHVjdCIsInByb2R1Y3RTdHlsZSIsImltYWdlTG9hZGluZyIsInNldEltYWdlTG9hZGluZyIsInByb2R1Y3RJbldpc2hsaXN0IiwiYXZhaWFibGVRdWFudGl0eSIsInJlbmRlclByb2R1Y3RUeXBlIiwiaXNOZXciLCJvbkFkZFRvQ2FydCIsImFkZFRvQ2FydCIsIm9uQWRkVG9XaXNobGlzdCIsInJlbW92ZUZyb21XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJhdmFpYWxlU3R5bGVzIiwiaGFuZGxlSW1hZ2VMb2FkZWQiLCJsb2FkaW5nIiwiYWN0aXZlIiwicmF0ZSIsIlByb2R1Y3RHdWFyYW50ZWVkIiwiUHJvZHVjdERldGFpbENvbnRlbnRPbmUiLCJvbkFkZGVkVG9DYXJ0IiwiaGlkZUd1YXJhbnRlZWQiLCJxdWFudGl0eUNvbnRyb2xsZXJOb1JvdW5kIiwic2hvd0NvdW50ZG93biIsImN1cnJlbnRDb2xvciIsInNldEN1cnJlbnRDb2xvciIsImN1cnJlbnRTaXplIiwic2V0Q3VycmVudFNpemUiLCJvbkFkZFByb2R1Y3RUb0NhcnQiLCJvbkNob29zZVNpemUiLCJvbkNob29zZUNvbG9yIiwiRGF0ZSIsIm5vdyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY29tcGxldGVkIiwiemVyb1BhZCIsInZhcmlhdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQ29kZSIsInZhbCIsImRpc2FibGVkIiwiU2hvcENvbnRlbnQiLCJmaXZlQ29sdW1uIiwicHJvZHVjdFJlc3BvbnNpdmUiLCJwcm9kdWN0UGVyUGFnZSIsIlNob3BDb250ZW50SGVhZGVyIiwic2hvcFN0YXRlIiwic2hvcFJlZHVjZXIiLCJoYW5kbGVDaGFuZ2UiLCJzZXRTb3J0IiwiU2hvcENvbnRlbnRQcm9kdWN0IiwiY3VycmVudERhdGEiLCJzZXRDdXJyZW50RGF0YSIsInNldFBhZ2UiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJpdGVtUmVuZGVyIiwib3JpZ2luYWxFbGVtZW50Iiwib25DaGFuZ2VPZmZzZXQiLCJwYWdlU2l6ZSIsInhzIiwic20iLCJ4bCIsInh4bCIsIlNob3BMYXlvdXQiLCJzaG9wU2lkZWJhclJlc3BvbnNpdmUiLCJzaG9wQ29udGVudFJlc3BvbnNpdmUiLCJTaG9wUXVpY2tWaWV3Iiwic2V0TW9kYWxWaXNpYmxlIiwic2xpZGVyMVNldHRpbmdzIiwiYXJyb3dzIiwic2xpZGVyMlNldHRpbmdzIiwic2xpZGVzVG9TaG93IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJmb2N1c09uU2VsZWN0IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIm5hdjEiLCJzZXROYXYxIiwibmF2MiIsInNldE5hdjIiLCJjIiwiaW1hZ2VzIiwiaW1nIiwiU2hvcFNpZGViYXIiLCJjYXRlZ29yaWVzIiwib25DaG9vc2VTdWJDYXRlZ29yeSIsIlN1YnBhZ2VzU2lkZWJhciIsInNob3dEcmF3ZXIiLCJvbkNsb3NlIiwiV2lzaGxpc3RTaWRlYmFyIiwiV2lzaGxpc3RTaWRlYmFySXRlbSIsInByb2R1Y3RJbkNhcnQiLCJvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QiLCJIb21lIiwibGciLCJtZCIsIkNBUlQiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9GUk9NX0NBUlQiLCJyZW1vdmVBbGxGcm9tQ2FydCIsIlJFTU9WRV9BTExfRlJPTV9DQVJUIiwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVCIsIklOQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJsYW5nIiwiR0xPQkFMIiwiU0VUX0xBTkdVQUdFIiwiY3VyIiwiU0VUX0NVUlJFTkNZIiwiU0VUX0NBVEVHT1JZIiwiU0VUX1NFQVJDSCIsIlNFVF9TT1JUIiwiU0VUX1NVQkNBVEVHT1JZIiwiV0lTSExJU1QiLCJBRERfVE9fV0lTSExJU1QiLCJwcm9kdWN0SWQiLCJSRU1PVkVfRlJPTV9XSVNITElTVCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9ob21lcGFnZTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9ob21lcGFnZTQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMsIE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlLCBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIGZyb20gdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IHBhZ2UgKGJyb3dzZXIgb25seSkuXG4gKi9cbmZ1bmN0aW9uIGlzTG9jYWwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpblxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIGlmIChcbiAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICBlLmN0cmxLZXkgfHxcbiAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICApIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgY2hpbGRFbG0gJiYgY2hpbGRFbG0udGFnTmFtZSkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgIGlmIChcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiAmJlxuICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICApIHtcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGNoaWxkUHJvcHMuaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeSdcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVBhdGhcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgIDogZmluYWxVcmwuaHJlZlxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgX19OIH0gPSBlLnN0YXRlXG4gICAgaWYgKCFfX04pIHtcbiAgICAgIC8vIHRoaXMgaGlzdG9yeSBzdGF0ZSB3YXNuJ3QgY3JlYXRlZCBieSBuZXh0LmpzIHNvIGl0IGNhbiBiZSBpZ25vcmVkXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbEJhc2VQYXRoKGFzKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhvcHRpb25zLl9OX1gsIG9wdGlvbnMuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZW5jb2RlIGFzIGVuY29kZVF1ZXJ5c3RyaW5nIH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcXVlcnkgPSAnJyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuICAgIHF1ZXJ5ID0gZW5jb2RlUXVlcnlzdHJpbmcocXVlcnkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJjb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTCgnaHR0cDovL24nKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnRPbmx5UG9ydGFsKHsgY2hpbGRyZW4sIHNlbGVjdG9yIH0pIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgc2V0TW91bnRlZCh0cnVlKTtcclxuICB9LCBbc2VsZWN0b3JdKTtcclxuXHJcbiAgcmV0dXJuIG1vdW50ZWQgPyBjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIHJlZi5jdXJyZW50KSA6IG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2l0aEhlYWRlclNjcm9sbChXcmFwcGVkQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lzSGVhZGVyRml4ZWQsIHNldElzSGVhZGVyRml4ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbCA+PSBoZWFkZXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbc2Nyb2xsXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2hlYWRlclJlZn1cclxuICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItc2Nyb2xsLXdyYXBwZXIgJHtpc0hlYWRlckZpeGVkID8gXCJmaXhlZFwiIDogXCJcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgU0hPUCA9IHtcclxuICBjYXRlZ29yeTogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNsb3RoaW5nXCIsXHJcbiAgICAgIHN1YjogW1xyXG4gICAgICAgIHsgbmFtZTogXCJhY2Nlc3Nvcmllc1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1hY2Nlc3Nvcmllc1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInBhbnRzXCIsIGljb25DbGFzczogXCJpY29uLXBhbnRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJzaG9ydHNcIiwgaWNvbkNsYXNzOiBcImljb24tc2hvcnRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJqYWNrZXRcIiwgaWNvbkNsYXNzOiBcImljb24tamFja2V0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiZHJlc3NcIiwgaWNvbkNsYXNzOiBcImljb24tZHJlc3NcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJzdWl0c1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1zdWl0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwic2hpcnRcIiwgaWNvbkNsYXNzOiBcImljb24tc2hpcnRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJmcnVpdHNcIixcclxuICAgICAgc3ViOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInZlZ2F0YWJsZXNcIiwgaWNvbkNsYXNzOiBcImljb24tdmVnZXRhYmxlXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiZnJ1aXRzXCIsIGljb25DbGFzczogXCJpY29uLWZydWl0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibnV0XCIsIGljb25DbGFzczogXCJpY29uLW51dFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIm11c2hyb29tXCIsIGljb25DbGFzczogXCJpY29uLW11c2hyb29tXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZWxlY3Ryb25pY1wiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwiYWlyIGNvbmRpdGlvbmluZ1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1haXItY29uZGl0aW9uaW5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGhvbmVcIiwgaWNvbkNsYXNzOiBcImljb24tcGhvbmVcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJ0dlwiLCBpY29uQ2xhc3M6IFwiaWNvbi1kZXNrdG9wXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwic3BlYWtlclwiLCBpY29uQ2xhc3M6IFwiaWNvbi1zcGVha2VyXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiZnJpZGdlXCIsIGljb25DbGFzczogXCJpY29uLWZyaWRnZVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImZhblwiLCBpY29uQ2xhc3M6IFwiaWNvbi1mYW5cIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJmdXJuaXR1cmVcIixcclxuICAgICAgc3ViOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInRhYmxlXCIsIGljb25DbGFzczogXCJpY29uLXRhYmxlXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY2hhaXJcIiwgaWNvbkNsYXNzOiBcImljb24tY2hhaXJcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjYWJpbmV0XCIsIGljb25DbGFzczogXCJpY29uLWNhYmluZXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJsYW1wXCIsIGljb25DbGFzczogXCJpY29uLWxhbXBcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJiZWRcIiwgaWNvbkNsYXNzOiBcImljb24tYmVkXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29tZXN0aWNcIixcclxuICAgICAgc3ViOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcImxpcHN0aWNrXCIsIGljb25DbGFzczogXCJpY29uLWxpcHN0aWNrXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicG93ZGVyXCIsIGljb25DbGFzczogXCJpY29uLXBvd2RlclwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInBlcmZ1bWVcIiwgaWNvbkNsYXNzOiBcImljb24tcGVyZnVybVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIm5haWwgcG9saXNoXCIsIGljb25DbGFzczogXCJpY29uLW5haWxcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJtYXNjYXJhXCIsIGljb25DbGFzczogXCJpY29uLW1hc2NhcmFcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG4iLCIvL1Byb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkgPSAoYXJyLCBjYXRlZ29yeSkgPT4ge1xyXG4gIHJldHVybiBjYXRlZ29yeVxyXG4gICAgPyBhcnIuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IGNhdGVnb3J5LnRvTG93ZXJDYXNlKClcclxuICAgICAgKVxyXG4gICAgOiBhcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNsdWcgPSAoYXJyLCBzbHVnKSA9PiB7XHJcbiAgcmV0dXJuIHNsdWcgJiYgdHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCJcclxuICAgID8gYXJyLmZpbmQoKHApID0+IHAuc2x1Zy50b0xvd2VyQ2FzZSgpID09PSBzbHVnLnRvTG93ZXJDYXNlKCkpXHJcbiAgICA6IGFycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxWYWx1ZXNPZktleSA9IChhcnIsIGtleSkgPT4ge1xyXG4gIGlmIChrZXkgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgbGV0IHN1YkNhdGVnb3J5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXN1YkNhdGVnb3J5LmluY2x1ZGVzKGFycltpXVtrZXldKSkge1xyXG4gICAgICAgIHN1YkNhdGVnb3J5LnB1c2goYXJyW2ldW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3ViQ2F0ZWdvcnkubGVuZ3RoID4gMCA/IHN1YkNhdGVnb3J5IDogbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFN1YkNhdGVnb3JpZXMgPSAoYXJyLCBjYXRlZ29yeSkgPT4ge1xyXG4gIGlmIChjYXRlZ29yeSAmJiB0eXBlb2YgY2F0ZWdvcnkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIGxldCBwcm9kdWN0cyA9IGdldFByb2R1Y3RzKGFyciwgY2F0ZWdvcnkpO1xyXG4gICAgbGV0IHN1YkNhdGVnb3JpZXNBcnIgPSBnZXRBbGxWYWx1ZXNPZktleShwcm9kdWN0cywgXCJzdWJDYXRlZ29yeVwiKTtcclxuICAgIHJldHVybiBzdWJDYXRlZ29yaWVzQXJyICE9PSBudWxsID8gc3ViQ2F0ZWdvcmllc0FyciA6IG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U29ydCA9IChwcm9kdWN0cywgdHlwZSkgPT4ge1xyXG4gIGZ1bmN0aW9uIHNvcnRXaXRoQ29uZGl0aW9uKGFyciwgdmFsdWUsIHJldmVyc2UgPSBmYWxzZSkge1xyXG4gICAgbGV0IG51bSA9IHJldmVyc2UgPyAtMSA6IDE7XHJcbiAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGFbdmFsdWVdIDwgYlt2YWx1ZV0pIHtcclxuICAgICAgICByZXR1cm4gLTEgKiBudW07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFbdmFsdWVdID4gYlt2YWx1ZV0pIHtcclxuICAgICAgICByZXR1cm4gMSAqIG51bTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gXCJhelwiKSB7XHJcbiAgICByZXR1cm4gc29ydFdpdGhDb25kaXRpb24ocHJvZHVjdHMsIFwibmFtZVwiKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiemFcIikge1xyXG4gICAgcmV0dXJuIHNvcnRXaXRoQ29uZGl0aW9uKHByb2R1Y3RzLCBcIm5hbWVcIiwgdHJ1ZSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImxvd0hpZ2hcIikge1xyXG4gICAgcmV0dXJuIHNvcnRXaXRoQ29uZGl0aW9uKHByb2R1Y3RzLCBcInByaWNlXCIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJoaWdoTG93XCIpIHtcclxuICAgIHJldHVybiBzb3J0V2l0aENvbmRpdGlvbihwcm9kdWN0cywgXCJwcmljZVwiLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5RmlsdGVyID0gKHByb2R1Y3RzLCBzb3J0VHlwZSwgc3ViQ2F0ZWdvcnkpID0+IHtcclxuICBsZXQgZmlsdGVyZWRQcm9kdWN0ID0gc3ViQ2F0ZWdvcnlcclxuICAgID8gcHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PlxyXG4gICAgICAgICAgcHJvZHVjdC5zdWJDYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBzdWJDYXRlZ29yeS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIClcclxuICAgIDogcHJvZHVjdHM7XHJcbiAgcmV0dXJuIGdldFByb2R1Y3RzQnlTb3J0KGZpbHRlcmVkUHJvZHVjdCwgc29ydFR5cGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlTZWFyY2ggPSAocHJvZHVjdHMsIGtleXdvcmQpID0+IHtcclxuICByZXR1cm4ga2V5d29yZCAmJiBrZXl3b3JkICE9PSBcIlwiXHJcbiAgICA/IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT5cclxuICAgICAgICBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIClcclxuICAgIDogcHJvZHVjdHM7XHJcbn07XHJcblxyXG4vL0NhcnRcclxuZXhwb3J0IGNvbnN0IGdldFRvdGFsUHJvZHVjdEluQ2FydCA9IChhcnIpID0+IHtcclxuICByZXR1cm4gYXJyID8gYXJyLnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5jYXJ0UXVhbnRpdHksIDApIDogMDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKGFycikgPT4ge1xyXG4gIGxldCB0b3RhbCA9IDA7XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmRpc2NvdW50KSB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5XHJcbiAgICAgICAgPyAoaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQpICogaXRlbS5jYXJ0UXVhbnRpdHlcclxuICAgICAgICA6IGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jYXJ0UXVhbnRpdHkgPyBpdGVtLnByaWNlICogaXRlbS5jYXJ0UXVhbnRpdHkgOiBpdGVtLnByaWNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB0b3RhbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSAoY2FydEFyciwgcGlkKSA9PiB7XHJcbiAgcmV0dXJuIHBpZCA/IGNhcnRBcnIuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGlkKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBdmFpYWJsZVF1YW50aXR5VG9BZGQgPSAoYXJyLCBwcm9kdWN0KSA9PiB7XHJcbiAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBhcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcclxuICBpZiAocHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQgPVxyXG4gICAgICBwcm9kdWN0c0luQ2FydC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHByb2R1Y3RzSW5DYXJ0LnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5jYXJ0UXVhbnRpdHksIDApO1xyXG4gICAgbGV0IGF2YWlhYmxlID0gcHJvZHVjdC5xdWFudGl0eSAtIHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0O1xyXG4gICAgcmV0dXJuIGF2YWlhYmxlIDwgMSA/IDAgOiBhdmFpYWJsZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvZHVjdC5xdWFudGl0eTtcclxuICB9XHJcbn07XHJcblxyXG4vL1dpc2hsaXN0XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCA9ICh3aXNobGlzdEFyciwgcGlkKSA9PiB7XHJcbiAgcmV0dXJuIHBpZCA/IHdpc2hsaXN0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBpZCkgOiBudWxsO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XHJcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGVib3VuY2VkVmFsdWUodmFsdWUpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbdmFsdWVdKTtcclxuICByZXR1cm4gZGVib3VuY2VkVmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5LCBnZXRQcm9kdWN0c0J5U2VhcmNoIH0gZnJvbSBcIi4vc2hvcFV0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcm9kdWN0RGF0YShwcm9kdWN0RGF0YSwgY2F0ZWdvcnksIHF1ZXJ5KSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvZHVjdERhdGEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHF1ZXJ5XHJcbiAgICAgID8gZ2V0UHJvZHVjdHNCeVNlYXJjaChnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocHJvZHVjdERhdGEsIGNhdGVnb3J5KSwgcXVlcnkpXHJcbiAgICAgIDogZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KHByb2R1Y3REYXRhLCBjYXRlZ29yeSk7XHJcbiAgICBzZXREYXRhKHByb2R1Y3QpO1xyXG4gICAgc2V0RGF0YShwcm9kdWN0KTtcclxuICB9LCBbY2F0ZWdvcnksIHF1ZXJ5XSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIlVTRFwiKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGVzLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxyXG4gIH0pLmZvcm1hdChwcmljZSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgdHJhbnNsYXRlU3RyaW5nID0gKHN0cmluZywgbGFuZ3VhZ2UsIEFQSV9rZXkpID0+IHtcclxuLy8gICBpZiAoIUFQSV9rZXkpIHtcclxuLy8gICAgIHJldHVybiBzdHJpbmc7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGxldCB0cmFzbGF0ZWRTdHJpbmc7XHJcbi8vICAgICByZXR1cm4gdHJhbnNsYXRlKFwiSGVsbG8gd29ybGRcIiwge1xyXG4vLyAgICAgICB0bzogbGFuZ3VhZ2UsXHJcbi8vICAgICAgIGtleTogQVBJX2tleSxcclxuLy8gICAgIH0pXHJcbi8vICAgICAgIC50aGVuKChyZXMpID0+ICh0cmFzbGF0ZWRTdHJpbmcgPSByZXMpKVxyXG4vLyAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRW1wdHksIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENhcnRTaWRlYmFySXRlbSBmcm9tIFwiLi9DYXJ0U2lkZWJhckl0ZW1cIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlVG90YWxQcmljZSB9IGZyb20gXCIuLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2FydFNpZGViYXIoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCB7IGN1cnJlbmN5LCBsb2NhbGVzIH0gPSBnbG9iYWxTdGF0ZS5jdXJyZW5jeTtcclxuICByZXR1cm4gY2FydFN0YXRlLmxlbmd0aCA9PT0gMCA/IChcclxuICAgIDxFbXB0eSBkZXNjcmlwdGlvbj1cIk5vIHByb2R1Y3RzIGluIGNhcnRcIiAvPlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1wcm9kdWN0c1wiPlxyXG4gICAgICAgIHtjYXJ0U3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcnRTaWRlYmFySXRlbSBrZXk9e2luZGV4fSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItdG90YWxcIj5cclxuICAgICAgICA8aDU+XHJcbiAgICAgICAgICBUb3RhbDp7XCIgXCJ9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItdG90YWxfX2J1dHRvbnNcIj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0XCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkNoZWNrb3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENhcnRTaWRlYmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTW9kYWwsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgUXVhbnRpdHlTZWxlY3RvciBmcm9tIFwiLi4vY29udHJvbHMvUXVhbnRpdHlTZWxlY3RvclwiO1xyXG5pbXBvcnQge1xyXG4gIHJlbW92ZUZyb21DYXJ0LFxyXG4gIGRlY3JlYXNlUXVhbnRpdHlDYXJ0LFxyXG4gIGluY3JlYXNlUXVhbnRpdHlDYXJ0LFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJ0U2lkZWJhckl0ZW0oeyBkYXRhIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoZGF0YS5jYXJ0UXVhbnRpdHkpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCB7IGN1cnJlbmN5LCBsb2NhbGVzIH0gPSBnbG9iYWxTdGF0ZS5jdXJyZW5jeTtcclxuICBjb25zdCBvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICB9O1xyXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSAoZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQoZGF0YS5jYXJ0SWQpKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjYXJ0XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IChlKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItaXRlbV9faW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1iSW1hZ2VbMF19IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLWl0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+e2RhdGEubmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XHJcbiAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShcclxuICAgICAgICAgICAgICAgICAgKGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KSAqIGRhdGEuY2FydFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEucHJpY2UgKiBkYXRhLmNhcnRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxlcyxcclxuICAgICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmNhcnRRdWFudGl0eX1cclxuICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICBtYXg9e2RhdGEucXVhbnRpdHl9XHJcbiAgICAgICAgICAgIG9uRGVjcmVhc2U9eygpID0+IGRpc3BhdGNoKGRlY3JlYXNlUXVhbnRpdHlDYXJ0KGRhdGEuY2FydElkKSl9XHJcbiAgICAgICAgICAgIG9uSW5jcmVhc2U9eygpID0+IGRpc3BhdGNoKGluY3JlYXNlUXVhbnRpdHlDYXJ0KGRhdGEuY2FydElkKSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLWl0ZW1fX2Nsb3NlXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0fT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9jbG9zZVwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkNvZmlybSB0aGlzIGFjdGlvblwiXHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+QXJlIHlvdXIgc3VyZSB0byByZW1vdmUgcHJvZHVjdCBmcm9tIGNhcnQgPzwvcD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FydFNpZGViYXJJdGVtKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBRdWFudGl0eVNlbGVjdG9yKHtcclxuICBtaW4sXHJcbiAgbWF4LFxyXG4gIGRlZmF1bHRWYWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBzaXplLFxyXG4gIG5vUm91bmQsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9uRGVjcmVhc2UsXHJcbiAgb25JbmNyZWFzZSxcclxufSkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcclxuICB9LCBbdmFsdWVdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZGVmYXVsdFZhbHVlKTtcclxuICB9LCBbZGVmYXVsdFZhbHVlXSk7XHJcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChtaW4gJiYgdmFsdWUgPD0gbWluKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2YWx1ZSA8PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIG9uRGVjcmVhc2UgJiYgb25EZWNyZWFzZSgpO1xyXG4gICAgICBzZXRWYWx1ZSh2YWx1ZSAtIDEpO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZV0pO1xyXG4gIGNvbnN0IGluY3JlYXNlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPj0gbWF4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG9uSW5jcmVhc2UgJiYgb25JbmNyZWFzZSgpO1xyXG4gICAgc2V0VmFsdWUodmFsdWUgKyAxKTtcclxuICB9LCBbdmFsdWVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BxdWFudGl0eS1zZWxlY3RvciAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX0gLSR7Y2xhc3NOYW1lcyhcclxuICAgICAgICBzaXplXHJcbiAgICAgICl9IC0ke2NsYXNzTmFtZXMoeyBcIm5vLXJvdW5kXCI6IG5vUm91bmQgfSl9YH1cclxuICAgID5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLWNvbnRyb2xsZXJcIlxyXG4gICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICBkaXNhYmxlZD17dmFsdWUgPD0gbWluIHx8IHZhbHVlIDw9IDF9XHJcbiAgICAgICAgb25DbGljaz17ZGVjcmVhc2VWYWx1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIC1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItbnVtYmVyXCI+e3ZhbHVlfTwvZGl2PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItY29udHJvbGxlclwiXHJcbiAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgIGRpc2FibGVkPXt2YWx1ZSA+PSBtYXh9XHJcbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VWYWx1ZX1cclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFF1YW50aXR5U2VsZWN0b3IpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEZvb3RlclN1YmNyaWJlIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlclN1YmNyaWJlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgbGlua3MgZnJvbSBcIi4uLy4uL2RhdGEvZm9vdGVyLWxpbmtzLmpzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcih7IGNvbnRhaW5lclR5cGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10b3BcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHR5cGU9e2NvbnRhaW5lclR5cGV9PlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtb25lXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxwPjcxNzYgQmx1ZSBTcHJpbmcgTGFuZSBTYW50YSBNb25pY2EsIENBIDkwNDAzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+aGkuYXZpdGV4QGdtYWlsLmNvbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT4rMDEgMTIzIDQ1NiA4ODg8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPkluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGlua3MuaW5mb3JtYXRpb24ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPk15IGFjY291bnQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5hY2NvdW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIgc3Bhbj1cIjI0XCIgc209ezE4fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wLWl0ZW0gLWNvbC10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPlN1YnNjcmliZSB0byBvdXIgTmV3c2xldHRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVyIGFuZCBnZXQgMTAlIG9mZiB5b3VyIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgIHB1cmNoYXNlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyU3ViY3JpYmUgdXJsPVwiaHR0cHM6Ly9qc3Rlci51czcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9ZWQ0MGMwMDg0YTBjNWJhMzFiMzM2NWQ2NSZpZD1lYzZmMzJiZjVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9mb290ZXIvcGF5bWVudC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBheW1lbnQgbWV0aG9kc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tXCI+XHJcbiAgICAgICAgPENvbnRhaW5lciB0eXBlPXtjb250YWluZXJUeXBlfT5cclxuICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDIwIEF2aXRleCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tRm9ybSA9IFJlYWN0Lm1lbW8oKHsgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCB9KSA9PiB7XHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgdmFsdWUpO1xyXG4gICAgdmFsdWUgJiZcclxuICAgICAgb25WYWxpZGF0ZWQoe1xyXG4gICAgICAgIEVNQUlMOiB2YWx1ZS5lbWFpbCxcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItc3ViY3JpYmVfX2Zvcm1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbm9TdHlsZT17dHJ1ZX1cclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIEUtbWFpbCFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBub1N0eWxlPXt0cnVlfT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTVUJTQ1JJQkVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHtzdGF0dXMgPT09IFwic2VuZGluZ1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PnNlbmRpbmcuLi48L2Rpdj59XHJcbiAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyU3ViY3JpYmUoeyB1cmwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXHJcbiAgICAgIHVybD17dXJsfVxyXG4gICAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcclxuICAgICAgICA8Q3VzdG9tRm9ybVxyXG4gICAgICAgICAgc3RhdHVzPXtzdGF0dXN9XHJcbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2VsZW1lbnRzL01lbnVcIjtcclxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi9lbGVtZW50cy9Ub3BOYXZcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IGNvbnRhaW5lclR5cGUsIGhlYWRlclN0eWxlIH0pIHtcclxuICBjb25zdCByZW5kZXJTdHlsZUNsYXNzID0gKHR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwidHdvXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiLXN0eWxlLXR3b1wiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImRlZmF1bHRcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1vbmUgJHtyZW5kZXJTdHlsZUNsYXNzKGhlYWRlclN0eWxlKX1gfT5cclxuICAgICAgPFRvcE5hdiBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgICA8TWVudSBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIZWFkZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIERyYXdlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3QuanNvblwiO1xyXG5pbXBvcnQgQ2FydFNpZGViYXIgZnJvbSBcIi4uLy4uL2NhcnQvQ2FydFNpZGViYXJcIjtcclxuaW1wb3J0IFdpc2hsaXN0U2lkZWJhciBmcm9tIFwiLi4vLi4vd2lzaGxpc3QvV2lzaGxpc3RTaWRlYmFyXCI7XHJcbmltcG9ydCBNZW51U2lkZWJhciBmcm9tIFwiLi9NZW51U2lkZWJhclwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgeyBnZXRUb3RhbFByb2R1Y3RJbkNhcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lbnUoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCB3aXNobGlzdFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNobGlzdFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtjYXJ0U2lkZWJhck9wZW4sIHNldENhcnRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVTaWRlYmFyT3Blbiwgc2V0TWVudVNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbd2lzaGxpc3RTaWRlYmFyT3Blbiwgc2V0V2lzaGxpc3RTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNpZGViYXItb3BlbmVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVudVNpZGViYXJPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgICAgZmlsbERhdGE9e3Byb2R1Y3RzRGF0YX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvciA/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Kb2luIG5vdzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0V2lzaGxpc3RTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvbWVudS13aXNobGlzdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dpc2hsaXN0U3RhdGUubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2FydFNpZGViYXJPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9tZW51LWJhZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2dldFRvdGFsUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtc2VhcmNoXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgZmlsbERhdGE9e3Byb2R1Y3RzRGF0YX0gcGxhY2Vob2xkZXI9XCJTZWFyY2hpbmcuLi5cIiAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICB0aXRsZT17YFdpc2hsaXN0ICgke3dpc2hsaXN0U3RhdGUubGVuZ3RofSlgfVxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFdpc2hsaXN0U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGNsb3NlSWNvbj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5DbG9zZTwvcD4gPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXt3aXNobGlzdFNpZGViYXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXs0NDV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zaWRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxXaXNobGlzdFNpZGViYXIgLz5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgdGl0bGU9e2BTaG9wcGluZyBjYXJ0ICgke2dldFRvdGFsUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUpfSlgfVxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldENhcnRTaWRlYmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgY2xvc2VJY29uPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPkNsb3NlPC9wPiA8Q2xvc2VPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e2NhcnRTaWRlYmFyT3Blbn1cclxuICAgICAgICB3aWR0aD17NDQ1fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtc2lkZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q2FydFNpZGViYXIgLz5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgdGl0bGU9XCIgXCJcclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNZW51U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGNsb3NlSWNvbj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5DbG9zZTwvcD4gPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXttZW51U2lkZWJhck9wZW59XHJcbiAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNpZGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVTaWRlYmFyIC8+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNZW51KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBzZXRHbG9iYWxMYW5ndWFnZSxcclxuICBzZXRHbG9iYWxDdXJyZW5jeSxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBNZW51U2lkZWJhcigpIHtcclxuICBjb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IG9uU2VsZWN0TGFuZ3VhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbExhbmd1YWdlKHZhbHVlKSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlbGVjdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxDdXJyZW5jeSh2YWx1ZSkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zaWRlYmFyXCI+XHJcbiAgICAgIDxNZW51IG1vZGU9XCJpbmxpbmVcIj5cclxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgdGl0bGU9XCJIb21lcGFnZXNcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWVwYWdlIDE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ob21lcGFnZTJcIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZXBhZ2UgMjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hvbWVwYWdlM1wifT5cclxuICAgICAgICAgICAgICA8YT5Ib21lcGFnZSAzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaG9tZXBhZ2U0XCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWVwYWdlIDQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIyXCIgdGl0bGU9XCJTaG9wXCI+XHJcbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIyLTFcIiB0aXRsZT1cIlNob3AgZGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgIFwiL3Nob3AvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwtMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+UHJvZHVjdCBEZXRhaWwgMTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9zaG9wL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLTJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPlByb2R1Y3QgRGV0YWlsIDI8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI3XCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgXCIvc2hvcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC0zXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YT5Qcm9kdWN0IERldGFpbCAzPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjhcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXRcIn0+XHJcbiAgICAgICAgICAgICAgPGE+Q2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0LWNvbXBsZXRlXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkNoZWNrb3V0IENvbXBsZXRlPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxMFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiI1wifT5cclxuICAgICAgICAgICAgPGE+SGVscDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjExXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIjXCJ9PlxyXG4gICAgICAgICAgICA8YT5PZmZlcjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2lkZWJhci1zZWxlY3RzXCI+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtnbG9iYWxTdGF0ZS5sYW5ndWFnZX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdExhbmd1YWdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqcFwiPkphcGFuZXNlPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidmlcIj5WaWV0bmFtZXNlPC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtnbG9iYWxTdGF0ZS5jdXJyZW5jeS5jdXJyZW5jeX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNTAgfX1cclxuICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEN1cnJlbmN5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJVU0RcIj5VU0QgLSBEb2xsYXI8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJKUFlcIj5KUFkgLSBZZW48L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJWTkRcIj5WTkQgLSBWaWV0bmFtIGRvbmc8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1lbnVTaWRlYmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBCdXR0b24sIEF1dG9Db21wbGV0ZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBzZXRHbG9iYWxDYXRlZ29yeSxcclxuICBzZXRHbG9iYWxTZWFyY2gsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBzZXRTdWJDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJhck1vYmlsZSh7IGZpbGxEYXRhLCBwbGFjZWhvbGRlciB9KSB7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93RHJvcGRvd25PcHRpb25zLCBzZXRTaG93RHJvcGRvd25PcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgZGVib3VuZFZhbHVlID0gdXNlRGVib3VuY2Uoc2VhcmNoLCAzMDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxTZWFyY2goZGVib3VuZFZhbHVlKSk7XHJcbiAgfSwgW2RlYm91bmRWYWx1ZV0pO1xyXG4gIGNvbnN0IHJlbmRlckF1dG9GaWxsSXRlbSA9ICgpID0+IHtcclxuICAgIGxldCBwcm9kdWN0ID0gZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KGZpbGxEYXRhLCBnbG9iYWxTdGF0ZS5jYXRlZ29yeSk7XHJcbiAgICByZXR1cm4gcHJvZHVjdC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIHZhbHVlOiBpdGVtLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlbGVjdENhdGVvcnkgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbENhdGVnb3J5KHZhbHVlKSk7XHJcbiAgICBkaXNwYXRjaChzZXRTdWJDYXRlZ29yeShcIlwiKSk7XHJcbiAgfTtcclxuICBjb25zdCBvcGVuRHJvcGRvd25PcHRpb24gPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNob3dEcm9wZG93bk9wdGlvbnModHJ1ZSk7XHJcbiAgICBzZXRTZWFyY2godmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VEcm9wZG93bk9wdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFNob3dEcm9wZG93bk9wdGlvbnMoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0U2VhcmNoKHZhbHVlKTtcclxuICAgIGNsb3NlRHJvcGRvd25PcHRpb24oKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzZWFyY2ggfHwgc2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgICAgcXVlcnk6IHsgcTogc2VhcmNoIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zZWFyY2hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXNlYXJjaF9fZm9ybVwiPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtc2VhcmNoX19mb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmNhdGVnb3J5fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDE1MCB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2F0ZW9yeX1cclxuICAgICAgICAgIHZhbHVlPXtnbG9iYWxTdGF0ZS5jYXRlZ29yeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7U0hPUC5jYXRlZ29yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2VhcmNoX19mb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgYmFja2ZpbGw9e3RydWV9XHJcbiAgICAgICAgICAgIG9wZW49e3Nob3dEcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvcGVuRHJvcGRvd25PcHRpb259XHJcbiAgICAgICAgICAgIG9uQmx1cj17Y2xvc2VEcm9wZG93bk9wdGlvbn1cclxuICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0T3B0aW9ufVxyXG4gICAgICAgICAgICBvcHRpb25zPXtyZW5kZXJBdXRvRmlsbEl0ZW0oKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dFZhbHVlLCBvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCkpICE9PVxyXG4gICAgICAgICAgICAgIC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU2VhcmNofT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWFyY2hCYXJNb2JpbGUpO1xyXG4iLCJpbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNldEdsb2JhbExhbmd1YWdlLFxyXG4gIHNldEdsb2JhbEN1cnJlbmN5LFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BOYXYoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0R2xvYmFsTGFuZ3VhZ2UodmFsdWUpKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VsZWN0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbEN1cnJlbmN5KHZhbHVlKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2XCI+XHJcbiAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1zZWxlY3RzXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmxhbmd1YWdlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA5MCB9fVxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RMYW5ndWFnZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwianBcIj5KYXBhbmVzZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ2aVwiPlZpZXRuYW1lc2U8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmN1cnJlbmN5LmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q3VycmVuY3l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEIC0gRG9sbGFyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkpQWVwiPkpQWSAtIFllbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJWTkRcIj5WTkQgLSBWaWV0bmFtIGRvbmc8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1saW5rc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtbGlua3NfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvI1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX3F1ZXN0aW9uX2FsdDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBIZWxwXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LWxpbmtzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiLyNcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9naWZ0XCIgLz4gT2ZmZXJcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUb3BOYXYpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQmFja1RvcCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IFdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi9XaXRoSGVhZGVyU2Nyb2xsXCI7XHJcbmltcG9ydCBTdWJwYWdlc1NpZGViYXIgZnJvbSBcIi4uL3N1YnBhZ2VzL1N1YnBhZ2VzU2lkZWJhclwiO1xyXG5cclxuY29uc3QgU2Nyb2xsSGVhZGVyID0gV2l0aEhlYWRlclNjcm9sbChIZWFkZXIpO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0T25lKHtcclxuICB0aXRsZSxcclxuICBoZWFkZXJTdHlsZSxcclxuICBjb250YWluZXJUeXBlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsZWFyU3BhY2VUb3AsXHJcbn0pIHtcclxuICBtZXNzYWdlLmNvbmZpZyh7XHJcbiAgICBtYXhDb3VudDogMyxcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNjcm9sbEhlYWRlciBoZWFkZXJTdHlsZT17aGVhZGVyU3R5bGV9IGNvbnRhaW5lclR5cGU9e2NvbnRhaW5lclR5cGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGVudCAke2NsYXNzTmFtZXMoeyBcImNsZWFyLXRvcFwiOiBjbGVhclNwYWNlVG9wIH0pfWB9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgY29udGFpbmVyVHlwZT17Y29udGFpbmVyVHlwZX0gLz5cclxuICAgICAgPEJhY2tUb3AgLz5cclxuICAgICAgPFN1YnBhZ2VzU2lkZWJhciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhMYXlvdXRPbmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyB0eXBlLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgcmVuZGVyQ29udGFpbmVyVHlwZSA9ICh0eXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImZsdWlkXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyLWZsdWlkXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3JlbmRlckNvbnRhaW5lclR5cGUodHlwZSl9PntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSYXRlLCBCdXR0b24sIFRvb2x0aXAsIFNrZWxldG9uLCBtZXNzYWdlLCBNb2RhbCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCxcclxuICBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCxcclxufSBmcm9tIFwiLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvV2lzaGxpc3QsXHJcbiAgcmVtb3ZlRnJvbVdpc2hsaXN0LFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xyXG5pbXBvcnQgU2hvcFF1aWNrVmlldyBmcm9tIFwiLi4vc2hvcC9TaG9wUXVpY2tWaWV3XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgZGF0YSwgcHJvZHVjdFN0eWxlIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRpbmcsIHNldEltYWdlTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3Qgd2lzaGxpc3RTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2lzaGxpc3RSZWR1Y2VyKTtcclxuICBjb25zdCBwcm9kdWN0SW5XaXNobGlzdCA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3Qod2lzaGxpc3RTdGF0ZSwgZGF0YS5pZCk7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkKGNhcnRTdGF0ZSwgZGF0YSk7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltYWdlTG9hZGluZyh0cnVlKTtcclxuICB9LCBbZ2xvYmFsU3RhdGUuY2F0ZWdvcnldKTtcclxuICBjb25zdCByZW5kZXJQcm9kdWN0VHlwZSA9ICgpID0+IHtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50ICYmICFkYXRhLmlzTmV3KSB7XHJcbiAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGUgLXNhbGVcIj5TYWxlPC9wPjtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5pc05ldyAmJiAhZGF0YS5kaXNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlIC1uZXdcIj5OZXc8L3A+O1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmlzTmV3ICYmIGRhdGEuZGlzY291bnQpIHtcclxuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZSAtbmV3XCI+TmV3PC9wPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coYXZhaWFibGVRdWFudGl0eSk7XHJcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGF2YWlhYmxlUXVhbnRpdHkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGRhdGEsIDEsIFwibm9uZVwiLCBcIm5vbmVcIikpO1xyXG4gICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQWRkVG9XaXNobGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdEluV2lzaGxpc3QpIHtcclxuICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbVdpc2hsaXN0KGRhdGEuaWQpKTtcclxuICAgICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSB3aXNobGlzdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKGFkZFRvV2lzaGxpc3QoZGF0YSkpO1xyXG4gICAgICByZXR1cm4gbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byB3aXNobGlzdCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJTdHlsZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWFsZVN0eWxlcyA9IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCJdO1xyXG4gICAgaWYgKGF2YWlhbGVTdHlsZXMuaW5jbHVkZXMocHJvZHVjdFN0eWxlKSkge1xyXG4gICAgICBpZiAoIXByb2R1Y3RTdHlsZSB8fCBwcm9kdWN0U3R5bGUgPT09IFwib25lXCIpIHtcclxuICAgICAgICByZXR1cm4gXCItc3R5bGUtb25lXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLXN0eWxlLVwiICsgcHJvZHVjdFN0eWxlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCItc3R5bGUtb25lXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKGUpID0+IHtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VMb2FkZWQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZUxvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIGRhdGEgPyAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QgJHtyZW5kZXJTdHlsZUNsYXNzKCl9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGxvYWRpbmc6IGltYWdlTG9hZGluZyB9KX0+XHJcbiAgICAgICAgICAgICAge2RhdGEudGh1bWJJbWFnZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YS50aHVtYkltYWdlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZD17aGFuZGxlSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAge2ltYWdlTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3JlbmRlclByb2R1Y3RUeXBlKCl9XHJcbiAgICAgICAgICB7cHJvZHVjdFN0eWxlID09PSBcInR3b1wiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJRdWljayB2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbldpc2hsaXN0ID8gXCJSZW1vdmUgZnJvbSB3aXNobGlzdFwiIDogXCJBZGQgdG8gd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1hdHcgJHtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9XaXNobGlzdChkYXRhKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9oZWFydF9hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2F2YWlhYmxlUXVhbnRpdHkgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fYmFnX2FsdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7IXByb2R1Y3RTdHlsZSB8fCBwcm9kdWN0U3R5bGUgPT09IFwib25lXCIgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SW5XaXNobGlzdCA/IFwiUmVtb3ZlIGZyb20gd2lzaGxpc3RcIiA6IFwiQWRkIHRvIHdpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYXR3ICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5XaXNobGlzdCxcclxuICAgICAgICAgICAgICAgICAgfSl9YH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9XaXNobGlzdChkYXRhKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9oZWFydF9hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gY2xhc3NOYW1lPVwicHJvZHVjdC1xdlwiPlxyXG4gICAgICAgICAgICAgICAgUXVpY2sgdmlld1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXJhdGVcIj5cclxuICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcmF0ZS1xdWFudGl0eVwiPigwNik8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50X19mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRfX2Zvb3Rlci1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UsIGxvY2FsZXMsIGN1cnJlbmN5KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHshcHJvZHVjdFN0eWxlIHx8IHByb2R1Y3RTdHlsZSA9PT0gXCJvbmVcIiA/IChcclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byBjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthdmFpYWJsZVF1YW50aXR5ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWF0Y1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9iYWdfYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtwcm9kdWN0U3R5bGUgPT09IFwidGhyZWVcIiA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1idXR0b24tZ3JvdXBfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiUXVpY2sgdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gc2hhcGU9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX3NlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbldpc2hsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiUmVtb3ZlIGZyb20gd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIkFkZCB0byB3aXNobGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWF0dyAke2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5XaXNobGlzdCxcclxuICAgICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9XaXNobGlzdChkYXRhKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25faGVhcnRfYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkFkZCB0byBjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YXZhaWFibGVRdWFudGl0eSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICBhZnRlckNsb3NlPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIHdpZHRoPXs4NTB9XHJcbiAgICAgID5cclxuICAgICAgICA8U2hvcFF1aWNrVmlldyBzZXRNb2RhbFZpc2libGU9e3NldFZpc2libGV9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApIDogKFxyXG4gICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XHJcbiIsImltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEd1YXJhbnRlZWQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtZ3VhcmFudGVlZFwiPlxyXG4gICAgICA8RGl2aWRlcj5HdWFyYW50ZWVkIFNhZmUgQ2hlY2tvdXQ8L0RpdmlkZXI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL3Nob3Avc2hvcC1kZXRhaWwvZ3VhcmFudGVlZC5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBhbHQ9XCJHdWFyYW50ZWVkXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhdGUsIEJ1dHRvbiwgUmFkaW8sIFByb2dyZXNzLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yXCI7XHJcbmltcG9ydCBQcm9kdWN0R3VhcmFudGVlZCBmcm9tIFwiLi4vZWxlbWVudHMvUHJvZHVjdEd1YXJhbnRlZWRcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxDb250ZW50T25lKHtcclxuICBkYXRhLFxyXG4gIG9uQWRkZWRUb0NhcnQsXHJcbiAgaGlkZUd1YXJhbnRlZWQsXHJcbiAgcXVhbnRpdHlDb250cm9sbGVyTm9Sb3VuZCxcclxuICBzaG93Q291bnRkb3duLFxyXG59KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRDb2xvciwgc2V0Q3VycmVudENvbG9yXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuICBjb25zdCBbY3VycmVudFNpemUsIHNldEN1cnJlbnRTaXplXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkKGNhcnRTdGF0ZSwgZGF0YSk7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgY29uc3Qgb25BZGRQcm9kdWN0VG9DYXJ0ID0gKGRhdGEpID0+IHtcclxuICAgIGlmIChhdmFpYWJsZVF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKGFkZFRvQ2FydChkYXRhLCBxdWFudGl0eSwgY3VycmVudENvbG9yLCBjdXJyZW50U2l6ZSkpO1xyXG4gICAgb25BZGRlZFRvQ2FydCAmJiBvbkFkZGVkVG9DYXJ0KCk7XHJcbiAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DaG9vc2VTaXplID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRTaXplKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2hvb3NlQ29sb3IgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudENvbG9yKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lXCI+XHJcbiAgICAgIDxoMz57ZGF0YS5uYW1lfTwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtcmF0ZVwiPlxyXG4gICAgICAgIDxSYXRlIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLXJldmlldy1jb3VudFwiPlxyXG4gICAgICAgICAgLSA1IFJldmlld3NcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLXByaWNlXCI+XHJcbiAgICAgICAgPGg1PlxyXG4gICAgICAgICAge2RhdGEuZGlzY291bnRcclxuICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudCwgbG9jYWxlcywgY3VycmVuY3kpXHJcbiAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAge2RhdGEuZGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UsIGxvY2FsZXMsIGN1cnJlbmN5KX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhjZXB0dXJpIGlsbG9cclxuICAgICAgICBwb3NzaW11cyBxdWFlIHRlbmV0dXIuIFBvcnJvIGFsaXF1YW0gcXVhZXJhdCBkb2xvcnVtIHBhcmlhdHVyIG1vbGVzdGlhc1xyXG4gICAgICAgIGNvbW1vZGkgaXBzYVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtzaG93Q291bnRkb3duICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25cIj5cclxuICAgICAgICAgICAgPGgzPkh1cnJ5IFVwICEgU2FsZXMgZW5kIGluIDo8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWNvdW50ZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgICAgICA8Q291bnRkb3duXHJcbiAgICAgICAgICAgICAgICBkYXRlPXtEYXRlLm5vdygpICsgMTAwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt6ZXJvUGFkKGRheXMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZGF5czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3plcm9QYWQoaG91cnMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+aG91cnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt6ZXJvUGFkKG1pbnV0ZXMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3plcm9QYWQoc2Vjb25kcyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWNzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19zb2xkXCI+XHJcbiAgICAgICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzaG93SW5mbz17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2xkLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgQWxyZWFkeSBTb2xkOlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4yMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgIFRvdGFsOlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4yMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtdmFyaWF0aW9uXCI+XHJcbiAgICAgICAge2RhdGEuc2l6ZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1pdGVtIC1zaXplXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHA+U2l6ZTo8L3A+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtvbkNob29zZVNpemV9IGRlZmF1bHRWYWx1ZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnNpemUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ZGF0YS52YXJpYXRpb24gJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24taXRlbSAtY29sb3JcIj5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8cD5Db2xvcjo8L3A+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtvbkNob29zZUNvbG9yfSBkZWZhdWx0VmFsdWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS52YXJpYXRpb24ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3JDb2RlIH19XHJcbiAgICAgICAgICAgICAgICAgID48L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtYWN0aW9uc1wiPlxyXG4gICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXHJcbiAgICAgICAgICBub1JvdW5kPXtxdWFudGl0eUNvbnRyb2xsZXJOb1JvdW5kfVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldFF1YW50aXR5KHZhbCl9XHJcbiAgICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICAgIG1heD17Y2hlY2tBdmFpYWJsZVF1YW50aXR5VG9BZGQoY2FydFN0YXRlLCBkYXRhKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkUHJvZHVjdFRvQ2FydChkYXRhKX1cclxuICAgICAgICAgIGRpc2FibGVkPXthdmFpYWJsZVF1YW50aXR5ID09PSAwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtYXRjICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBhdmFpYWJsZVF1YW50aXR5ID09PSAwLFxyXG4gICAgICAgICAgfSl9YH1cclxuICAgICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgIGRhbmdlclxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IWhpZGVHdWFyYW50ZWVkICYmIDxQcm9kdWN0R3VhcmFudGVlZCAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbENvbnRlbnRPbmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaG9wQ29udGVudEhlYWRlciBmcm9tIFwiLi9TaG9wQ29udGVudEhlYWRlclwiO1xyXG5pbXBvcnQgU2hvcENvbnRlbnRQcm9kdWN0IGZyb20gXCIuL1Nob3BDb250ZW50UHJvZHVjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2hvcENvbnRlbnQoe1xyXG4gIGZpdmVDb2x1bW4sXHJcbiAgcHJvZHVjdFJlc3BvbnNpdmUsXHJcbiAgZGF0YSxcclxuICBwcm9kdWN0UGVyUGFnZSxcclxuICBwcm9kdWN0U3R5bGUsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNvbnRlbnRcIj5cclxuICAgICAgPFNob3BDb250ZW50SGVhZGVyIHByb2R1Y3RQZXJQYWdlPXtwcm9kdWN0UGVyUGFnZX0gZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPFNob3BDb250ZW50UHJvZHVjdFxyXG4gICAgICAgIHByb2R1Y3RTdHlsZT17cHJvZHVjdFN0eWxlfVxyXG4gICAgICAgIGZpdmVDb2x1bW49e2ZpdmVDb2x1bW59XHJcbiAgICAgICAgcHJvZHVjdFJlc3BvbnNpdmU9e3Byb2R1Y3RSZXNwb25zaXZlfVxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgcHJvZHVjdFBlclBhZ2U9e3Byb2R1Y3RQZXJQYWdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTaG9wQ29udGVudCk7XHJcbiIsImltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgc2V0U29ydCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBTaG9wQ29udGVudEhlYWRlcih7IGRhdGEsIHByb2R1Y3RQZXJQYWdlIH0pIHtcclxuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFNvcnQodmFsdWUpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jb250ZW50X19oZWFkZXItc2hvd2luZ1wiPlxyXG4gICAgICAgIDxoNT5cclxuICAgICAgICAgIFNob3dpbmcgMSAtIHtwcm9kdWN0UGVyUGFnZX0gb2Yge2RhdGEubGVuZ3RofSBQcm9kdWN0c1xyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyLWZpbHRlclwiPlxyXG4gICAgICAgIDxwPkZpbHRlciBieTo8L3A+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hvcC1jb250ZW50X19oZWFkZXItZmlsdGVyX19zZWxlY3RcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wU3RhdGUuc29ydH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTAgLyAxNiArIFwiZW1cIiB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsb3dIaWdoXCI+UHJpY2U6IExvdyB0byBIaWdoPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaGlnaExvd1wiPlByaWNlOiBIaWdoIHRvIExvdzwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImF6XCI+QSB0byBaPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiemFcIj5aIHRvIEE8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNob3BDb250ZW50SGVhZGVyKTtcclxuIiwiaW1wb3J0IHsgUm93LCBDb2wsIEVtcHR5LCBQYWdpbmF0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9wcm9kdWN0L1Byb2R1Y3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRQcm9kdWN0c0J5RmlsdGVyLFxyXG4gIGdldFByb2R1Y3RzQnlTZWFyY2gsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2hvcENvbnRlbnRQcm9kdWN0KHtcclxuICBwcm9kdWN0UmVzcG9uc2l2ZSxcclxuICBmaXZlQ29sdW1uLFxyXG4gIGRhdGEsXHJcbiAgcHJvZHVjdFBlclBhZ2UsXHJcbiAgcHJvZHVjdFN0eWxlLFxyXG59KSB7XHJcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtjdXJyZW50RGF0YSwgc2V0Q3VycmVudERhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBmaWx0ZXJlZFByb2R1Y3QgPSBnZXRQcm9kdWN0c0J5RmlsdGVyKFxyXG4gICAgICBbLi4uZGF0YV0sXHJcbiAgICAgIHNob3BTdGF0ZS5zb3J0LFxyXG4gICAgICBzaG9wU3RhdGUuc3ViQ2F0ZWdvcnlcclxuICAgICk7XHJcbiAgICBzZXRDdXJyZW50RGF0YShmaWx0ZXJlZFByb2R1Y3QpO1xyXG4gICAgc2V0T2Zmc2V0KDApO1xyXG4gIH0sIFtzaG9wU3RhdGUsIGRhdGFdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGFnZSgxKTtcclxuICB9LCBbZ2xvYmFsU3RhdGVdKTtcclxuICBjb25zdCBpdGVtUmVuZGVyID0gKGN1cnJlbnQsIHR5cGUsIG9yaWdpbmFsRWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwicHJldlwiKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWwgZmEtYW5nbGUtbGVmdFwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWwgZmEtYW5nbGUtcmlnaHRcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcmlnaW5hbEVsZW1lbnQ7XHJcbiAgfTtcclxuICBjb25zdCBvbkNoYW5nZU9mZnNldCA9IChwYWdlLCBwYWdlU2l6ZSkgPT4ge1xyXG4gICAgbGV0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICAgIHNldFBhZ2UocGFnZSk7XHJcbiAgICBzZXRPZmZzZXQob2Zmc2V0KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9fcHJvZHVjdFwiPlxyXG4gICAgICB7IWN1cnJlbnREYXRhID8gKFxyXG4gICAgICAgIDxFbXB0eSBkZXNjcmlwdGlvbj1cIk5vIHByb2R1Y3RzIGluIHRoaXMgY2F0ZWdvcnlcIiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7Y3VycmVudERhdGEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17W3sgeHM6IDUsIHNtOiA1LCB4bDogMTUsIHh4bDogMzAgfSwgMzBdfT5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50RGF0YVxyXG4gICAgICAgICAgICAgICAgICAuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwcm9kdWN0UGVyUGFnZSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJmaXZlLWNvbFwiOiBmaXZlQ29sdW1uIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb2R1Y3RSZXNwb25zaXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGRhdGE9e3Byb2R1Y3R9IHByb2R1Y3RTdHlsZT17cHJvZHVjdFN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICB7Y3VycmVudERhdGEubGVuZ3RoID49IHByb2R1Y3RQZXJQYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJzaG9wLWNvbnRlbnRfX3Byb2R1Y3QtcGFnaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50PXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17Y3VycmVudERhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cHJvZHVjdFBlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXI9e2l0ZW1SZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocGFnZSwgcGFnZVNpemUpID0+IG9uQ2hhbmdlT2Zmc2V0KHBhZ2UsIHBhZ2VTaXplKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8RW1wdHkgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNob3BDb250ZW50UHJvZHVjdCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFNob3BTaWRlYmFyIGZyb20gXCIuL1Nob3BTaWRlYmFyXCI7XHJcbmltcG9ydCBTaG9wQ29udGVudCBmcm9tIFwiLi9TaG9wQ29udGVudFwiO1xyXG5pbXBvcnQgU2hvcFF1aWNrVmlldyBmcm9tIFwiLi9TaG9wUXVpY2tWaWV3XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5cclxuZnVuY3Rpb24gU2hvcExheW91dCh7XHJcbiAgc2hvcFNpZGViYXJSZXNwb25zaXZlLFxyXG4gIHNob3BDb250ZW50UmVzcG9uc2l2ZSxcclxuICBwcm9kdWN0UmVzcG9uc2l2ZSxcclxuICBmaXZlQ29sdW1uLFxyXG4gIGRhdGEsXHJcbiAgcHJvZHVjdFBlclBhZ2UsXHJcbiAgcHJvZHVjdFN0eWxlLFxyXG4gIGNvbnRhaW5lclR5cGUsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWxheW91dFwiPlxyXG4gICAgICA8Q29udGFpbmVyIHR5cGU9e2NvbnRhaW5lclR5cGV9PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiB7Li4uc2hvcFNpZGViYXJSZXNwb25zaXZlfT5cclxuICAgICAgICAgICAgPFNob3BTaWRlYmFyIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHsuLi5zaG9wQ29udGVudFJlc3BvbnNpdmV9PlxyXG4gICAgICAgICAgICA8U2hvcENvbnRlbnRcclxuICAgICAgICAgICAgICBwcm9kdWN0U3R5bGU9e3Byb2R1Y3RTdHlsZX1cclxuICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZT17cHJvZHVjdFBlclBhZ2V9XHJcbiAgICAgICAgICAgICAgZml2ZUNvbHVtbj17Zml2ZUNvbHVtbn1cclxuICAgICAgICAgICAgICBwcm9kdWN0UmVzcG9uc2l2ZT17cHJvZHVjdFJlc3BvbnNpdmV9XHJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcExheW91dCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUHJvZHVjdERldGFpbENvbnRlbnRPbmUgZnJvbSBcIi4uL3Byb2R1Y3REZXRhaWwvcHJvZHVjdERldGFpbENvbnRlbnQvUHJvZHVjdERldGFpbENvbnRlbnRPbmVcIjtcclxuXHJcbmZ1bmN0aW9uIFNob3BRdWlja1ZpZXcoeyBkYXRhLCBzZXRNb2RhbFZpc2libGUgfSkge1xyXG4gIGNvbnN0IHNsaWRlcjFTZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgfTtcclxuICBjb25zdCBzbGlkZXIyU2V0dGluZ3MgPSB7XHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBjb25zdCBbbmF2MSwgc2V0TmF2MV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuYXYyLCBzZXROYXYyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgb25BZGRlZFRvQ2FydCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXF2XCI+XHJcbiAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBndXR0ZXI9ezUwfT5cclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsyNH0gc209ezI0fSBtZD17MTB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXF2X19zbGlkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtcXZfX3NsaWRlLWJpZ1wiPlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yPXtuYXYyfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsoYykgPT4gc2V0TmF2MShjKX1cclxuICAgICAgICAgICAgICAgIHsuLi5zbGlkZXIxU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXF2X19zbGlkZS1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yPXtuYXYxfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsoYykgPT4gc2V0TmF2MihjKX1cclxuICAgICAgICAgICAgICAgIHsuLi5zbGlkZXIyU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49ezI0fSBzbT17MjR9IG1kPXsxNH0+XHJcbiAgICAgICAgICA8UHJvZHVjdERldGFpbENvbnRlbnRPbmVcclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgaGlkZUd1YXJhbnRlZWRcclxuICAgICAgICAgICAgb25BZGRlZFRvQ2FydD17b25BZGRlZFRvQ2FydH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTaG9wUXVpY2tWaWV3KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi8uLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyBzZXRTdWJDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBTaG9wU2lkZWJhcih7IGNhdGVnb3JpZXMgfSkge1xyXG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuXHJcbiAgY29uc3Qgc3ViQ2F0ZWdvcnkgPSBTSE9QLmNhdGVnb3J5LmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGdsb2JhbFN0YXRlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKClcclxuICApO1xyXG4gIGNvbnN0IG9uQ2hvb3NlU3ViQ2F0ZWdvcnkgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEgPT09IFwiYWxsXCIpIHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFN1YkNhdGVnb3J5KFwiXCIpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaChzZXRTdWJDYXRlZ29yeShkYXRhKSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIG9uQ2hvb3NlU3ViQ2F0ZWdvcnkodmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyXCI+XHJcbiAgICAgIDxoNT57Z2xvYmFsU3RhdGUuY2F0ZWdvcnl9PC9oNT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXJfX3N1YmNhdGVnb3J5XCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgYWN0aXZlOiBzaG9wU3RhdGUuc3ViQ2F0ZWdvcnkgPT09IFwiXCIsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgb25DaG9vc2VTdWJDYXRlZ29yeShcImFsbFwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9kb2N1bWVudF9hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgQWxsIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAge3N1YkNhdGVnb3J5ICYmXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5LnN1Yi5zbGljZSgwLCA3KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlOiBzaG9wU3RhdGUuc3ViQ2F0ZWdvcnkgPT09IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hvb3NlU3ViQ2F0ZWdvcnkoaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb25DbGFzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyX19zdWJjYXRlZ29yeS1tb2JpbGVcIj5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJhbGxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3Nob3BTdGF0ZS5zdWJDYXRlZ29yeSA9PT0gXCJcIiA/IFwiYWxsXCIgOiBzaG9wU3RhdGUuc3ViQ2F0ZWdvcnl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImFsbFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2RvY3VtZW50X2FsdFwiIC8+XHJcbiAgICAgICAgICAgIEFsbCBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICB7c3ViQ2F0ZWdvcnkgJiZcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnkuc3ViLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb25DbGFzc30gLz5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcFNpZGViYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBEcmF3ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQ2xpZW50T25seVBvcnRhbCBmcm9tIFwiLi4vLi4vY29tbW9uL0NsaWVudE9ubHlQb3J0YWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnBhZ2VzU2lkZWJhcigpIHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUoIXZpc2libGUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDbGllbnRPbmx5UG9ydGFsIHNlbGVjdG9yPVwiI3N1YnBhZ2VzLXNpZGViYXJcIj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIGZvcmNlUmVuZGVyPXt0cnVlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN1YnBhZ2VzLXNpZGViYXItbWFpblwiXHJcbiAgICAgICAgd2lkdGg9ezQ0NX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c2hvd0RyYXdlcn0gY2xhc3NOYW1lPVwic3VicGFnZXMtc2lkZWJhci1vcGVuZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2cgZmEtc3BpblwiIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgPHNwYW4+NDwvc3Bhbj5cclxuICAgICAgICAgIERlbW9cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwPllvdSBjYW4gZWFzaWx5IGNvbWJpbmUgdmFyaW91cyBmZWF0dXJlcyBmcm9tIGRpZmZlcmVudCBkZW1vcy48L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJwYWdlcy1ob21lcGFnZXMtZ3JvdXBcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL3N1YnBhZ2VzL2hvbWUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJIb21lcGFnZSAwMVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ib21lcGFnZSAwMTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hvbWVwYWdlMlwifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvc3VicGFnZXMvaG9tZTIucG5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIkhvbWVwYWdlIDAyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkhvbWVwYWdlIDAyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaG9tZXBhZ2UzXCJ9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9zdWJwYWdlcy9ob21lMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiSG9tZXBhZ2UgMDNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SG9tZXBhZ2UgMDM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ob21lcGFnZTRcIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL3N1YnBhZ2VzL2hvbWU0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJIb21lcGFnZSAwNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ib21lcGFnZSAwNDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvQ2xpZW50T25seVBvcnRhbD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IFdpc2hsaXN0U2lkZWJhckl0ZW0gZnJvbSBcIi4vV2lzaGxpc3RTaWRlYmFySXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gV2lzaGxpc3RTaWRlYmFyKCkge1xyXG4gIGNvbnN0IHdpc2hsaXN0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XHJcbiAgcmV0dXJuIHdpc2hsaXN0U3RhdGUubGVuZ3RoID09PSAwID8gKFxyXG4gICAgPEVtcHR5IGRlc2NyaXB0aW9uPVwiTm8gcHJvZHVjdHMgaW4gd2lzaGxpc3RcIiAvPlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXNpZGViYXJcIj5cclxuICAgICAge3dpc2hsaXN0U3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxXaXNobGlzdFNpZGViYXJJdGVtIGtleT17aW5kZXh9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhXaXNobGlzdFNpZGViYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNb2RhbCwgbWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCxcclxuICBjaGVja1Byb2R1Y3RJbkNhcnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRnJvbVdpc2hsaXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBXaXNobGlzdFNpZGViYXJJdGVtKHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkKGNhcnRTdGF0ZSwgZGF0YSk7XHJcbiAgY29uc3QgcHJvZHVjdEluQ2FydCA9IGNoZWNrUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUsIGRhdGEuaWQpO1xyXG4gIGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICB9O1xyXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPayA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChyZW1vdmVGcm9tV2lzaGxpc3QoZGF0YS5pZCkpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IChlKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQWRkVG9DYXJ0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGF2YWlhYmxlUXVhbnRpdHkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGRhdGEpKTtcclxuICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC1zaWRlYmFyLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXNpZGViYXItaXRlbV9faW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1iSW1hZ2VbMF19IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3Qtc2lkZWJhci1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQsIGxvY2FsZXMsIGN1cnJlbmN5KVxyXG4gICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIHtkYXRhLnF1YW50aXR5IDwgMSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zb2xkLW1vYmlsZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9jbG9zZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc29sZFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgU29sZCBvdXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQWRkVG9DYXJ0fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3RJbkNhcnR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYXRjLW1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9iYWdfYWx0XCIgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFkZFRvQ2FydH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9kdWN0SW5DYXJ0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWF0Y1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RJbkNhcnQgPyBcIkFkZGVkIHRvIGNhcnRcIiA6IFwiQWRkIHRvIENhcnRcIn1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3Qtc2lkZWJhci1pdGVtX19jbG9zZVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3R9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2Nsb3NlXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ29maXJtIHRoaXMgYWN0aW9uXCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgID5cclxuICAgICAgICA8cD5BcmUgeW91ciBzdXJlIHRvIHJlbW92ZSBwcm9kdWN0IGZyb20gd2lzaGxpc3QgPzwvcD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oV2lzaGxpc3RTaWRlYmFySXRlbSk7XHJcbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IExheW91dE9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRzL0xheW91dE9uZVwiO1xyXG5pbXBvcnQgU2hvcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wL1Nob3BMYXlvdXRcIjtcclxuaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuLi9kYXRhL3Byb2R1Y3QuanNvblwiO1xyXG5pbXBvcnQgdXNlUHJvZHVjdERhdGEgZnJvbSBcIi4uL2NvbW1vbi91c2VQcm9kdWN0RGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVByb2R1Y3REYXRhKFxyXG4gICAgcHJvZHVjdERhdGEsXHJcbiAgICBnbG9iYWxTdGF0ZS5jYXRlZ29yeSxcclxuICAgIHJvdXRlci5xdWVyeS5xXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dE9uZSB0aXRsZT1cIkhvbWVwYWdlIDNcIiBjb250YWluZXJUeXBlPVwiZmx1aWRcIiBoZWFkZXJTdHlsZT1cInR3b1wiPlxyXG4gICAgICA8U2hvcExheW91dFxyXG4gICAgICAgIHNob3BTaWRlYmFyUmVzcG9uc2l2ZT17eyB4czogMjQsIGxnOiA0IH19XHJcbiAgICAgICAgc2hvcENvbnRlbnRSZXNwb25zaXZlPXt7IHhzOiAyNCwgbGc6IDIwIH19XHJcbiAgICAgICAgcHJvZHVjdFJlc3BvbnNpdmU9e3sgeHM6IDEyLCBzbTogOCwgbWQ6IDYsIHh4bDogNCB9fVxyXG4gICAgICAgIHByb2R1Y3RQZXJQYWdlPXsxOH1cclxuICAgICAgICBkYXRhPXtbLi4uZGF0YV19XHJcbiAgICAgICAgY29udGFpbmVyVHlwZT1cImZsdWlkXCJcclxuICAgICAgLz5cclxuICAgIDwvTGF5b3V0T25lPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5LCBjb2xvciwgc2l6ZSkgPT4gKHtcclxuICB0eXBlOiBDQVJULkFERF9UT19DQVJULFxyXG4gIHByb2R1Y3QsXHJcbiAgcXVhbnRpdHksXHJcbiAgY29sb3IsXHJcbiAgc2l6ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0ZST01fQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbEZyb21DYXJ0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBDQVJULlJFTU9WRV9BTExfRlJPTV9DQVJULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5ERUNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBHTE9CQUwgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbExhbmd1YWdlID0gKGxhbmcpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9MQU5HVUFHRSxcclxuICBsYW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDdXJyZW5jeSA9IChjdXIpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9DVVJSRU5DWSxcclxuICBjdXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiAoe1xyXG4gIHR5cGU6IEdMT0JBTC5TRVRfQ0FURUdPUlksXHJcbiAgY2F0ZWdvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbFNlYXJjaCA9IChrZXl3b3JkKSA9PiAoe1xyXG4gIHR5cGU6IEdMT0JBTC5TRVRfU0VBUkNILFxyXG4gIGtleXdvcmQsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2RlZmluZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTb3J0ID0gKHNvcnRUeXBlKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NPUlQsXHJcbiAgc29ydFR5cGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFN1YkNhdGVnb3J5ID0gKHN1YkNhdGVnb3J5KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NVQkNBVEVHT1JZLFxyXG4gIHN1YkNhdGVnb3J5LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvV2lzaGxpc3QgPSAocHJvZHVjdCkgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5BRERfVE9fV0lTSExJU1QsXHJcbiAgcHJvZHVjdCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVdpc2hsaXN0ID0gKHByb2R1Y3RJZCkgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5SRU1PVkVfRlJPTV9XSVNITElTVCxcclxuICBwcm9kdWN0SWQsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgR0xPQkFMID0ge1xyXG4gIFNFVF9MQU5HVUFHRTogXCJTRVRfTEFOR1VBR0VcIixcclxuICBTRVRfQ1VSUkVOQ1k6IFwiU0VUX0NVUlJFTkNZXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9TRUFSQ0g6IFwiU0VUX1NFQVJDSFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XHJcbiAgQUREX1RPX0NBUlQ6IFwiQUREX1RPX0NBUlRcIixcclxuICBSRU1PVkVfRlJPTV9DQVJUOiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICBSRU1PVkVfQUxMX0ZST01fQ0FSVDogXCJSRU1PVkVfQUxMX0ZST01fQ0FSVFwiLFxyXG4gIERFQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG4gIElOQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEFERF9UT19XSVNITElTVDogXCJBRERfVE9fV0lTSExJU1RcIixcclxuICBSRU1PVkVfRlJPTV9XSVNITElTVDogXCJSRU1PVkVfRlJPTV9XSVNITElTVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1AgPSB7XHJcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcclxuICBTRVRfU1VCQ0FURUdPUlk6IFwiU0VUX1NVQkNBVEVHT1JZXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9