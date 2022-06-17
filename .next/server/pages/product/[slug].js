module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/product/[slug].js");
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

/***/ "./src/components/other/ZoomImage.js":
/*!*******************************************!*\
  !*** ./src/components/other/ZoomImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\other\\ZoomImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ZoomImage({
  src,
  alt,
  disableOnMobile
}) {
  const {
    0: backgroundPos,
    1: setBackgroundPos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0% 0%");

  const handleMouseMove = e => {
    const {
      left,
      top,
      width,
      height
    } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    setBackgroundPos(`${x}% ${y}%`);
  };

  return __jsx("figure", {
    className: `zoom-image ${classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "-disable-on-mobile": disableOnMobile
    })}`,
    onMouseMove: handleMouseMove,
    style: {
      backgroundImage: `url(${src})`,
      backgroundPosition: backgroundPos
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: src,
    alt: alt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ZoomImage));

/***/ }),

/***/ "./src/components/productDetail/ProductDetailOne.js":
/*!**********************************************************!*\
  !*** ./src/components/productDetail/ProductDetailOne.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _productDetailContent_ProductDetailContentOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productDetailContent/ProductDetailContentOne */ "./src/components/productDetail/productDetailContent/ProductDetailContentOne.js");
/* harmony import */ var _productDetailTab_ProductDetailTabOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productDetailTab/ProductDetailTabOne */ "./src/components/productDetail/productDetailTab/ProductDetailTabOne.js");
/* harmony import */ var _productDetailImage_ProductDetailImageOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productDetailImage/ProductDetailImageOne */ "./src/components/productDetail/productDetailImage/ProductDetailImageOne.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\productDetail\\ProductDetailOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function ProductDetailLayoutOne({
  data
}) {
  return __jsx("div", {
    className: "product-detail-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-one-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"], {
    className: "product-detail-breadcrumb",
    separator: ">",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Product"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_productDetailImage_ProductDetailImageOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    imageData: data.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_productDetailContent_ProductDetailContentOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    quantityControllerNoRound: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "product-detail-one-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_productDetailTab_ProductDetailTabOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailLayoutOne));

/***/ }),

/***/ "./src/components/productDetail/elements/ProductDetailReviewItem.js":
/*!**************************************************************************!*\
  !*** ./src/components/productDetail/elements/ProductDetailReviewItem.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\productDetail\\elements\\ProductDetailReviewItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ProductDetailReviewItem({
  data
}) {
  return __jsx("div", {
    className: "product-detail-review-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-review-item__avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://thispersondoesnotexist.com/image",
    alt: "Reviewer avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
    disabled: true,
    defaultValue: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "product-detail-review-item__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "May 04, 2020"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "John smith"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "As a result of innovations in orthodontic materials, orthodontists are able to provide today\u2019s patients with a comfortable and convenient experience while working toward the ultimate goal of a healthy, a good bite and improved facial appearance.")));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailReviewItem));

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

/***/ "./src/components/productDetail/productDetailImage/ProductDetailImageOne.js":
/*!**********************************************************************************!*\
  !*** ./src/components/productDetail/productDetailImage/ProductDetailImageOne.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_ZoomImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/ZoomImage */ "./src/components/other/ZoomImage.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\productDetail\\productDetailImage\\ProductDetailImageOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function ProductDetailImageOne({
  imageData
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
    vertical: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: false,
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        vertical: false,
        slidesToShow: 4
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-image-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24,
    xs: {
      order: 2
    },
    sm: {
      span: 4,
      order: 1
    },
    md: {
      span: 24,
      order: 2
    },
    lg: {
      span: 6,
      order: 1
    },
    xl: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-detail-image-one-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), imageData && imageData.map((img, index) => __jsx("div", {
    key: index,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24,
    xs: {
      order: 1
    },
    sm: {
      span: 20,
      order: 2
    },
    md: {
      span: 24,
      order: 1
    },
    lg: {
      span: 18,
      order: 2
    },
    xl: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-detail-image-one-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }), imageData && imageData.map((img, index) => __jsx("div", {
    key: index,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx(_other_ZoomImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disableOnMobile: true,
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  })))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailImageOne));

/***/ }),

/***/ "./src/components/productDetail/productDetailTab/ProductDetailTabOne.js":
/*!******************************************************************************!*\
  !*** ./src/components/productDetail/productDetailTab/ProductDetailTabOne.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailTabOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_ProductDetailReviewItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ProductDetailReviewItem */ "./src/components/productDetail/elements/ProductDetailReviewItem.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\components\\productDetail\\productDetailTab\\ProductDetailTabOne.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
function ProductDetailTabOne() {
  return __jsx("div", {
    className: "product-detail-tab-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(TabPane, {
    tab: "Description",
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-detail-tab-item -description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "tab-des--bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos."), __jsx("h5", {
    className: "tab-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Products Infomation"), __jsx("p", {
    className: "tab-des",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad. As is the case with any new technology product, the cost of a Pocket PC was substantial during it\u2019s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased."), __jsx("h5", {
    className: "tab-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Material used"), __jsx("p", {
    className: "tab-des",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Polyester is deemed lower quality due to its none natural quality\u2019s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round."))), __jsx(TabPane, {
    tab: "Customer Reviews(5)",
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-detail-tab-item -review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_elements_ProductDetailReviewItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx(_elements_ProductDetailReviewItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))), __jsx(TabPane, {
    tab: "Additional information",
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-detail-tab-item -info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, "Outer Shell"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "100% polyester")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Lining"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "100% polyurethane")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Size"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "S, M, L, XL")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Colors"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, "Grey, Red, Blue, Black")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "Care"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "" + "/assets/images/shop/shop-detail/care-icons.png",
    alt: "Care icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  })))))))));
}

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

/***/ "./src/pages/product/[slug].js":
/*!*************************************!*\
  !*** ./src/pages/product/[slug].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/LayoutOne */ "./src/components/layouts/LayoutOne.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _data_product_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/product.json */ "./src/data/product.json");
var _data_product_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/product.json */ "./src/data/product.json", 1);
/* harmony import */ var _components_productDetail_ProductDetailOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/productDetail/ProductDetailOne */ "./src/components/productDetail/ProductDetailOne.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\stora-next-20220617T154210Z-001\\stora-next\\stora\\src\\pages\\product\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function pid() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    slug
  } = router.query;
  const foundProduct = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_4__["getProductsBySlug"])(_data_product_json__WEBPACK_IMPORTED_MODULE_5__, slug);
  return __jsx(_components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: foundProduct && Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["capitalizeFirstLetter"])(foundProduct.name),
    clearSpaceTop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, foundProduct && __jsx(_components_productDetail_ProductDetailOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: foundProduct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 24
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9DbGllbnRPbmx5UG9ydGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vV2l0aEhlYWRlclNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zaG9wVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91c2VEZWJvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9DYXJ0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L0NhcnRTaWRlYmFySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2VsZW1lbnRzL0Zvb3RlclN1YmNyaWJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01lbnVTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL1RvcE5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0xheW91dE9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvWm9vbUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3REZXRhaWwvUHJvZHVjdERldGFpbE9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0RGV0YWlsL2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxSZXZpZXdJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3REZXRhaWwvZWxlbWVudHMvUHJvZHVjdEd1YXJhbnRlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbC9wcm9kdWN0RGV0YWlsQ29udGVudC9Qcm9kdWN0RGV0YWlsQ29udGVudE9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWxJbWFnZS9Qcm9kdWN0RGV0YWlsSW1hZ2VPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbC9wcm9kdWN0RGV0YWlsVGFiL1Byb2R1Y3REZXRhaWxUYWJPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3VicGFnZXMvU3VicGFnZXNTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dpc2hsaXN0L1dpc2hsaXN0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aXNobGlzdC9XaXNobGlzdFNpZGViYXJJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZGVmaW5lcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudGRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiXSwibmFtZXMiOlsibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsIlJlYWN0IiwicHJvcHMiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsInByb2Nlc3MiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInZhbHVlIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwidXJsIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImVycm9yIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJrZXkiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJTdHJpbmciLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInVzZWQiLCJyZXN1bHQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJDbGllbnRPbmx5UG9ydGFsIiwic2VsZWN0b3IiLCJ1c2VSZWYiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVQb3J0YWwiLCJXaXRoSGVhZGVyU2Nyb2xsIiwiV3JhcHBlZENvbXBvbmVudCIsImhlYWRlclJlZiIsInNldFNjcm9sbCIsImlzSGVhZGVyRml4ZWQiLCJzZXRJc0hlYWRlckZpeGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxZIiwiU0hPUCIsImNhdGVnb3J5IiwiaWNvbkNsYXNzIiwiZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IiwiYXJyIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiZ2V0UHJvZHVjdHNCeVNsdWciLCJzbHVnIiwiZmluZCIsImdldEFsbFZhbHVlc09mS2V5Iiwic3ViQ2F0ZWdvcnkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImdldEFsbFN1YkNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RzIiwic3ViQ2F0ZWdvcmllc0FyciIsImdldFByb2R1Y3RzQnlTb3J0IiwidHlwZSIsInNvcnRXaXRoQ29uZGl0aW9uIiwicmV2ZXJzZSIsIm51bSIsInNvcnQiLCJhIiwiYiIsImdldFByb2R1Y3RzQnlGaWx0ZXIiLCJzb3J0VHlwZSIsImZpbHRlcmVkUHJvZHVjdCIsInByb2R1Y3QiLCJnZXRQcm9kdWN0c0J5U2VhcmNoIiwia2V5d29yZCIsImdldFRvdGFsUHJvZHVjdEluQ2FydCIsInJlZHVjZSIsInRvdGFsIiwiY2FydFF1YW50aXR5IiwiY2FsY3VsYXRlVG90YWxQcmljZSIsImZvckVhY2giLCJkaXNjb3VudCIsInByaWNlIiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiY2FydEFyciIsInBpZCIsImlkIiwiY2hlY2tBdmFpYWJsZVF1YW50aXR5VG9BZGQiLCJwcm9kdWN0c0luQ2FydCIsInRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0IiwiYXZhaWFibGUiLCJxdWFudGl0eSIsImNoZWNrUHJvZHVjdEluV2lzaGxpc3QiLCJ3aXNobGlzdEFyciIsInVzZURlYm91bmNlIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImZvcm1hdEN1cnJlbmN5IiwibG9jYWxlcyIsImN1cnJlbmN5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiZm9ybWF0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkNhcnRTaWRlYmFyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnRTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0UmVkdWNlciIsImdsb2JhbFN0YXRlIiwiZ2xvYmFsUmVkdWNlciIsIm1hcCIsImluZGV4IiwibWVtbyIsIkNhcnRTaWRlYmFySXRlbSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2V0UXVhbnRpdHkiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsInByZXZlbnREZWZhdWx0Iiwic2hvd01vZGFsIiwiaGFuZGxlT2siLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJZCIsImhhbmRsZUNhbmNlbCIsInRodW1iSW1hZ2UiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiUXVhbnRpdHlTZWxlY3RvciIsIm1pbiIsIm1heCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwic2l6ZSIsIm5vUm91bmQiLCJjbGFzc05hbWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsInNldFZhbHVlIiwiZGVjcmVhc2VWYWx1ZSIsInVzZUNhbGxiYWNrIiwiaW5jcmVhc2VWYWx1ZSIsImNsYXNzTmFtZXMiLCJGb290ZXIiLCJjb250YWluZXJUeXBlIiwibGlua3MiLCJpbmZvcm1hdGlvbiIsImFjY291bnQiLCJDdXN0b21Gb3JtIiwic3RhdHVzIiwib25WYWxpZGF0ZWQiLCJvbkZpbmlzaCIsImxvZyIsIkVNQUlMIiwiZW1haWwiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJjb2xvciIsIl9faHRtbCIsIkZvb3RlclN1YmNyaWJlIiwic3Vic2NyaWJlIiwiZm9ybURhdGEiLCJIZWFkZXIiLCJoZWFkZXJTdHlsZSIsInJlbmRlclN0eWxlQ2xhc3MiLCJNZW51Iiwid2lzaGxpc3RTdGF0ZSIsIndpc2hsaXN0UmVkdWNlciIsImNhcnRTaWRlYmFyT3BlbiIsInNldENhcnRTaWRlYmFyT3BlbiIsIm1lbnVTaWRlYmFyT3BlbiIsInNldE1lbnVTaWRlYmFyT3BlbiIsIndpc2hsaXN0U2lkZWJhck9wZW4iLCJzZXRXaXNobGlzdFNpZGViYXJPcGVuIiwicHJvZHVjdHNEYXRhIiwiTWVudVNpZGViYXIiLCJTdWJNZW51IiwiT3B0aW9uIiwiU2VsZWN0Iiwib25TZWxlY3RMYW5ndWFnZSIsInNldEdsb2JhbExhbmd1YWdlIiwib25TZWxlY3RDdXJyZW5jeSIsInNldEdsb2JhbEN1cnJlbmN5IiwibGFuZ3VhZ2UiLCJ3aWR0aCIsIlNlYXJjaEJhck1vYmlsZSIsImZpbGxEYXRhIiwicGxhY2Vob2xkZXIiLCJ1c2VSb3V0ZXIiLCJzZXRTZWFyY2giLCJzaG93RHJvcGRvd25PcHRpb25zIiwic2V0U2hvd0Ryb3Bkb3duT3B0aW9ucyIsImRlYm91bmRWYWx1ZSIsInNldEdsb2JhbFNlYXJjaCIsInJlbmRlckF1dG9GaWxsSXRlbSIsIm9uU2VsZWN0Q2F0ZW9yeSIsInNldEdsb2JhbENhdGVnb3J5Iiwic2V0U3ViQ2F0ZWdvcnkiLCJvcGVuRHJvcGRvd25PcHRpb24iLCJjbG9zZURyb3Bkb3duT3B0aW9uIiwib25TZWxlY3RPcHRpb24iLCJvcHRpb24iLCJvblNlYXJjaCIsInEiLCJpbnB1dFZhbHVlIiwiaW5kZXhPZiIsIlRvcE5hdiIsIlNjcm9sbEhlYWRlciIsIkxheW91dE9uZSIsInRpdGxlIiwiY2xlYXJTcGFjZVRvcCIsImNvbmZpZyIsIm1heENvdW50IiwiZHVyYXRpb24iLCJDb250YWluZXIiLCJyZW5kZXJDb250YWluZXJUeXBlIiwiWm9vbUltYWdlIiwic3JjIiwiYWx0IiwiZGlzYWJsZU9uTW9iaWxlIiwiYmFja2dyb3VuZFBvcyIsInNldEJhY2tncm91bmRQb3MiLCJoYW5kbGVNb3VzZU1vdmUiLCJsZWZ0IiwidG9wIiwiaGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiUHJvZHVjdERldGFpbExheW91dE9uZSIsImltYWdlcyIsIlByb2R1Y3REZXRhaWxSZXZpZXdJdGVtIiwiUHJvZHVjdEd1YXJhbnRlZWQiLCJQcm9kdWN0RGV0YWlsQ29udGVudE9uZSIsIm9uQWRkZWRUb0NhcnQiLCJoaWRlR3VhcmFudGVlZCIsInF1YW50aXR5Q29udHJvbGxlck5vUm91bmQiLCJzaG93Q291bnRkb3duIiwiY3VycmVudENvbG9yIiwic2V0Q3VycmVudENvbG9yIiwiY3VycmVudFNpemUiLCJzZXRDdXJyZW50U2l6ZSIsImF2YWlhYmxlUXVhbnRpdHkiLCJvbkFkZFByb2R1Y3RUb0NhcnQiLCJhZGRUb0NhcnQiLCJvbkNob29zZVNpemUiLCJvbkNob29zZUNvbG9yIiwicmF0ZSIsIkRhdGUiLCJub3ciLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInplcm9QYWQiLCJ2YXJpYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckNvZGUiLCJ2YWwiLCJkaXNhYmxlZCIsIlByb2R1Y3REZXRhaWxJbWFnZU9uZSIsImltYWdlRGF0YSIsInNsaWRlcjFTZXR0aW5ncyIsImFycm93cyIsInNsaWRlcjJTZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZm9jdXNPblNlbGVjdCIsInZlcnRpY2FsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIm5hdjEiLCJzZXROYXYxIiwibmF2MiIsInNldE5hdjIiLCJvcmRlciIsInNwYW4iLCJjIiwiaW1nIiwiVGFiUGFuZSIsIlRhYnMiLCJQcm9kdWN0RGV0YWlsVGFiT25lIiwiU3VicGFnZXNTaWRlYmFyIiwic2hvd0RyYXdlciIsIm9uQ2xvc2UiLCJXaXNobGlzdFNpZGViYXIiLCJXaXNobGlzdFNpZGViYXJJdGVtIiwicHJvZHVjdEluQ2FydCIsIm9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCIsInJlbW92ZUZyb21XaXNobGlzdCIsIm9uQWRkVG9DYXJ0IiwiZm91bmRQcm9kdWN0IiwicHJvZHVjdERhdGEiLCJDQVJUIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfRlJPTV9DQVJUIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJSRU1PVkVfQUxMX0ZST01fQ0FSVCIsIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUIiwibGFuZyIsIkdMT0JBTCIsIlNFVF9MQU5HVUFHRSIsImN1ciIsIlNFVF9DVVJSRU5DWSIsIlNFVF9DQVRFR09SWSIsIlNFVF9TRUFSQ0giLCJzZXRTb3J0IiwiU0VUX1NPUlQiLCJTRVRfU1VCQ0FURUdPUlkiLCJhZGRUb1dpc2hsaXN0IiwiV0lTSExJU1QiLCJBRERfVE9fV0lTSExJU1QiLCJwcm9kdWN0SWQiLCJSRU1PVkVfRlJPTV9XSVNITElTVCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVB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Q0FBdEI7QUFLQSxNQUFNNE8sa0JBQWtCLEdBQUl3QixTQUFELEtBQWdCO0FBQ2hEOVEsTUFBSSxFQUFFNFEsaURBQVEsQ0FBQ0csb0JBRGlDO0FBRWhERDtBQUZnRCxDQUFoQixDQUEzQixDOzs7Ozs7Ozs7Ozs7QUNQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTVosTUFBTSxHQUFHO0FBQ3BCQyxjQUFZLEVBQUUsY0FETTtBQUVwQkUsY0FBWSxFQUFFLGNBRk07QUFHcEJDLGNBQVksRUFBRSxjQUhNO0FBSXBCQyxZQUFVLEVBQUU7QUFKUSxDQUFmO0FBT0EsTUFBTWIsSUFBSSxHQUFHO0FBQ2xCQyxhQUFXLEVBQUUsYUFESztBQUVsQkMsa0JBQWdCLEVBQUUsa0JBRkE7QUFHbEJFLHNCQUFvQixFQUFFLHNCQUhKO0FBSWxCQyx3QkFBc0IsRUFBRSx3QkFKTjtBQUtsQkMsd0JBQXNCLEVBQUU7QUFMTixDQUFiO0FBUUEsTUFBTVksUUFBUSxHQUFHO0FBQ3RCQyxpQkFBZSxFQUFFLGlCQURLO0FBRXRCRSxzQkFBb0IsRUFBRTtBQUZBLENBQWpCO0FBS0EsTUFBTW5TLElBQUksR0FBRztBQUNsQjZSLFVBQVEsRUFBRSxVQURRO0FBRWxCQyxpQkFBZSxFQUFFO0FBRkMsQ0FBYixDOzs7Ozs7Ozs7OztBQ3BCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9wcm9kdWN0L1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50T25seVBvcnRhbCh7IGNoaWxkcmVuLCBzZWxlY3RvciB9KSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVmLmN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIHNldE1vdW50ZWQodHJ1ZSk7XHJcbiAgfSwgW3NlbGVjdG9yXSk7XHJcblxyXG4gIHJldHVybiBtb3VudGVkID8gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCByZWYuY3VycmVudCkgOiBudWxsO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpdGhIZWFkZXJTY3JvbGwoV3JhcHBlZENvbXBvbmVudCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc0hlYWRlckZpeGVkLCBzZXRJc0hlYWRlckZpeGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChzY3JvbGwgPj0gaGVhZGVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Njcm9sbF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtoZWFkZXJSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLXNjcm9sbC13cmFwcGVyICR7aXNIZWFkZXJGaXhlZCA/IFwiZml4ZWRcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFNIT1AgPSB7XHJcbiAgY2F0ZWdvcnk6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjbG90aGluZ1wiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwiYWNjZXNzb3JpZXNcIiwgaWNvbkNsYXNzOiBcImljb24tYWNjZXNzb3JpZXNcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwYW50c1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1wYW50XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwic2hvcnRzXCIsIGljb25DbGFzczogXCJpY29uLXNob3J0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiamFja2V0XCIsIGljb25DbGFzczogXCJpY29uLWphY2tldFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImRyZXNzXCIsIGljb25DbGFzczogXCJpY29uLWRyZXNzXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwic3VpdHNcIiwgaWNvbkNsYXNzOiBcImljb24tc3VpdFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInNoaXJ0XCIsIGljb25DbGFzczogXCJpY29uLXNoaXJ0XCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZnJ1aXRzXCIsXHJcbiAgICAgIHN1YjogW1xyXG4gICAgICAgIHsgbmFtZTogXCJ2ZWdhdGFibGVzXCIsIGljb25DbGFzczogXCJpY29uLXZlZ2V0YWJsZVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImZydWl0c1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1mcnVpdFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIm51dFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1udXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJtdXNocm9vbVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1tdXNocm9vbVwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImVsZWN0cm9uaWNcIixcclxuICAgICAgc3ViOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcImFpciBjb25kaXRpb25pbmdcIiwgaWNvbkNsYXNzOiBcImljb24tYWlyLWNvbmRpdGlvbmluZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInBob25lXCIsIGljb25DbGFzczogXCJpY29uLXBob25lXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwidHZcIiwgaWNvbkNsYXNzOiBcImljb24tZGVza3RvcFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInNwZWFrZXJcIiwgaWNvbkNsYXNzOiBcImljb24tc3BlYWtlclwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImZyaWRnZVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1mcmlkZ2VcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJmYW5cIiwgaWNvbkNsYXNzOiBcImljb24tZmFuXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZnVybml0dXJlXCIsXHJcbiAgICAgIHN1YjogW1xyXG4gICAgICAgIHsgbmFtZTogXCJ0YWJsZVwiLCBpY29uQ2xhc3M6IFwiaWNvbi10YWJsZVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNoYWlyXCIsIGljb25DbGFzczogXCJpY29uLWNoYWlyXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY2FiaW5ldFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1jYWJpbmV0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibGFtcFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1sYW1wXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiYmVkXCIsIGljb25DbGFzczogXCJpY29uLWJlZFwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvbWVzdGljXCIsXHJcbiAgICAgIHN1YjogW1xyXG4gICAgICAgIHsgbmFtZTogXCJsaXBzdGlja1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1saXBzdGlja1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInBvd2RlclwiLCBpY29uQ2xhc3M6IFwiaWNvbi1wb3dkZXJcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwZXJmdW1lXCIsIGljb25DbGFzczogXCJpY29uLXBlcmZ1cm1cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJuYWlsIHBvbGlzaFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1uYWlsXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibWFzY2FyYVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1tYXNjYXJhXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuIiwiLy9Qcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5ID0gKGFyciwgY2F0ZWdvcnkpID0+IHtcclxuICByZXR1cm4gY2F0ZWdvcnlcclxuICAgID8gYXJyLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIClcclxuICAgIDogYXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlTbHVnID0gKGFyciwgc2x1ZykgPT4ge1xyXG4gIHJldHVybiBzbHVnICYmIHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiXHJcbiAgICA/IGFyci5maW5kKChwKSA9PiBwLnNsdWcudG9Mb3dlckNhc2UoKSA9PT0gc2x1Zy50b0xvd2VyQ2FzZSgpKVxyXG4gICAgOiBhcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsVmFsdWVzT2ZLZXkgPSAoYXJyLCBrZXkpID0+IHtcclxuICBpZiAoa2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIGxldCBzdWJDYXRlZ29yeSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFzdWJDYXRlZ29yeS5pbmNsdWRlcyhhcnJbaV1ba2V5XSkpIHtcclxuICAgICAgICBzdWJDYXRlZ29yeS5wdXNoKGFycltpXVtrZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1YkNhdGVnb3J5Lmxlbmd0aCA+IDAgPyBzdWJDYXRlZ29yeSA6IG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxTdWJDYXRlZ29yaWVzID0gKGFyciwgY2F0ZWdvcnkpID0+IHtcclxuICBpZiAoY2F0ZWdvcnkgJiYgdHlwZW9mIGNhdGVnb3J5ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBsZXQgcHJvZHVjdHMgPSBnZXRQcm9kdWN0cyhhcnIsIGNhdGVnb3J5KTtcclxuICAgIGxldCBzdWJDYXRlZ29yaWVzQXJyID0gZ2V0QWxsVmFsdWVzT2ZLZXkocHJvZHVjdHMsIFwic3ViQ2F0ZWdvcnlcIik7XHJcbiAgICByZXR1cm4gc3ViQ2F0ZWdvcmllc0FyciAhPT0gbnVsbCA/IHN1YkNhdGVnb3JpZXNBcnIgOiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNvcnQgPSAocHJvZHVjdHMsIHR5cGUpID0+IHtcclxuICBmdW5jdGlvbiBzb3J0V2l0aENvbmRpdGlvbihhcnIsIHZhbHVlLCByZXZlcnNlID0gZmFsc2UpIHtcclxuICAgIGxldCBudW0gPSByZXZlcnNlID8gLTEgOiAxO1xyXG4gICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGlmIChhW3ZhbHVlXSA8IGJbdmFsdWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xICogbnVtO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhW3ZhbHVlXSA+IGJbdmFsdWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIDEgKiBudW07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09IFwiYXpcIikge1xyXG4gICAgcmV0dXJuIHNvcnRXaXRoQ29uZGl0aW9uKHByb2R1Y3RzLCBcIm5hbWVcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInphXCIpIHtcclxuICAgIHJldHVybiBzb3J0V2l0aENvbmRpdGlvbihwcm9kdWN0cywgXCJuYW1lXCIsIHRydWUpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJsb3dIaWdoXCIpIHtcclxuICAgIHJldHVybiBzb3J0V2l0aENvbmRpdGlvbihwcm9kdWN0cywgXCJwcmljZVwiKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiaGlnaExvd1wiKSB7XHJcbiAgICByZXR1cm4gc29ydFdpdGhDb25kaXRpb24ocHJvZHVjdHMsIFwicHJpY2VcIiwgdHJ1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeUZpbHRlciA9IChwcm9kdWN0cywgc29ydFR5cGUsIHN1YkNhdGVnb3J5KSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkUHJvZHVjdCA9IHN1YkNhdGVnb3J5XHJcbiAgICA/IHByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocHJvZHVjdCkgPT5cclxuICAgICAgICAgIHByb2R1Y3Quc3ViQ2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gc3ViQ2F0ZWdvcnkudG9Mb3dlckNhc2UoKVxyXG4gICAgICApXHJcbiAgICA6IHByb2R1Y3RzO1xyXG4gIHJldHVybiBnZXRQcm9kdWN0c0J5U29ydChmaWx0ZXJlZFByb2R1Y3QsIHNvcnRUeXBlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2VhcmNoID0gKHByb2R1Y3RzLCBrZXl3b3JkKSA9PiB7XHJcbiAgcmV0dXJuIGtleXdvcmQgJiYga2V5d29yZCAhPT0gXCJcIlxyXG4gICAgPyBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+XHJcbiAgICAgICAgcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICApXHJcbiAgICA6IHByb2R1Y3RzO1xyXG59O1xyXG5cclxuLy9DYXJ0XHJcbmV4cG9ydCBjb25zdCBnZXRUb3RhbFByb2R1Y3RJbkNhcnQgPSAoYXJyKSA9PiB7XHJcbiAgcmV0dXJuIGFyciA/IGFyci5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0uY2FydFF1YW50aXR5LCAwKSA6IDA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlVG90YWxQcmljZSA9IChhcnIpID0+IHtcclxuICBsZXQgdG90YWwgPSAwO1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5kaXNjb3VudCkge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgID8gKGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50KSAqIGl0ZW0uY2FydFF1YW50aXR5XHJcbiAgICAgICAgOiBpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5ID8gaXRlbS5wcmljZSAqIGl0ZW0uY2FydFF1YW50aXR5IDogaXRlbS5wcmljZTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gdG90YWw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gKGNhcnRBcnIsIHBpZCkgPT4ge1xyXG4gIHJldHVybiBwaWQgPyBjYXJ0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBpZCkgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkID0gKGFyciwgcHJvZHVjdCkgPT4ge1xyXG4gIGNvbnN0IHByb2R1Y3RzSW5DYXJ0ID0gYXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgaWYgKHByb2R1Y3RzSW5DYXJ0ICYmIHByb2R1Y3RzSW5DYXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0ID1cclxuICAgICAgcHJvZHVjdHNJbkNhcnQubGVuZ3RoID4gMCAmJlxyXG4gICAgICBwcm9kdWN0c0luQ2FydC5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0uY2FydFF1YW50aXR5LCAwKTtcclxuICAgIGxldCBhdmFpYWJsZSA9IHByb2R1Y3QucXVhbnRpdHkgLSB0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydDtcclxuICAgIHJldHVybiBhdmFpYWJsZSA8IDEgPyAwIDogYXZhaWFibGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2R1Y3QucXVhbnRpdHk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9XaXNobGlzdFxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QgPSAod2lzaGxpc3RBcnIsIHBpZCkgPT4ge1xyXG4gIHJldHVybiBwaWQgPyB3aXNobGlzdEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogbnVsbDtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheSkge1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcclxuICAgIH0sIGRlbGF5KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSwgW3ZhbHVlXSk7XHJcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIlVTRFwiKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGVzLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxyXG4gIH0pLmZvcm1hdChwcmljZSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgdHJhbnNsYXRlU3RyaW5nID0gKHN0cmluZywgbGFuZ3VhZ2UsIEFQSV9rZXkpID0+IHtcclxuLy8gICBpZiAoIUFQSV9rZXkpIHtcclxuLy8gICAgIHJldHVybiBzdHJpbmc7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGxldCB0cmFzbGF0ZWRTdHJpbmc7XHJcbi8vICAgICByZXR1cm4gdHJhbnNsYXRlKFwiSGVsbG8gd29ybGRcIiwge1xyXG4vLyAgICAgICB0bzogbGFuZ3VhZ2UsXHJcbi8vICAgICAgIGtleTogQVBJX2tleSxcclxuLy8gICAgIH0pXHJcbi8vICAgICAgIC50aGVuKChyZXMpID0+ICh0cmFzbGF0ZWRTdHJpbmcgPSByZXMpKVxyXG4vLyAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRW1wdHksIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENhcnRTaWRlYmFySXRlbSBmcm9tIFwiLi9DYXJ0U2lkZWJhckl0ZW1cIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlVG90YWxQcmljZSB9IGZyb20gXCIuLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2FydFNpZGViYXIoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCB7IGN1cnJlbmN5LCBsb2NhbGVzIH0gPSBnbG9iYWxTdGF0ZS5jdXJyZW5jeTtcclxuICByZXR1cm4gY2FydFN0YXRlLmxlbmd0aCA9PT0gMCA/IChcclxuICAgIDxFbXB0eSBkZXNjcmlwdGlvbj1cIk5vIHByb2R1Y3RzIGluIGNhcnRcIiAvPlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1wcm9kdWN0c1wiPlxyXG4gICAgICAgIHtjYXJ0U3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcnRTaWRlYmFySXRlbSBrZXk9e2luZGV4fSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItdG90YWxcIj5cclxuICAgICAgICA8aDU+XHJcbiAgICAgICAgICBUb3RhbDp7XCIgXCJ9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlKSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItdG90YWxfX2J1dHRvbnNcIj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0XCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkNoZWNrb3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENhcnRTaWRlYmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTW9kYWwsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgUXVhbnRpdHlTZWxlY3RvciBmcm9tIFwiLi4vY29udHJvbHMvUXVhbnRpdHlTZWxlY3RvclwiO1xyXG5pbXBvcnQge1xyXG4gIHJlbW92ZUZyb21DYXJ0LFxyXG4gIGRlY3JlYXNlUXVhbnRpdHlDYXJ0LFxyXG4gIGluY3JlYXNlUXVhbnRpdHlDYXJ0LFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJ0U2lkZWJhckl0ZW0oeyBkYXRhIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoZGF0YS5jYXJ0UXVhbnRpdHkpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCB7IGN1cnJlbmN5LCBsb2NhbGVzIH0gPSBnbG9iYWxTdGF0ZS5jdXJyZW5jeTtcclxuICBjb25zdCBvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICB9O1xyXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSAoZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQoZGF0YS5jYXJ0SWQpKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjYXJ0XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IChlKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItaXRlbV9faW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1iSW1hZ2VbMF19IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLWl0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+e2RhdGEubmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XHJcbiAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShcclxuICAgICAgICAgICAgICAgICAgKGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KSAqIGRhdGEuY2FydFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEucHJpY2UgKiBkYXRhLmNhcnRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxlcyxcclxuICAgICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmNhcnRRdWFudGl0eX1cclxuICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICBtYXg9e2RhdGEucXVhbnRpdHl9XHJcbiAgICAgICAgICAgIG9uRGVjcmVhc2U9eygpID0+IGRpc3BhdGNoKGRlY3JlYXNlUXVhbnRpdHlDYXJ0KGRhdGEuY2FydElkKSl9XHJcbiAgICAgICAgICAgIG9uSW5jcmVhc2U9eygpID0+IGRpc3BhdGNoKGluY3JlYXNlUXVhbnRpdHlDYXJ0KGRhdGEuY2FydElkKSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLWl0ZW1fX2Nsb3NlXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0fT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9jbG9zZVwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkNvZmlybSB0aGlzIGFjdGlvblwiXHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+QXJlIHlvdXIgc3VyZSB0byByZW1vdmUgcHJvZHVjdCBmcm9tIGNhcnQgPzwvcD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FydFNpZGViYXJJdGVtKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5mdW5jdGlvbiBRdWFudGl0eVNlbGVjdG9yKHtcclxuICBtaW4sXHJcbiAgbWF4LFxyXG4gIGRlZmF1bHRWYWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBzaXplLFxyXG4gIG5vUm91bmQsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIG9uRGVjcmVhc2UsXHJcbiAgb25JbmNyZWFzZSxcclxufSkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcclxuICB9LCBbdmFsdWVdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZGVmYXVsdFZhbHVlKTtcclxuICB9LCBbZGVmYXVsdFZhbHVlXSk7XHJcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChtaW4gJiYgdmFsdWUgPD0gbWluKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2YWx1ZSA8PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIG9uRGVjcmVhc2UgJiYgb25EZWNyZWFzZSgpO1xyXG4gICAgICBzZXRWYWx1ZSh2YWx1ZSAtIDEpO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZV0pO1xyXG4gIGNvbnN0IGluY3JlYXNlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPj0gbWF4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG9uSW5jcmVhc2UgJiYgb25JbmNyZWFzZSgpO1xyXG4gICAgc2V0VmFsdWUodmFsdWUgKyAxKTtcclxuICB9LCBbdmFsdWVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BxdWFudGl0eS1zZWxlY3RvciAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX0gLSR7Y2xhc3NOYW1lcyhcclxuICAgICAgICBzaXplXHJcbiAgICAgICl9IC0ke2NsYXNzTmFtZXMoeyBcIm5vLXJvdW5kXCI6IG5vUm91bmQgfSl9YH1cclxuICAgID5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLWNvbnRyb2xsZXJcIlxyXG4gICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICBkaXNhYmxlZD17dmFsdWUgPD0gbWluIHx8IHZhbHVlIDw9IDF9XHJcbiAgICAgICAgb25DbGljaz17ZGVjcmVhc2VWYWx1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIC1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItbnVtYmVyXCI+e3ZhbHVlfTwvZGl2PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItY29udHJvbGxlclwiXHJcbiAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgIGRpc2FibGVkPXt2YWx1ZSA+PSBtYXh9XHJcbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VWYWx1ZX1cclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFF1YW50aXR5U2VsZWN0b3IpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEZvb3RlclN1YmNyaWJlIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlclN1YmNyaWJlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgbGlua3MgZnJvbSBcIi4uLy4uL2RhdGEvZm9vdGVyLWxpbmtzLmpzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcih7IGNvbnRhaW5lclR5cGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10b3BcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHR5cGU9e2NvbnRhaW5lclR5cGV9PlxyXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtb25lXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxwPjcxNzYgQmx1ZSBTcHJpbmcgTGFuZSBTYW50YSBNb25pY2EsIENBIDkwNDAzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+aGkuYXZpdGV4QGdtYWlsLmNvbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT4rMDEgMTIzIDQ1NiA4ODg8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPkluZm9ybWF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGlua3MuaW5mb3JtYXRpb24ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPk15IGFjY291bnQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5hY2NvdW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIgc3Bhbj1cIjI0XCIgc209ezE4fSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wLWl0ZW0gLWNvbC10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPlN1YnNjcmliZSB0byBvdXIgTmV3c2xldHRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVyIGFuZCBnZXQgMTAlIG9mZiB5b3VyIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgIHB1cmNoYXNlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyU3ViY3JpYmUgdXJsPVwiaHR0cHM6Ly9qc3Rlci51czcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9ZWQ0MGMwMDg0YTBjNWJhMzFiMzM2NWQ2NSZpZD1lYzZmMzJiZjVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9mb290ZXIvcGF5bWVudC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBheW1lbnQgbWV0aG9kc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tXCI+XHJcbiAgICAgICAgPENvbnRhaW5lciB0eXBlPXtjb250YWluZXJUeXBlfT5cclxuICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDIwIEF2aXRleCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tRm9ybSA9IFJlYWN0Lm1lbW8oKHsgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCB9KSA9PiB7XHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgdmFsdWUpO1xyXG4gICAgdmFsdWUgJiZcclxuICAgICAgb25WYWxpZGF0ZWQoe1xyXG4gICAgICAgIEVNQUlMOiB2YWx1ZS5lbWFpbCxcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItc3ViY3JpYmVfX2Zvcm1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbm9TdHlsZT17dHJ1ZX1cclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIEUtbWFpbCFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBub1N0eWxlPXt0cnVlfT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTVUJTQ1JJQkVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHtzdGF0dXMgPT09IFwic2VuZGluZ1wiICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PnNlbmRpbmcuLi48L2Rpdj59XHJcbiAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyU3ViY3JpYmUoeyB1cmwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXHJcbiAgICAgIHVybD17dXJsfVxyXG4gICAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcclxuICAgICAgICA8Q3VzdG9tRm9ybVxyXG4gICAgICAgICAgc3RhdHVzPXtzdGF0dXN9XHJcbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2VsZW1lbnRzL01lbnVcIjtcclxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi9lbGVtZW50cy9Ub3BOYXZcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IGNvbnRhaW5lclR5cGUsIGhlYWRlclN0eWxlIH0pIHtcclxuICBjb25zdCByZW5kZXJTdHlsZUNsYXNzID0gKHR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwidHdvXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiLXN0eWxlLXR3b1wiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImRlZmF1bHRcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1vbmUgJHtyZW5kZXJTdHlsZUNsYXNzKGhlYWRlclN0eWxlKX1gfT5cclxuICAgICAgPFRvcE5hdiBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgICA8TWVudSBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIZWFkZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIERyYXdlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3QuanNvblwiO1xyXG5pbXBvcnQgQ2FydFNpZGViYXIgZnJvbSBcIi4uLy4uL2NhcnQvQ2FydFNpZGViYXJcIjtcclxuaW1wb3J0IFdpc2hsaXN0U2lkZWJhciBmcm9tIFwiLi4vLi4vd2lzaGxpc3QvV2lzaGxpc3RTaWRlYmFyXCI7XHJcbmltcG9ydCBNZW51U2lkZWJhciBmcm9tIFwiLi9NZW51U2lkZWJhclwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgeyBnZXRUb3RhbFByb2R1Y3RJbkNhcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lbnUoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCB3aXNobGlzdFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNobGlzdFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtjYXJ0U2lkZWJhck9wZW4sIHNldENhcnRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVTaWRlYmFyT3Blbiwgc2V0TWVudVNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbd2lzaGxpc3RTaWRlYmFyT3Blbiwgc2V0V2lzaGxpc3RTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNpZGViYXItb3BlbmVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVudVNpZGViYXJPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgICAgZmlsbERhdGE9e3Byb2R1Y3RzRGF0YX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvciA/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Kb2luIG5vdzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0V2lzaGxpc3RTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvbWVudS13aXNobGlzdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dpc2hsaXN0U3RhdGUubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2FydFNpZGViYXJPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9tZW51LWJhZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2dldFRvdGFsUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtc2VhcmNoXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgZmlsbERhdGE9e3Byb2R1Y3RzRGF0YX0gcGxhY2Vob2xkZXI9XCJTZWFyY2hpbmcuLi5cIiAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICB0aXRsZT17YFdpc2hsaXN0ICgke3dpc2hsaXN0U3RhdGUubGVuZ3RofSlgfVxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFdpc2hsaXN0U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGNsb3NlSWNvbj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5DbG9zZTwvcD4gPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXt3aXNobGlzdFNpZGViYXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXs0NDV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zaWRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxXaXNobGlzdFNpZGViYXIgLz5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgdGl0bGU9e2BTaG9wcGluZyBjYXJ0ICgke2dldFRvdGFsUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUpfSlgfVxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldENhcnRTaWRlYmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgY2xvc2VJY29uPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPkNsb3NlPC9wPiA8Q2xvc2VPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e2NhcnRTaWRlYmFyT3Blbn1cclxuICAgICAgICB3aWR0aD17NDQ1fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtc2lkZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q2FydFNpZGViYXIgLz5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgdGl0bGU9XCIgXCJcclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNZW51U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGNsb3NlSWNvbj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5DbG9zZTwvcD4gPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXttZW51U2lkZWJhck9wZW59XHJcbiAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNpZGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVTaWRlYmFyIC8+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNZW51KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBzZXRHbG9iYWxMYW5ndWFnZSxcclxuICBzZXRHbG9iYWxDdXJyZW5jeSxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBNZW51U2lkZWJhcigpIHtcclxuICBjb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IG9uU2VsZWN0TGFuZ3VhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbExhbmd1YWdlKHZhbHVlKSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlbGVjdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxDdXJyZW5jeSh2YWx1ZSkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zaWRlYmFyXCI+XHJcbiAgICAgIDxNZW51IG1vZGU9XCJpbmxpbmVcIj5cclxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgdGl0bGU9XCJIb21lcGFnZXNcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWVwYWdlIDE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ob21lcGFnZTJcIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZXBhZ2UgMjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hvbWVwYWdlM1wifT5cclxuICAgICAgICAgICAgICA8YT5Ib21lcGFnZSAzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaG9tZXBhZ2U0XCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWVwYWdlIDQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIyXCIgdGl0bGU9XCJTaG9wXCI+XHJcbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIyLTFcIiB0aXRsZT1cIlNob3AgZGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgIFwiL3Nob3AvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwtMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+UHJvZHVjdCBEZXRhaWwgMTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9zaG9wL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLTJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPlByb2R1Y3QgRGV0YWlsIDI8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI3XCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgXCIvc2hvcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC0zXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YT5Qcm9kdWN0IERldGFpbCAzPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjhcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXRcIn0+XHJcbiAgICAgICAgICAgICAgPGE+Q2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0LWNvbXBsZXRlXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkNoZWNrb3V0IENvbXBsZXRlPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxMFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiI1wifT5cclxuICAgICAgICAgICAgPGE+SGVscDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjExXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIjXCJ9PlxyXG4gICAgICAgICAgICA8YT5PZmZlcjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2lkZWJhci1zZWxlY3RzXCI+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtnbG9iYWxTdGF0ZS5sYW5ndWFnZX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdExhbmd1YWdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqcFwiPkphcGFuZXNlPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidmlcIj5WaWV0bmFtZXNlPC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtnbG9iYWxTdGF0ZS5jdXJyZW5jeS5jdXJyZW5jeX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNTAgfX1cclxuICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEN1cnJlbmN5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJVU0RcIj5VU0QgLSBEb2xsYXI8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJKUFlcIj5KUFkgLSBZZW48L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJWTkRcIj5WTkQgLSBWaWV0bmFtIGRvbmc8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1lbnVTaWRlYmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBCdXR0b24sIEF1dG9Db21wbGV0ZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBzZXRHbG9iYWxDYXRlZ29yeSxcclxuICBzZXRHbG9iYWxTZWFyY2gsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBzZXRTdWJDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJhck1vYmlsZSh7IGZpbGxEYXRhLCBwbGFjZWhvbGRlciB9KSB7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93RHJvcGRvd25PcHRpb25zLCBzZXRTaG93RHJvcGRvd25PcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgZGVib3VuZFZhbHVlID0gdXNlRGVib3VuY2Uoc2VhcmNoLCAzMDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxTZWFyY2goZGVib3VuZFZhbHVlKSk7XHJcbiAgfSwgW2RlYm91bmRWYWx1ZV0pO1xyXG4gIGNvbnN0IHJlbmRlckF1dG9GaWxsSXRlbSA9ICgpID0+IHtcclxuICAgIGxldCBwcm9kdWN0ID0gZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KGZpbGxEYXRhLCBnbG9iYWxTdGF0ZS5jYXRlZ29yeSk7XHJcbiAgICByZXR1cm4gcHJvZHVjdC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIHZhbHVlOiBpdGVtLm5hbWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlbGVjdENhdGVvcnkgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbENhdGVnb3J5KHZhbHVlKSk7XHJcbiAgICBkaXNwYXRjaChzZXRTdWJDYXRlZ29yeShcIlwiKSk7XHJcbiAgfTtcclxuICBjb25zdCBvcGVuRHJvcGRvd25PcHRpb24gPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNob3dEcm9wZG93bk9wdGlvbnModHJ1ZSk7XHJcbiAgICBzZXRTZWFyY2godmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VEcm9wZG93bk9wdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFNob3dEcm9wZG93bk9wdGlvbnMoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0U2VhcmNoKHZhbHVlKTtcclxuICAgIGNsb3NlRHJvcGRvd25PcHRpb24oKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzZWFyY2ggfHwgc2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgICAgcXVlcnk6IHsgcTogc2VhcmNoIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zZWFyY2hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXNlYXJjaF9fZm9ybVwiPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtc2VhcmNoX19mb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmNhdGVnb3J5fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDE1MCB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2F0ZW9yeX1cclxuICAgICAgICAgIHZhbHVlPXtnbG9iYWxTdGF0ZS5jYXRlZ29yeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7U0hPUC5jYXRlZ29yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2VhcmNoX19mb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgYmFja2ZpbGw9e3RydWV9XHJcbiAgICAgICAgICAgIG9wZW49e3Nob3dEcm9wZG93bk9wdGlvbnN9XHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvcGVuRHJvcGRvd25PcHRpb259XHJcbiAgICAgICAgICAgIG9uQmx1cj17Y2xvc2VEcm9wZG93bk9wdGlvbn1cclxuICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0T3B0aW9ufVxyXG4gICAgICAgICAgICBvcHRpb25zPXtyZW5kZXJBdXRvRmlsbEl0ZW0oKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dFZhbHVlLCBvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCkpICE9PVxyXG4gICAgICAgICAgICAgIC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU2VhcmNofT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWFyY2hCYXJNb2JpbGUpO1xyXG4iLCJpbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNldEdsb2JhbExhbmd1YWdlLFxyXG4gIHNldEdsb2JhbEN1cnJlbmN5LFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BOYXYoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0R2xvYmFsTGFuZ3VhZ2UodmFsdWUpKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VsZWN0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbEN1cnJlbmN5KHZhbHVlKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2XCI+XHJcbiAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1zZWxlY3RzXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmxhbmd1YWdlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA5MCB9fVxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RMYW5ndWFnZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwianBcIj5KYXBhbmVzZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ2aVwiPlZpZXRuYW1lc2U8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmN1cnJlbmN5LmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q3VycmVuY3l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEIC0gRG9sbGFyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkpQWVwiPkpQWSAtIFllbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJWTkRcIj5WTkQgLSBWaWV0bmFtIGRvbmc8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1saW5rc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtbGlua3NfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvI1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX3F1ZXN0aW9uX2FsdDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBIZWxwXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LWxpbmtzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiLyNcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9naWZ0XCIgLz4gT2ZmZXJcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUb3BOYXYpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQmFja1RvcCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IFdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi9XaXRoSGVhZGVyU2Nyb2xsXCI7XHJcbmltcG9ydCBTdWJwYWdlc1NpZGViYXIgZnJvbSBcIi4uL3N1YnBhZ2VzL1N1YnBhZ2VzU2lkZWJhclwiO1xyXG5cclxuY29uc3QgU2Nyb2xsSGVhZGVyID0gV2l0aEhlYWRlclNjcm9sbChIZWFkZXIpO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0T25lKHtcclxuICB0aXRsZSxcclxuICBoZWFkZXJTdHlsZSxcclxuICBjb250YWluZXJUeXBlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsZWFyU3BhY2VUb3AsXHJcbn0pIHtcclxuICBtZXNzYWdlLmNvbmZpZyh7XHJcbiAgICBtYXhDb3VudDogMyxcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNjcm9sbEhlYWRlciBoZWFkZXJTdHlsZT17aGVhZGVyU3R5bGV9IGNvbnRhaW5lclR5cGU9e2NvbnRhaW5lclR5cGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGVudCAke2NsYXNzTmFtZXMoeyBcImNsZWFyLXRvcFwiOiBjbGVhclNwYWNlVG9wIH0pfWB9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgY29udGFpbmVyVHlwZT17Y29udGFpbmVyVHlwZX0gLz5cclxuICAgICAgPEJhY2tUb3AgLz5cclxuICAgICAgPFN1YnBhZ2VzU2lkZWJhciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhMYXlvdXRPbmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyB0eXBlLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgcmVuZGVyQ29udGFpbmVyVHlwZSA9ICh0eXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImZsdWlkXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyLWZsdWlkXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3JlbmRlckNvbnRhaW5lclR5cGUodHlwZSl9PntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gWm9vbUltYWdlKHsgc3JjLCBhbHQsIGRpc2FibGVPbk1vYmlsZSB9KSB7XHJcbiAgY29uc3QgW2JhY2tncm91bmRQb3MsIHNldEJhY2tncm91bmRQb3NdID0gdXNlU3RhdGUoXCIwJSAwJVwiKTtcclxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgeCA9ICgoZS5wYWdlWCAtIGxlZnQpIC8gd2lkdGgpICogMTAwO1xyXG4gICAgY29uc3QgeSA9ICgoZS5wYWdlWSAtIHRvcCkgLyBoZWlnaHQpICogMTAwO1xyXG4gICAgc2V0QmFja2dyb3VuZFBvcyhgJHt4fSUgJHt5fSVgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmlndXJlXHJcbiAgICAgIGNsYXNzTmFtZT17YHpvb20taW1hZ2UgJHtjbGFzc05hbWVzKHtcclxuICAgICAgICBcIi1kaXNhYmxlLW9uLW1vYmlsZVwiOiBkaXNhYmxlT25Nb2JpbGUsXHJcbiAgICAgIH0pfWB9XHJcbiAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3JjfSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvcyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e3NyY30gYWx0PXthbHR9IC8+XHJcbiAgICA8L2ZpZ3VyZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFpvb21JbWFnZSk7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sLCBCcmVhZGNydW1iIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsQ29udGVudE9uZSBmcm9tIFwiLi9wcm9kdWN0RGV0YWlsQ29udGVudC9Qcm9kdWN0RGV0YWlsQ29udGVudE9uZVwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbFRhYk9uZSBmcm9tIFwiLi9wcm9kdWN0RGV0YWlsVGFiL1Byb2R1Y3REZXRhaWxUYWJPbmVcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxJbWFnZU9uZSBmcm9tIFwiLi9wcm9kdWN0RGV0YWlsSW1hZ2UvUHJvZHVjdERldGFpbEltYWdlT25lXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsTGF5b3V0T25lKHsgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtb25lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtb25lLXRvcFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1icmVhZGNydW1iXCIgc2VwYXJhdG9yPVwiPlwiPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkhvbWU8L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Qcm9kdWN0PC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+e2RhdGEubmFtZX08L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXs3MH0+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxJbWFnZU9uZSBpbWFnZURhdGE9e2RhdGEuaW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8UHJvZHVjdERldGFpbENvbnRlbnRPbmUgZGF0YT17ZGF0YX0gcXVhbnRpdHlDb250cm9sbGVyTm9Sb3VuZCAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1vbmUtYm90dG9tXCI+XHJcbiAgICAgICAgPFByb2R1Y3REZXRhaWxUYWJPbmUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxMYXlvdXRPbmUpO1xyXG4iLCJpbXBvcnQgeyBSYXRlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbFJldmlld0l0ZW0oeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1yZXZpZXctaXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXJldmlldy1pdGVtX19hdmF0YXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3RoaXNwZXJzb25kb2Vzbm90ZXhpc3QuY29tL2ltYWdlXCJcclxuICAgICAgICAgIGFsdD1cIlJldmlld2VyIGF2YXRhclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmF0ZSBkaXNhYmxlZCBkZWZhdWx0VmFsdWU9ezR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXJldmlldy1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgPGg1Pk1heSAwNCwgMjAyMDwvaDU+XHJcbiAgICAgICAgPGgzPkpvaG4gc21pdGg8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQXMgYSByZXN1bHQgb2YgaW5ub3ZhdGlvbnMgaW4gb3J0aG9kb250aWMgbWF0ZXJpYWxzLCBvcnRob2RvbnRpc3RzIGFyZVxyXG4gICAgICAgICAgYWJsZSB0byBwcm92aWRlIHRvZGF54oCZcyBwYXRpZW50cyB3aXRoIGEgY29tZm9ydGFibGUgYW5kIGNvbnZlbmllbnRcclxuICAgICAgICAgIGV4cGVyaWVuY2Ugd2hpbGUgd29ya2luZyB0b3dhcmQgdGhlIHVsdGltYXRlIGdvYWwgb2YgYSBoZWFsdGh5LCBhIGdvb2RcclxuICAgICAgICAgIGJpdGUgYW5kIGltcHJvdmVkIGZhY2lhbCBhcHBlYXJhbmNlLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxSZXZpZXdJdGVtKTtcclxuIiwiaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0R3VhcmFudGVlZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1ndWFyYW50ZWVkXCI+XHJcbiAgICAgIDxEaXZpZGVyPkd1YXJhbnRlZWQgU2FmZSBDaGVja291dDwvRGl2aWRlcj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17XHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvc2hvcC9zaG9wLWRldGFpbC9ndWFyYW50ZWVkLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsdD1cIkd1YXJhbnRlZWRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmF0ZSwgQnV0dG9uLCBSYWRpbywgUHJvZ3Jlc3MsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQ291bnRkb3duLCB7IHplcm9QYWQgfSBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbnRyb2xzL1F1YW50aXR5U2VsZWN0b3JcIjtcclxuaW1wb3J0IFByb2R1Y3RHdWFyYW50ZWVkIGZyb20gXCIuLi9lbGVtZW50cy9Qcm9kdWN0R3VhcmFudGVlZFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbENvbnRlbnRPbmUoe1xyXG4gIGRhdGEsXHJcbiAgb25BZGRlZFRvQ2FydCxcclxuICBoaWRlR3VhcmFudGVlZCxcclxuICBxdWFudGl0eUNvbnRyb2xsZXJOb1JvdW5kLFxyXG4gIHNob3dDb3VudGRvd24sXHJcbn0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbY3VycmVudENvbG9yLCBzZXRDdXJyZW50Q29sb3JdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50U2l6ZSwgc2V0Q3VycmVudFNpemVdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCBhdmFpYWJsZVF1YW50aXR5ID0gY2hlY2tBdmFpYWJsZVF1YW50aXR5VG9BZGQoY2FydFN0YXRlLCBkYXRhKTtcclxuICBjb25zdCB7IGN1cnJlbmN5LCBsb2NhbGVzIH0gPSBnbG9iYWxTdGF0ZS5jdXJyZW5jeTtcclxuICBjb25zdCBvbkFkZFByb2R1Y3RUb0NhcnQgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGF2YWlhYmxlUXVhbnRpdHkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGRhdGEsIHF1YW50aXR5LCBjdXJyZW50Q29sb3IsIGN1cnJlbnRTaXplKSk7XHJcbiAgICBvbkFkZGVkVG9DYXJ0ICYmIG9uQWRkZWRUb0NhcnQoKTtcclxuICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgfTtcclxuICBjb25zdCBvbkNob29zZVNpemUgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNpemUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DaG9vc2VDb2xvciA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Q29sb3IoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmVcIj5cclxuICAgICAgPGgzPntkYXRhLm5hbWV9PC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1yYXRlXCI+XHJcbiAgICAgICAgPFJhdGUgZGlzYWJsZWQgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtcmV2aWV3LWNvdW50XCI+XHJcbiAgICAgICAgICAtIDUgUmV2aWV3c1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtcHJpY2VcIj5cclxuICAgICAgICA8aDU+XHJcbiAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50LCBsb2NhbGVzLCBjdXJyZW5jeSlcclxuICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlLCBsb2NhbGVzLCBjdXJyZW5jeSl9XHJcbiAgICAgICAgPC9oNT5cclxuICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiAoXHJcbiAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSwgbG9jYWxlcywgY3VycmVuY3kpfTwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeGNlcHR1cmkgaWxsb1xyXG4gICAgICAgIHBvc3NpbXVzIHF1YWUgdGVuZXR1ci4gUG9ycm8gYWxpcXVhbSBxdWFlcmF0IGRvbG9ydW0gcGFyaWF0dXIgbW9sZXN0aWFzXHJcbiAgICAgICAgY29tbW9kaSBpcHNhXHJcbiAgICAgIDwvcD5cclxuICAgICAge3Nob3dDb3VudGRvd24gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWNvdW50ZG93blwiPlxyXG4gICAgICAgICAgICA8aDM+SHVycnkgVXAgISBTYWxlcyBlbmQgaW4gOjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxDb3VudGRvd25cclxuICAgICAgICAgICAgICAgIGRhdGU9e0RhdGUubm93KCkgKyAxMDAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlcj17KHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3plcm9QYWQoZGF5cyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5kYXlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWNvdW50ZG93bl9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57emVyb1BhZChob3Vycyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ob3Vyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3plcm9QYWQobWludXRlcyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW5zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWNvdW50ZG93bl9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57emVyb1BhZChzZWNvbmRzKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlY3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX3NvbGRcIj5cclxuICAgICAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NTB9IHNob3dJbmZvPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbGQtZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICBBbHJlYWR5IFNvbGQ6XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgVG90YWw6XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS12YXJpYXRpb25cIj5cclxuICAgICAgICB7ZGF0YS5zaXplICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWl0ZW0gLXNpemVcIj5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8cD5TaXplOjwvcD5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgb25DaGFuZ2U9e29uQ2hvb3NlU2l6ZX0gZGVmYXVsdFZhbHVlPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuc2l6ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtkYXRhLnZhcmlhdGlvbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1pdGVtIC1jb2xvclwiPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxwPkNvbG9yOjwvcD5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgb25DaGFuZ2U9e29uQ2hvb3NlQ29sb3J9IGRlZmF1bHRWYWx1ZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnZhcmlhdGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvckNvZGUgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1hY3Rpb25zXCI+XHJcbiAgICAgICAgPFF1YW50aXR5U2VsZWN0b3JcclxuICAgICAgICAgIG5vUm91bmQ9e3F1YW50aXR5Q29udHJvbGxlck5vUm91bmR9XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0UXVhbnRpdHkodmFsKX1cclxuICAgICAgICAgIHNpemU9XCJiaWdcIlxyXG4gICAgICAgICAgbWF4PXtjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZChjYXJ0U3RhdGUsIGRhdGEpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRQcm9kdWN0VG9DYXJ0KGRhdGEpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2F2YWlhYmxlUXVhbnRpdHkgPT09IDB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1hdGMgJHtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGF2YWlhYmxlUXVhbnRpdHkgPT09IDAsXHJcbiAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgZGFuZ2VyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshaGlkZUd1YXJhbnRlZWQgJiYgPFByb2R1Y3RHdWFyYW50ZWVkIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsQ29udGVudE9uZSk7XHJcbiIsImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFpvb21JbWFnZSBmcm9tIFwiLi4vLi4vb3RoZXIvWm9vbUltYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsSW1hZ2VPbmUoeyBpbWFnZURhdGEgfSkge1xyXG4gIGNvbnN0IHNsaWRlcjFTZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgfTtcclxuICBjb25zdCBzbGlkZXIyU2V0dGluZ3MgPSB7XHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAvLyBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz4sXHJcbiAgICAvLyBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgW25hdjEsIHNldE5hdjFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbmF2Miwgc2V0TmF2Ml0gPSB1c2VTdGF0ZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWltYWdlLW9uZVwiPlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNwYW49ezI0fVxyXG4gICAgICAgICAgICB4cz17eyBvcmRlcjogMiB9fVxyXG4gICAgICAgICAgICBzbT17eyBzcGFuOiA0LCBvcmRlcjogMSB9fVxyXG4gICAgICAgICAgICBtZD17eyBzcGFuOiAyNCwgb3JkZXI6IDIgfX1cclxuICAgICAgICAgICAgbGc9e3sgc3BhbjogNiwgb3JkZXI6IDEgfX1cclxuICAgICAgICAgICAgeGw9ezR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2Utb25lLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I9e25hdjF9XHJcbiAgICAgICAgICAgICAgICByZWY9eyhjKSA9PiBzZXROYXYyKGMpfVxyXG4gICAgICAgICAgICAgICAgey4uLnNsaWRlcjJTZXR0aW5nc31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VEYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc3Bhbj17MjR9XHJcbiAgICAgICAgICAgIHhzPXt7IG9yZGVyOiAxIH19XHJcbiAgICAgICAgICAgIHNtPXt7IHNwYW46IDIwLCBvcmRlcjogMiB9fVxyXG4gICAgICAgICAgICBtZD17eyBzcGFuOiAyNCwgb3JkZXI6IDEgfX1cclxuICAgICAgICAgICAgbGc9e3sgc3BhbjogMTgsIG9yZGVyOiAyIH19XHJcbiAgICAgICAgICAgIHhsPXsyMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZS1vbmUtYmlnXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I9e25hdjJ9XHJcbiAgICAgICAgICAgICAgICByZWY9eyhjKSA9PiBzZXROYXYxKGMpfVxyXG4gICAgICAgICAgICAgICAgey4uLnNsaWRlcjFTZXR0aW5nc31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VEYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Wm9vbUltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVPbk1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsSW1hZ2VPbmUpO1xyXG4iLCJpbXBvcnQgeyBUYWJzIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbFJldmlld0l0ZW0gZnJvbSBcIi4uL2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxSZXZpZXdJdGVtXCI7XHJcblxyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsVGFiT25lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYi1vbmVcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIGNlbnRlcmVkPlxyXG4gICAgICAgICAgPFRhYlBhbmUgdGFiPVwiRGVzY3JpcHRpb25cIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiLWl0ZW0gLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFiLWRlcy0tYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgTmFtIHRlbXB1cyB0dXJwaXMgYXQgbWV0dXMgc2NlbGVyaXNxdWUgcGxhY2VyYXQgbnVsbGEgZGV1bWFudG9zXHJcbiAgICAgICAgICAgICAgICBzb2xpY2l0dWQgZmVsaXMuIFBlbGxlbnRlc3F1ZSBkaWFtIGRvbG9yLCBlbGVtZW50dW0gZXRvc1xyXG4gICAgICAgICAgICAgICAgbG9ib3J0aXMgZGVzIG1vbGxpcyB1dCByaXN1cy4gU2VkY3VzIGZhdWNpYnVzIGFuIHN1bGxhbWNvcnBlclxyXG4gICAgICAgICAgICAgICAgbWF0dGlzIGRyb3N0aXF1ZSBkZXMgY29tbW9kbyBwaGFyZXRyYXMgbG9yZW1vcy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRhYi10aXRsZVwiPlByb2R1Y3RzIEluZm9tYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhYi1kZXNcIj5cclxuICAgICAgICAgICAgICAgIEEgUG9ja2V0IFBDIGlzIGEgaGFuZGhlbGQgY29tcHV0ZXIsIHdoaWNoIGZlYXR1cmVzIG1hbnkgb2YgdGhlXHJcbiAgICAgICAgICAgICAgICBzYW1lIGNhcGFiaWxpdGllcyBhcyBhIG1vZGVybiBQQy4gVGhlc2UgaGFuZHkgbGl0dGxlIGRldmljZXNcclxuICAgICAgICAgICAgICAgIGFsbG93IGluZGl2aWR1YWxzIHRvIHJldHJpZXZlIGFuZCBzdG9yZSBlLW1haWwgbWVzc2FnZXMsIGNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgYSBjb250YWN0IGZpbGUsIGNvb3JkaW5hdGUgYXBwb2ludG1lbnRzLCBzdXJmIHRoZSBpbnRlcm5ldCxcclxuICAgICAgICAgICAgICAgIGV4Y2hhbmdlIHRleHQgbWVzc2FnZXMgYW5kIG1vcmUuIEV2ZXJ5IHByb2R1Y3QgdGhhdCBpcyBsYWJlbGVkXHJcbiAgICAgICAgICAgICAgICBhcyBhIFBvY2tldCBQQyBtdXN0IGJlIGFjY29tcGFuaWVkIHdpdGggc3BlY2lmaWMgc29mdHdhcmUgdG9cclxuICAgICAgICAgICAgICAgIG9wZXJhdGUgdGhlIHVuaXQgYW5kIG11c3QgZmVhdHVyZSBhIHRvdWNoc2NyZWVuIGFuZCB0b3VjaHBhZC4gQXNcclxuICAgICAgICAgICAgICAgIGlzIHRoZSBjYXNlIHdpdGggYW55IG5ldyB0ZWNobm9sb2d5IHByb2R1Y3QsIHRoZSBjb3N0IG9mIGFcclxuICAgICAgICAgICAgICAgIFBvY2tldCBQQyB3YXMgc3Vic3RhbnRpYWwgZHVyaW5nIGl04oCZcyBlYXJseSByZWxlYXNlLiBGb3JcclxuICAgICAgICAgICAgICAgIGFwcHJveGltYXRlbHkgJDcwMC4wMCwgY29uc3VtZXJzIGNvdWxkIHB1cmNoYXNlIG9uZSBvZlxyXG4gICAgICAgICAgICAgICAgdG9wLW9mLXRoZS1saW5lIFBvY2tldCBQQ3MgaW4gMjAwMy4gVGhlc2UgZGF5cywgY3VzdG9tZXJzIGFyZVxyXG4gICAgICAgICAgICAgICAgZmluZGluZyB0aGF0IHByaWNlcyBoYXZlIGJlY29tZSBtdWNoIG1vcmUgcmVhc29uYWJsZSBub3cgdGhhdFxyXG4gICAgICAgICAgICAgICAgdGhlIG5ld25lc3MgaXMgd2VhcmluZyBvZmYuIEZvciBhcHByb3hpbWF0ZWx5ICQzNTAuMDAsIGEgbmV3XHJcbiAgICAgICAgICAgICAgICBQb2NrZXQgUEMgY2FuIG5vdyBiZSBwdXJjaGFzZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0YWItdGl0bGVcIj5NYXRlcmlhbCB1c2VkPC9oNT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWItZGVzXCI+XHJcbiAgICAgICAgICAgICAgICBQb2x5ZXN0ZXIgaXMgZGVlbWVkIGxvd2VyIHF1YWxpdHkgZHVlIHRvIGl0cyBub25lIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIHF1YWxpdHnigJlzLiBNYWRlIGZyb20gc3ludGhldGljIG1hdGVyaWFscywgbm90IG5hdHVyYWwgbGlrZSB3b29sLlxyXG4gICAgICAgICAgICAgICAgUG9seWVzdGVyIHN1aXRzIGJlY29tZSBjcmVhc2VkIGVhc2lseSBhbmQgYXJlIGtub3duIGZvciBub3RcclxuICAgICAgICAgICAgICAgIGJlaW5nIGJyZWF0aGFibGUuIFBvbHllc3RlciBzdWl0cyB0ZW5kIHRvIGhhdmUgYSBzaGluZSB0byB0aGVtXHJcbiAgICAgICAgICAgICAgICBjb21wYXJlZCB0byB3b29sIGFuZCBjb3R0b24gc3VpdHMsIHRoaXMgY2FuIG1ha2UgdGhlIHN1aXQgbG9va1xyXG4gICAgICAgICAgICAgICAgY2hlYXAuIFRoZSB0ZXh0dXJlIG9mIHZlbHZldCBpcyBsdXh1cmlvdXMgYW5kIGJyZWF0aGFibGUuIFZlbHZldFxyXG4gICAgICAgICAgICAgICAgaXMgYSBncmVhdCBjaG9pY2UgZm9yIGRpbm5lciBwYXJ0eSBqYWNrZXQgYW5kIGNhbiBiZSB3b3JuIGFsbFxyXG4gICAgICAgICAgICAgICAgeWVhciByb3VuZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQ3VzdG9tZXIgUmV2aWV3cyg1KVwiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWItaXRlbSAtcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxSZXZpZXdJdGVtIC8+XHJcbiAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxSZXZpZXdJdGVtIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQWRkaXRpb25hbCBpbmZvcm1hdGlvblwiIGtleT1cIjNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWItaXRlbSAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPk91dGVyIFNoZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPjEwMCUgcG9seWVzdGVyPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5MaW5pbmc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+MTAwJSBwb2x5dXJldGhhbmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlNpemU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+UywgTSwgTCwgWEw8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPkNvbG9yczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5HcmV5LCBSZWQsIEJsdWUsIEJsYWNrPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5DYXJlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL3Nob3Avc2hvcC1kZXRhaWwvY2FyZS1pY29ucy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FyZSBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBEcmF3ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQ2xpZW50T25seVBvcnRhbCBmcm9tIFwiLi4vLi4vY29tbW9uL0NsaWVudE9ubHlQb3J0YWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnBhZ2VzU2lkZWJhcigpIHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUoIXZpc2libGUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDbGllbnRPbmx5UG9ydGFsIHNlbGVjdG9yPVwiI3N1YnBhZ2VzLXNpZGViYXJcIj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIGZvcmNlUmVuZGVyPXt0cnVlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN1YnBhZ2VzLXNpZGViYXItbWFpblwiXHJcbiAgICAgICAgd2lkdGg9ezQ0NX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c2hvd0RyYXdlcn0gY2xhc3NOYW1lPVwic3VicGFnZXMtc2lkZWJhci1vcGVuZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2cgZmEtc3BpblwiIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgPHNwYW4+NDwvc3Bhbj5cclxuICAgICAgICAgIERlbW9cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwPllvdSBjYW4gZWFzaWx5IGNvbWJpbmUgdmFyaW91cyBmZWF0dXJlcyBmcm9tIGRpZmZlcmVudCBkZW1vcy48L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJwYWdlcy1ob21lcGFnZXMtZ3JvdXBcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL3N1YnBhZ2VzL2hvbWUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJIb21lcGFnZSAwMVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ib21lcGFnZSAwMTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hvbWVwYWdlMlwifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvc3VicGFnZXMvaG9tZTIucG5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIkhvbWVwYWdlIDAyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkhvbWVwYWdlIDAyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaG9tZXBhZ2UzXCJ9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9zdWJwYWdlcy9ob21lMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiSG9tZXBhZ2UgMDNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SG9tZXBhZ2UgMDM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ob21lcGFnZTRcIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL3N1YnBhZ2VzL2hvbWU0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJIb21lcGFnZSAwNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ib21lcGFnZSAwNDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvQ2xpZW50T25seVBvcnRhbD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IFdpc2hsaXN0U2lkZWJhckl0ZW0gZnJvbSBcIi4vV2lzaGxpc3RTaWRlYmFySXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gV2lzaGxpc3RTaWRlYmFyKCkge1xyXG4gIGNvbnN0IHdpc2hsaXN0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XHJcbiAgcmV0dXJuIHdpc2hsaXN0U3RhdGUubGVuZ3RoID09PSAwID8gKFxyXG4gICAgPEVtcHR5IGRlc2NyaXB0aW9uPVwiTm8gcHJvZHVjdHMgaW4gd2lzaGxpc3RcIiAvPlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXNpZGViYXJcIj5cclxuICAgICAge3dpc2hsaXN0U3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxXaXNobGlzdFNpZGViYXJJdGVtIGtleT17aW5kZXh9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhXaXNobGlzdFNpZGViYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNb2RhbCwgbWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCxcclxuICBjaGVja1Byb2R1Y3RJbkNhcnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRnJvbVdpc2hsaXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBXaXNobGlzdFNpZGViYXJJdGVtKHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkKGNhcnRTdGF0ZSwgZGF0YSk7XHJcbiAgY29uc3QgcHJvZHVjdEluQ2FydCA9IGNoZWNrUHJvZHVjdEluQ2FydChjYXJ0U3RhdGUsIGRhdGEuaWQpO1xyXG4gIGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICB9O1xyXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPayA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChyZW1vdmVGcm9tV2lzaGxpc3QoZGF0YS5pZCkpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IChlKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQWRkVG9DYXJ0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGF2YWlhYmxlUXVhbnRpdHkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGRhdGEpKTtcclxuICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC1zaWRlYmFyLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXNpZGViYXItaXRlbV9faW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1iSW1hZ2VbMF19IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3Qtc2lkZWJhci1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQsIGxvY2FsZXMsIGN1cnJlbmN5KVxyXG4gICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIHtkYXRhLnF1YW50aXR5IDwgMSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zb2xkLW1vYmlsZVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9jbG9zZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc29sZFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgU29sZCBvdXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQWRkVG9DYXJ0fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3RJbkNhcnR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYXRjLW1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9iYWdfYWx0XCIgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFkZFRvQ2FydH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9kdWN0SW5DYXJ0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWF0Y1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RJbkNhcnQgPyBcIkFkZGVkIHRvIGNhcnRcIiA6IFwiQWRkIHRvIENhcnRcIn1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3Qtc2lkZWJhci1pdGVtX19jbG9zZVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3R9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2Nsb3NlXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ29maXJtIHRoaXMgYWN0aW9uXCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgID5cclxuICAgICAgICA8cD5BcmUgeW91ciBzdXJlIHRvIHJlbW92ZSBwcm9kdWN0IGZyb20gd2lzaGxpc3QgPzwvcD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oV2lzaGxpc3RTaWRlYmFySXRlbSk7XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IExheW91dE9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL0xheW91dE9uZVwiO1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RzQnlTbHVnIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuLi8uLi9kYXRhL3Byb2R1Y3QuanNvblwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbE9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0RGV0YWlsL1Byb2R1Y3REZXRhaWxPbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBmb3VuZFByb2R1Y3QgPSBnZXRQcm9kdWN0c0J5U2x1Zyhwcm9kdWN0RGF0YSwgc2x1Zyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRPbmVcclxuICAgICAgdGl0bGU9e2ZvdW5kUHJvZHVjdCAmJiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZm91bmRQcm9kdWN0Lm5hbWUpfVxyXG4gICAgICBjbGVhclNwYWNlVG9wXHJcbiAgICA+XHJcbiAgICAgIHtmb3VuZFByb2R1Y3QgJiYgPFByb2R1Y3REZXRhaWxPbmUgZGF0YT17Zm91bmRQcm9kdWN0fSAvPn1cclxuICAgIDwvTGF5b3V0T25lPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5LCBjb2xvciwgc2l6ZSkgPT4gKHtcclxuICB0eXBlOiBDQVJULkFERF9UT19DQVJULFxyXG4gIHByb2R1Y3QsXHJcbiAgcXVhbnRpdHksXHJcbiAgY29sb3IsXHJcbiAgc2l6ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0ZST01fQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbEZyb21DYXJ0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBDQVJULlJFTU9WRV9BTExfRlJPTV9DQVJULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5ERUNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBHTE9CQUwgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbExhbmd1YWdlID0gKGxhbmcpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9MQU5HVUFHRSxcclxuICBsYW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDdXJyZW5jeSA9IChjdXIpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9DVVJSRU5DWSxcclxuICBjdXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiAoe1xyXG4gIHR5cGU6IEdMT0JBTC5TRVRfQ0FURUdPUlksXHJcbiAgY2F0ZWdvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbFNlYXJjaCA9IChrZXl3b3JkKSA9PiAoe1xyXG4gIHR5cGU6IEdMT0JBTC5TRVRfU0VBUkNILFxyXG4gIGtleXdvcmQsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2RlZmluZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTb3J0ID0gKHNvcnRUeXBlKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NPUlQsXHJcbiAgc29ydFR5cGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFN1YkNhdGVnb3J5ID0gKHN1YkNhdGVnb3J5KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NVQkNBVEVHT1JZLFxyXG4gIHN1YkNhdGVnb3J5LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvV2lzaGxpc3QgPSAocHJvZHVjdCkgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5BRERfVE9fV0lTSExJU1QsXHJcbiAgcHJvZHVjdCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbVdpc2hsaXN0ID0gKHByb2R1Y3RJZCkgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5SRU1PVkVfRlJPTV9XSVNITElTVCxcclxuICBwcm9kdWN0SWQsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgR0xPQkFMID0ge1xyXG4gIFNFVF9MQU5HVUFHRTogXCJTRVRfTEFOR1VBR0VcIixcclxuICBTRVRfQ1VSUkVOQ1k6IFwiU0VUX0NVUlJFTkNZXCIsXHJcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxyXG4gIFNFVF9TRUFSQ0g6IFwiU0VUX1NFQVJDSFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XHJcbiAgQUREX1RPX0NBUlQ6IFwiQUREX1RPX0NBUlRcIixcclxuICBSRU1PVkVfRlJPTV9DQVJUOiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICBSRU1PVkVfQUxMX0ZST01fQ0FSVDogXCJSRU1PVkVfQUxMX0ZST01fQ0FSVFwiLFxyXG4gIERFQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiREVDUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG4gIElOQ1JFQVNFX1FVQU5USVRZX0NBUlQ6IFwiSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEFERF9UT19XSVNITElTVDogXCJBRERfVE9fV0lTSExJU1RcIixcclxuICBSRU1PVkVfRlJPTV9XSVNITElTVDogXCJSRU1PVkVfRlJPTV9XSVNITElTVFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1AgPSB7XHJcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcclxuICBTRVRfU1VCQ0FURUdPUlk6IFwiU0VUX1NVQkNBVEVHT1JZXCIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9