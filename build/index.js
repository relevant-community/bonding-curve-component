(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(41);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(43);
var toPrimitive = __webpack_require__(36);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(44);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(64);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(61);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.params = undefined;

var _keys = __webpack_require__(63);

var _keys2 = _interopRequireDefault(_keys);

exports.getAccountBalance = getAccountBalance;
exports.formatParam = formatParam;
exports.getValue = getValue;
exports.initParams = initParams;
exports.getAll = getAll;
exports.getNetwork = getNetwork;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(53);

var defaultConvert = {
  convert: true,
  decimals: 'decimals'
};

var params = exports.params = {
  totalSupply: defaultConvert,
  decimals: { convert: false },
  poolBalance: defaultConvert,
  reserveRatio: { convert: true, decimals: 6 },
  inflationSupply: defaultConvert,
  symbol: { convert: false }
};

function getAccountBalance(accountBalances, account) {
  if (!account) return 0;
  try {
    var balance = accountBalances[account];
    if (!balance) return null;
    return parseFloat(utils.fromWei(balance), 10);
  } catch (err) {
    return 0;
  }
}

function formatParam(contract, value, param) {
  // if (!value) return null;
  var p = params[param] || defaultConvert;
  if (p.convert && p.decimals === 'decimals') {
    var decimals = getValue(contract, 'decimals');
    value /= Math.pow(10, decimals);
  } else if (p.convert && p.decimals) {
    value /= Math.pow(10, p.decimals);
  }
  if (p.string) value.soString();
  return value;
}

function getValue(contract, method, args) {
  if (!contract || !contract.initialized) return null;
  var result = void 0;
  if (args) {
    result = contract.methods[method].cacheCall(args);
  } else {
    result = contract.methods[method].cacheCall();
  }
  return formatParam(contract, result, method);
}

function initParams(contract) {
  if (!contract || !contract.initialized) return {};
  (0, _keys2.default)(params).forEach(function (param) {
    getValue(contract, param);
  });
}

function getAll(contract) {
  if (!contract || !contract.initialized) return {};
  var result = {};
  (0, _keys2.default)(params).forEach(function (param) {
    result[param] = getValue(contract, param);
  });
  return result;
}

function getNetwork(web3) {
  if (!web3) return null;
  var network = web3.networkId;
  switch (network) {
    case 1:
      return 'main';
    case 2:
      return 'morden';
    case 3:
      return 'ropsten';
    case 4:
      return 'rinkeby';
    case 42:
      return 'kovan';
    default:
      return 'unknown';
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(60);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(85);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(79).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(38);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(66);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(65);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(75);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(40);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(51);
var hide = __webpack_require__(7);
var has = __webpack_require__(4);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(81);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(48);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(20);
var createDesc = __webpack_require__(21);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(36);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(43);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(49);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(22);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(77)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-flexible-switch");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(15);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(14);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _reactFlexibleSwitch = __webpack_require__(52);

var _reactFlexibleSwitch2 = _interopRequireDefault(_reactFlexibleSwitch);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BondedTokenAdvanced = function (_React$Component) {
  (0, _inherits3.default)(BondedTokenAdvanced, _React$Component);

  function BondedTokenAdvanced(props) {
    (0, _classCallCheck3.default)(this, BondedTokenAdvanced);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BondedTokenAdvanced.__proto__ || (0, _getPrototypeOf2.default)(BondedTokenAdvanced)).call(this, props));

    _this.state = {
      advanced: false
    };
    _this.toggleAdvanced = _this.toggleAdvanced.bind(_this);
    _this.bigMax = 1000000;
    return _this;
  }

  (0, _createClass3.default)(BondedTokenAdvanced, [{
    key: 'toggleAdvanced',
    value: function toggleAdvanced() {
      this.setState({
        advanced: !this.state.advanced
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _onChange = this.context.contractActions.onChange;
      var _context$contractPara = this.context.contractParams,
          poolBalance = _context$contractPara.poolBalance,
          totalSupply = _context$contractPara.totalSupply,
          reserveRatio = _context$contractPara.reserveRatio,
          address = _context$contractPara.address;
      var bigMax = this.bigMax;


      return _react2.default.createElement(
        'div',
        { className: ' --BondedTokenAdvanced' },
        _react2.default.createElement(
          'div',
          { className: ' --bondedToken-flex-center' },
          _react2.default.createElement(_reactFlexibleSwitch2.default, {
            switchStyles: { width: 110, color: 'grey' },
            value: this.state.advanced,
            circleStyles: { diameter: 16, onColor: 'grey', offColor: 'lightgrey' },
            labels: { on: 'Advanced', off: 'Advanced' },
            onChange: this.toggleAdvanced })
        ),
        this.state.advanced && _react2.default.createElement(
          'div',
          { className: ' --BondedTokenAdvanced-open' },
          _react2.default.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            _react2.default.createElement(
              'div',
              null,
              'Token Address'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                { className: '' },
                _react2.default.createElement('input', {
                  type: 'text',
                  value: address,
                  onChange: function onChange(event) {
                    return _onChange(event, 'address');
                  } })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            _react2.default.createElement(
              'div',
              null,
              'Pool Balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                { className: '--bondedToken-eth' },
                _react2.default.createElement('input', {
                  readOnly: !!address,
                  type: 'number',
                  value: poolBalance.toFixed(2),
                  max: bigMax,
                  onChange: function onChange(event) {
                    return _onChange(event, 'poolBalance');
                  } })
              ),
              !address && _react2.default.createElement('input', {
                type: 'range',
                value: poolBalance.toFixed(2),
                max: bigMax,
                onChange: function onChange(event) {
                  return _onChange(event, 'poolBalance');
                } })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            _react2.default.createElement(
              'div',
              null,
              'Ratio'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                { className: '--bondedToken-ratio' },
                _react2.default.createElement('input', {
                  readOnly: !!address,
                  type: 'number',
                  step: '0.01',
                  max: '1',
                  min: '0',
                  value: reserveRatio.toFixed(2),
                  onChange: function onChange(event) {
                    return _onChange(event, 'reserveRatio');
                  } })
              ),
              !address && _react2.default.createElement('input', {
                type: 'range',
                value: reserveRatio.toFixed(2),
                max: '1',
                step: '0.01',
                onChange: function onChange(event) {
                  return _onChange(event, 'reserveRatio');
                } })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            _react2.default.createElement(
              'div',
              null,
              'Total Supply'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                { className: '--bondedToken-token' },
                _react2.default.createElement('input', {
                  readOnly: !!address,
                  type: 'number',
                  value: totalSupply.toFixed(2),
                  max: bigMax,
                  onChange: function onChange(event) {
                    return _onChange(event, 'totalSupply');
                  } })
              ),
              !address && _react2.default.createElement('input', {
                type: 'range',
                value: totalSupply.toFixed(2),
                max: bigMax,
                onChange: function onChange(event) {
                  return _onChange(event, 'totalSupply');
                } })
            )
          ),
          this.props.children
        )
      );
    }
  }]);
  return BondedTokenAdvanced;
}(_react2.default.Component);

BondedTokenAdvanced.contextTypes = {
  contractParams: _propTypes2.default.object,
  contractActions: _propTypes2.default.object
};


BondedTokenAdvanced.propTypes = {
  totalSupply: _propTypes2.default.number,
  reserveRatio: _propTypes2.default.number,
  poolBalance: _propTypes2.default.number,
  bigMax: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  address: _propTypes2.default.string,
  children: _propTypes2.default.element
};

exports.default = BondedTokenAdvanced;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(15);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(14);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _relevantCoinHelper = __webpack_require__(24);

var contractHelper = _interopRequireWildcard(_relevantCoinHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ethPrice = __webpack_require__(105);
var utils = __webpack_require__(53);

var BondedTokenContainer = function (_React$Component) {
  (0, _inherits3.default)(BondedTokenContainer, _React$Component);

  function BondedTokenContainer(props) {
    (0, _classCallCheck3.default)(this, BondedTokenContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BondedTokenContainer.__proto__ || (0, _getPrototypeOf2.default)(BondedTokenContainer)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.calculateSaleReturn = _this.calculateSaleReturn.bind(_this);
    _this.calculatePurchaseReturn = _this.calculatePurchaseReturn.bind(_this);
    _this.calculateBuyPrice = _this.calculateBuyPrice.bind(_this);
    _this.getChildContext = _this.getChildContext.bind(_this);
    _this.initState = _this.initState.bind(_this);
    _this.getContractParams = _this.getContractParams.bind(_this);

    _this.state = {
      address: '',
      loading: false,
      account: null,

      walletBalance: 0,
      tokenBalance: 0,
      poolBalance: 4000000,
      totalSupply: 1000000,
      reserveRatio: 0.2,
      decimals: 18
    };
    _this.transaction = {};
    _this.ETHUSD = 0;
    return _this;
  }

  // you must specify what you’re adding to the context


  (0, _createClass3.default)(BondedTokenContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return (0, _extends3.default)({}, this.contractParams);
    }
  }, {
    key: 'getContractParams',
    value: function getContractParams(props, nextState) {
      var state = props.drizzleStatus.initialized ? contractHelper.getAll(props.RelevantCoin) : this.state;
      var poolBalance = state.poolBalance,
          totalSupply = state.totalSupply,
          reserveRatio = state.reserveRatio,
          decimals = state.decimals,
          symbol = state.symbol;


      var walletBalance = contractHelper.getAccountBalance(props.accountBalances, this.account) || this.state.walletBalance;

      var tokenBalance = this.account ? contractHelper.getValue(props.RelevantCoin, 'balanceOf', this.account) : 0;

      var priceEth = this.calculatePrice(totalSupply, poolBalance, reserveRatio);

      var priceDollar = (priceEth * this.ETHUSD).toFixed(2);
      priceEth = priceEth.toFixed(2);

      var contractParams = {
        tokenBalance: tokenBalance,
        poolBalance: poolBalance,
        totalSupply: totalSupply,
        reserveRatio: reserveRatio,
        decimals: decimals,
        symbol: symbol,
        RelevantCoin: props.RelevantCoin,
        address: nextState.address,
        priceEth: priceEth,
        priceDollar: priceDollar
      };

      var accountInfo = {
        account: props.accounts[0],
        walletBalance: walletBalance
      };

      var contractActions = {
        calculatePurchaseReturn: this.calculatePurchaseReturn,
        calculateSaleReturn: this.calculateSaleReturn,
        calculateBuyPrice: this.calculateBuyPrice,
        onChange: this.onChange
      };

      var bondingCurveState = {
        loading: this.transaction.status === 'pending',
        transaction: this.transaction,
        web3State: props.drizzle.web3,
        drizzleStatus: props.drizzleStatus
      };

      this.contractParams = {
        contractParams: contractParams,
        contractActions: contractActions,
        accountInfo: accountInfo,
        bondingCurveState: bondingCurveState
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getContractParams(this.props, this.state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      ethPrice('usd').then(function (ETHUSD) {
        ETHUSD = ETHUSD[0].replace('USD: ', '');
        _this2.ETHUSD = parseFloat(ETHUSD);
        _this2.forceUpdate();
      }).catch(function (err) {
        return console.log(err);
      });

      if (this.props.drizzleStatus.initialized) {
        this.initState(this.props);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var account = nextProps.accounts[0] || null;
      if (!this.props.drizzleStatus.initialized && nextProps.drizzleStatus.initialized) {
        this.account = account;
        // address needs to be in state in case we edit
        // TODO come up with a better way to toggle this
        this.setState({
          address: nextProps.RelevantCoin.address
        });
        contractHelper.initParams(nextProps.RelevantCoin);
      }

      if (nextProps.drizzleStatus.initialized) this.initState(nextProps);

      this.getContractParams(nextProps, nextState);
    }
  }, {
    key: 'initState',
    value: function initState(props) {
      var account = props.accounts[0] || null;
      if (account !== this.account) this.account = account;

      if (this.state.address !== props.RelevantCoin.address) {
        this.setState({ address: props.RelevantCoin.address });
      }

      var l = props.drizzle.transactionStack.length;
      if (l) {
        var recentTransaction = props.drizzle.transactionStack[l - 1];
        var latestStatus = props.drizzle.transactions[recentTransaction].status;
        if (latestStatus === 'success') {
          this.transaction = {};
        } else {
          this.transaction = {
            status: latestStatus,
            tx: recentTransaction
          };
        }
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event, type) {
      var value = event.target ? event.target.value : null;
      value = parseFloat(value, 10);
      if (type === 'address') {
        if (event.target.value && !utils.isAddress(event.target.value)) {
          return;
        } else if (event.target.value) {
          // TODO update contract
          // contractUtils.updateContractAddress(event.target.value);
        }
      }
      if (type === 'totalSupply') {
        value = Math.max(1000, event.target.value);
      }
      if (this.transaction.status === 'pending') return;
      var state = {};
      state[type] = event.target ? value : event;
      this.setState(state);
    }
  }, {
    key: 'calculatePrice',
    value: function calculatePrice(totalSupply, poolBalance, reserveRatio) {
      return poolBalance / (totalSupply * reserveRatio);
    }

    /* calculateSaleReturn
      Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
    */

  }, {
    key: 'calculateSaleReturn',
    value: function calculateSaleReturn(props) {
      var state = this.contractParams.contractParams || this.state;

      var _state$props = (0, _extends3.default)({}, state, props),
          totalSupply = _state$props.totalSupply,
          poolBalance = _state$props.poolBalance,
          reserveRatio = _state$props.reserveRatio,
          amount = _state$props.amount;

      if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';

      if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
      if (amount === totalSupply) return poolBalance;
      if (reserveRatio === 1) return poolBalance;

      // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
      var result = poolBalance * (1 - Math.pow(1 - amount / totalSupply, 1 / reserveRatio));
      return Math.round(result * 10000) / 10000;
    }
  }, {
    key: 'calculateBuyPrice',
    value: function calculateBuyPrice(props) {
      var state = this.contractParams.contractParams || this.state;

      var _state$props2 = (0, _extends3.default)({}, state, props),
          totalSupply = _state$props2.totalSupply,
          poolBalance = _state$props2.poolBalance,
          reserveRatio = _state$props2.reserveRatio,
          amount = _state$props2.amount;

      if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
      if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
      var foo = poolBalance * (Math.pow(1 + amount / totalSupply, 1 / reserveRatio) - 1);
      return Math.round(foo * 10000) / 10000;
    }

    // calculatePurchaseReturn
    // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)

  }, {
    key: 'calculatePurchaseReturn',
    value: function calculatePurchaseReturn(props) {
      var state = this.contractParams.contractParams || this.state;

      var _state$props3 = (0, _extends3.default)({}, state, props),
          totalSupply = _state$props3.totalSupply,
          poolBalance = _state$props3.poolBalance,
          reserveRatio = _state$props3.reserveRatio,
          amount = _state$props3.amount;

      if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
      // special case if the weight = 100%
      if (reserveRatio === 1) {
        return totalSupply * (amount / poolBalance);
      }

      // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
      var foo = totalSupply * (Math.pow(1 + amount / poolBalance, reserveRatio) - 1);
      return Math.round(foo * 10000) / 10000;
    }
  }, {
    key: 'render',
    value: function render() {
      var color = this.props.themeColor || 'grey';
      return _react2.default.createElement(
        'div',
        {
          className: '--bondedToken',
          style: { borderColor: color }
        },
        this.props.children
      );
    }
  }]);
  return BondedTokenContainer;
}(_react2.default.Component);

BondedTokenContainer.childContextTypes = {
  contractParams: _propTypes2.default.object,
  accountInfo: _propTypes2.default.object,
  contractActions: _propTypes2.default.object,
  bondingCurveState: _propTypes2.default.object
};
exports.default = BondedTokenContainer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(15);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(14);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _relevantCoinHelper = __webpack_require__(24);

var relevantCoinHelper = _interopRequireWildcard(_relevantCoinHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BondedTokenHeader = function (_React$Component) {
  (0, _inherits3.default)(BondedTokenHeader, _React$Component);

  function BondedTokenHeader() {
    (0, _classCallCheck3.default)(this, BondedTokenHeader);
    return (0, _possibleConstructorReturn3.default)(this, (BondedTokenHeader.__proto__ || (0, _getPrototypeOf2.default)(BondedTokenHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(BondedTokenHeader, [{
    key: 'render',
    value: function render() {
      var _context$accountInfo = this.context.accountInfo,
          walletBalance = _context$accountInfo.walletBalance,
          account = _context$accountInfo.account;
      var _context$bondingCurve = this.context.bondingCurveState,
          transaction = _context$bondingCurve.transaction,
          web3State = _context$bondingCurve.web3State;
      var _context$contractPara = this.context.contractParams,
          tokenBalance = _context$contractPara.tokenBalance,
          symbol = _context$contractPara.symbol;

      var network = relevantCoinHelper.getNetwork(web3State);
      network = network === 'main' ? '' : network + '.';
      var props = this.props;

      var title = props.title || 'Bonded Token';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: '--bondedTokenHeader',
            style: { background: props.accentColor }
          },
          _react2.default.createElement(
            'h3',
            { style: { textAlign: 'center' } },
            title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '--bondedTokenHeaderBody' },
          _react2.default.createElement(
            'div',
            { className: '--bondedTokenAddress' },
            transaction.status && transaction.status === 'pending' ? _react2.default.createElement(
              'div',
              {
                style: {
                  // maxWidth: '75%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }
              },
              'pending tx:',
              ' ',
              _react2.default.createElement(
                'a',
                {
                  target: '_blank',

                  href: 'https://' + network + 'etherscan.io/tx/' + transaction.tx },
                transaction.tx
              )
            ) : null,
            'address: ',
            _react2.default.createElement(
              'a',
              {
                target: '_blank',
                href: 'https://' + network + 'etherscan.io/address/' + account
              },
              account
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '--bondedToken-flex' },
            _react2.default.createElement(
              'div',
              {
                className: '--bondedToken-pointer'
              },
              walletBalance.toFixed(2),
              ' ETH'
            ),
            _react2.default.createElement(
              'div',
              {
                className: '--bondedToken-pointer'
              },
              tokenBalance ? tokenBalance.toFixed(2) : tokenBalance,
              ' ',
              symbol
            )
          )
        )
      );
    }
  }]);
  return BondedTokenHeader;
}(_react2.default.Component);

BondedTokenHeader.contextTypes = {
  accountInfo: _propTypes2.default.object,
  contractParams: _propTypes2.default.object,
  bondingCurveState: _propTypes2.default.object
};
exports.default = BondedTokenHeader;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(15);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(14);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _reactFlexibleSwitch = __webpack_require__(52);

var _reactFlexibleSwitch2 = _interopRequireDefault(_reactFlexibleSwitch);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bignumber = __webpack_require__(104);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _web = __webpack_require__(107);

var _web2 = _interopRequireDefault(_web);

var _relevantCoinHelper = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BondedTokenTransact = function (_React$Component) {
  (0, _inherits3.default)(BondedTokenTransact, _React$Component);

  function BondedTokenTransact(props) {
    (0, _classCallCheck3.default)(this, BondedTokenTransact);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BondedTokenTransact.__proto__ || (0, _getPrototypeOf2.default)(BondedTokenTransact)).call(this, props));

    _this.state = {
      isBuy: true,
      amount: 0
    };

    _this.toggleBuy = _this.toggleBuy.bind(_this);
    _this.submit = _this.submit.bind(_this);

    _this.bigMax = 1000000;
    return _this;
  }

  (0, _createClass3.default)(BondedTokenTransact, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (this.context.bondingCurveState.loading && !nextContext.bondingCurveState.loading) {
        this.setState({
          amount: 0
        });
      }
    }
  }, {
    key: 'toggleBuy',
    value: function toggleBuy() {
      var loading = this.context.bondingCurveState.loading;

      if (loading) return;
      this.setState({
        amount: 0,
        isBuy: !this.state.isBuy
      });
    }
  }, {
    key: 'submit',
    value: function submit() {
      var loading = this.context.bondingCurveState.loading;
      var account = this.context.accountInfo.account;
      var _context$contractPara = this.context.contractParams,
          decimals = _context$contractPara.decimals,
          RelevantCoin = _context$contractPara.RelevantCoin;

      if (this.state.amount <= 0 || loading) return;

      // this.setState({ loading: 'Please Review & Sign Transaction' });

      if (this.state.isBuy) {
        var amount = _web2.default.utils.toWei(this.state.amount);
        amount = new _bignumber2.default(amount, 10).toString(10);
        RelevantCoin.methods.buy.cacheSend({
          value: amount, from: account
        });
      } else {
        var _amount = new _bignumber2.default(this.state.amount).times(Math.pow(10, decimals));
        RelevantCoin.methods.sell.cacheSend(_amount, {
          from: account
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _context$contractActi = this.context.contractActions,
          calculatePurchaseReturn = _context$contractActi.calculatePurchaseReturn,
          calculateSaleReturn = _context$contractActi.calculateSaleReturn;
      var _context$bondingCurve = this.context.bondingCurveState,
          loading = _context$bondingCurve.loading,
          web3State = _context$bondingCurve.web3State;
      var _context$accountInfo = this.context.accountInfo,
          walletBalance = _context$accountInfo.walletBalance,
          account = _context$accountInfo.account;
      var _context$contractPara2 = this.context.contractParams,
          tokenBalance = _context$contractPara2.tokenBalance,
          symbol = _context$contractPara2.symbol,
          address = _context$contractPara2.address,
          priceEth = _context$contractPara2.priceEth,
          priceDollar = _context$contractPara2.priceDollar;


      var metamaskNetwork = (0, _relevantCoinHelper.getNetwork)(web3State);

      var color = this.props.accentColor || 'blue';
      var bigMax = this.bigMax;


      var button = _react2.default.createElement(
        'button',
        {
          value: 'submit',
          className: '--bondedToken-submit',
          onClick: function onClick() {
            return _this2.submit();
          } },
        'submit'
      );

      if (this.props.children) {
        button = _react2.default.cloneElement(this.props.children, (0, _extends3.default)({}, this.props.children.props, {
          onClick: function onClick() {
            return _this2.submit();
          } }));
      }

      // if (!drizzleStatus.initialized) {
      //   return (
      //     <p>
      //       Connecting to Metamask...
      //     </p>
      //   );
      // }
      console.log(this.props.network.toLowerCase());
      console.log('metamaskNetwork', metamaskNetwork);
      console.log(web3State);

      if (!account || this.props.network.toLowerCase() !== metamaskNetwork) {
        var network = this.props.network || 'main';
        var getTokens = _react2.default.createElement(
          'p',
          null,
          'You can get some free test network Ether here:',
          ' ',
          _react2.default.createElement(
            'a',
            { href: 'https://faucet.rinkeby.io/' },
            'https://faucet.rinkeby.io/'
          ),
          _react2.default.createElement('br', null),
          '(pro-tip: use your GooglePlus account)'
        );
        return _react2.default.createElement(
          'div',
          { className: '--bondedToken-not-connected' },
          _react2.default.createElement(
            'p',
            null,
            'Please enable your Metamask wallet and connect to the ',
            network,
            ' network.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Don\'t have Metamask? Download it here:',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'https://metamask.io/' },
              'https://metamask.io/'
            )
          ),
          network !== 'main' ? getTokens : null
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: '--bondedToken-flex --bondedTokenTransact' },
          _react2.default.createElement(_reactFlexibleSwitch2.default, {
            switchStyles: { width: 100 },
            value: this.state.isBuy,
            circleStyles: {
              diameter: 20,
              onColor: color,
              offColor: color,
              color: color
            },
            labels: { on: 'BUY', off: 'SELL' },
            onChange: function onChange() {
              return _this2.toggleBuy();
            }
          }),
          _react2.default.createElement(
            'div',
            { style: { fontSize: '.8rem' } },
            '1 ',
            symbol,
            ' = ',
            priceEth,
            ' ETH / $',
            priceDollar
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: '--bondedToken-flex --bondedTokenTransact'
          },
          _react2.default.createElement(
            'label',
            { className: '--bondedToken-flex', style: { borderBottomColor: color } },
            _react2.default.createElement(
              'div',
              null,
              'Spend:'
            ),
            _react2.default.createElement('input', {
              onFocus: function onFocus(e) {
                if (e.target.value === '0') _this2.setState({ amount: '' });
              },
              onBlur: function onBlur(e) {
                if (e.target.value === '') _this2.setState({ amount: 0 });
              },
              type: 'number',
              max: this.state.isBuy ? address ? walletBalance.toFixed(4) : bigMax : tokenBalance.toFixed(4),
              value: this.state.amount,
              onChange: function onChange(event) {
                if (loading) return;
                if (event.target.value * 1 > event.target.max) {
                  event.target.value = event.target.max;
                } else if (!event.target.value || event.target.value * 1 < 0) {
                  event.target.value = '';
                }
                _this2.setState({ amount: event.target.value });
              }
            }),
            this.state.isBuy ? 'ETH' : symbol
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '--bondedToken-flex --bondedTokenTransact' },
          _react2.default.createElement(
            'div',
            null,
            'Recieve:'
          ),
          _react2.default.createElement(
            'div',
            null,
            this.state.isBuy ? calculatePurchaseReturn({ amount: this.state.amount }) : calculateSaleReturn({ amount: this.state.amount }),
            ' ',
            !this.state.isBuy ? 'ETH' : symbol
          )
        ),
        address && _react2.default.createElement(
          'div',
          { className: '--bondedToken-submit-container' },
          button
        )
      );
    }
  }]);
  return BondedTokenTransact;
}(_react2.default.Component);

BondedTokenTransact.contextTypes = {
  contractParams: _propTypes2.default.object,
  accountInfo: _propTypes2.default.object,
  contractActions: _propTypes2.default.object,
  bondingCurveState: _propTypes2.default.object
};
exports.default = BondedTokenTransact;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(15);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(14);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recharts = __webpack_require__(106);

var Area = Recharts.Area,
    XAxis = Recharts.XAxis,
    YAxis = Recharts.YAxis,
    CartesianGrid = Recharts.CartesianGrid,
    Tooltip = Recharts.Tooltip,
    ReferenceDot = Recharts.ReferenceDot,
    ComposedChart = Recharts.ComposedChart;

var CurveChart = function (_React$Component) {
  (0, _inherits3.default)(CurveChart, _React$Component);

  function CurveChart(props) {
    (0, _classCallCheck3.default)(this, CurveChart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CurveChart.__proto__ || (0, _getPrototypeOf2.default)(CurveChart)).call(this, props));

    _this.getChartData = _this.getChartData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CurveChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.documentReady = true;
      this.forceUpdate();
    }
  }, {
    key: 'getChartData',
    value: function getChartData() {
      var _context$contractActi = this.context.contractActions,
          calculateSaleReturn = _context$contractActi.calculateSaleReturn,
          calculateBuyPrice = _context$contractActi.calculateBuyPrice;
      var _context$contractPara = this.context.contractParams,
          totalSupply = _context$contractPara.totalSupply,
          reserveRatio = _context$contractPara.reserveRatio,
          poolBalance = _context$contractPara.poolBalance;

      var props = this.context.contractParams;

      var data = [];
      var step = Math.round(totalSupply / 100);
      var price = poolBalance / (reserveRatio * totalSupply);
      var currentPrice = { supply: totalSupply, value: price };

      for (var i = step; i < totalSupply * 1.5; i += step) {
        if (i < totalSupply) {
          var eth = 1 * calculateSaleReturn((0, _extends3.default)({}, props, { amount: totalSupply - i }));
          price = (parseFloat(poolBalance, 10) - eth) / (reserveRatio * i);
          data.push({ supply: i, sell: price, value: price });
        } else if (i > totalSupply) {
          var _eth = 1 * calculateBuyPrice((0, _extends3.default)({}, props, { amount: i - totalSupply }));
          price = (_eth + parseFloat(poolBalance, 10)) / (reserveRatio * i);
          data.push({ supply: 1 * i, buy: price, value: 1 * price });
        }
      }
      return { data: data, currentPrice: currentPrice };
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.documentReady) return null;

      var _getChartData = this.getChartData(),
          data = _getChartData.data,
          currentPrice = _getChartData.currentPrice;

      var width = Math.min(600, (window.innerWidth < 480 ? window.innerWidth : 480) - 30);
      var height = width * 2 / 3;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          ComposedChart,
          {
            style: { margin: 'auto' },
            width: width,
            height: height,
            data: data,
            margin: { top: 10, right: 30, left: 0, bottom: 0 }
          },
          _react2.default.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
          _react2.default.createElement(XAxis, { dataKey: 'supply', type: 'number' }),
          _react2.default.createElement(YAxis, { dataKey: 'value', type: 'number' }),
          _react2.default.createElement(Tooltip, null),
          _react2.default.createElement(Area, { isAnimationActive: false, dots: false, stackOffset: 'none', dataKey: 'value', name: 'price', key: 'price', stroke: 'blue', fill: 'none' }),
          _react2.default.createElement(Area, { isAnimationActive: false, stackOffset: 'none', dataKey: 'sell', stroke: 'blue', fill: 'blue' }),
          _react2.default.createElement(ReferenceDot, {
            isFront: true,
            alwaysShow: true,
            x: currentPrice.supply,
            y: currentPrice.value,
            r: 8,
            fill: 'blue',
            stroke: 'none'
          })
        )
      );
    }
  }]);
  return CurveChart;
}(_react2.default.Component);

CurveChart.contextTypes = {
  contractActions: _propTypes2.default.object,
  contractParams: _propTypes2.default.object
};
exports.default = CurveChart;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BondedTokenUtils = exports.Chart = exports.BondedTokenAdvanced = exports.BondedTokenTransact = exports.BondedTokenHeader = exports.BondedTokenContainer = undefined;

var _BondedTokenContainer = __webpack_require__(55);

var _BondedTokenContainer2 = _interopRequireDefault(_BondedTokenContainer);

var _BondedTokenHeader = __webpack_require__(56);

var _BondedTokenHeader2 = _interopRequireDefault(_BondedTokenHeader);

var _BondedTokenTransact = __webpack_require__(57);

var _BondedTokenTransact2 = _interopRequireDefault(_BondedTokenTransact);

var _BondedTokenAdvanced = __webpack_require__(54);

var _BondedTokenAdvanced2 = _interopRequireDefault(_BondedTokenAdvanced);

var _Chart = __webpack_require__(58);

var _Chart2 = _interopRequireDefault(_Chart);

var _relevantCoinHelper = __webpack_require__(24);

var BondedTokenUtils = _interopRequireWildcard(_relevantCoinHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BondedTokenContainer = _BondedTokenContainer2.default;
exports.BondedTokenHeader = _BondedTokenHeader2.default;
exports.BondedTokenTransact = _BondedTokenTransact2.default;
exports.BondedTokenAdvanced = _BondedTokenAdvanced2.default;
exports.Chart = _Chart2.default;
exports.BondedTokenUtils = BondedTokenUtils;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
__webpack_require__(98);
__webpack_require__(101);
__webpack_require__(102);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
__webpack_require__(103);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(90);
var toAbsoluteIndex = __webpack_require__(89);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(20);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(40);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(21);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(6)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(20);
var toObject = __webpack_require__(22);
var IObject = __webpack_require__(44);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(17);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(47).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(16);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(41)(Function.call, __webpack_require__(46).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(76);
var step = __webpack_require__(82);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(84) });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(30) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(22);
var $getPrototypeOf = __webpack_require__(48);

__webpack_require__(50)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(22);
var $keys = __webpack_require__(17);

__webpack_require__(50)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 98 */
/***/ (function(module, exports) {



/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(88)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(51);
var META = __webpack_require__(83).KEY;
var $fails = __webpack_require__(6);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(23);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(78);
var isArray = __webpack_require__(80);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(21);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(86);
var $GOPD = __webpack_require__(46);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(17);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f = $propertyIsEnumerable;
  __webpack_require__(31).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("eth-price");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M1OGU3YTY5Y2ZkNThjZTI4N2MiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVsZXZhbnRDb2luSGVscGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZsZXhpYmxlLXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtdXRpbHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvbmRlZFRva2VuSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb25kZWRUb2tlblRyYW5zYWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9DaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJpZ251bWJlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV0aC1wcmljZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY2hhcnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldEFjY291bnRCYWxhbmNlIiwiZm9ybWF0UGFyYW0iLCJnZXRWYWx1ZSIsImluaXRQYXJhbXMiLCJnZXRBbGwiLCJnZXROZXR3b3JrIiwidXRpbHMiLCJyZXF1aXJlIiwiZGVmYXVsdENvbnZlcnQiLCJjb252ZXJ0IiwiZGVjaW1hbHMiLCJwYXJhbXMiLCJ0b3RhbFN1cHBseSIsInBvb2xCYWxhbmNlIiwicmVzZXJ2ZVJhdGlvIiwiaW5mbGF0aW9uU3VwcGx5Iiwic3ltYm9sIiwiYWNjb3VudEJhbGFuY2VzIiwiYWNjb3VudCIsImJhbGFuY2UiLCJwYXJzZUZsb2F0IiwiZnJvbVdlaSIsImVyciIsImNvbnRyYWN0IiwidmFsdWUiLCJwYXJhbSIsInAiLCJzdHJpbmciLCJzb1N0cmluZyIsIm1ldGhvZCIsImFyZ3MiLCJpbml0aWFsaXplZCIsInJlc3VsdCIsIm1ldGhvZHMiLCJjYWNoZUNhbGwiLCJmb3JFYWNoIiwid2ViMyIsIm5ldHdvcmsiLCJuZXR3b3JrSWQiLCJCb25kZWRUb2tlbkFkdmFuY2VkIiwicHJvcHMiLCJzdGF0ZSIsImFkdmFuY2VkIiwidG9nZ2xlQWR2YW5jZWQiLCJiaW5kIiwiYmlnTWF4Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImNvbnRleHQiLCJjb250cmFjdEFjdGlvbnMiLCJjb250cmFjdFBhcmFtcyIsImFkZHJlc3MiLCJ3aWR0aCIsImNvbG9yIiwiZGlhbWV0ZXIiLCJvbkNvbG9yIiwib2ZmQ29sb3IiLCJvbiIsIm9mZiIsImV2ZW50IiwidG9GaXhlZCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsImVsZW1lbnQiLCJjb250cmFjdEhlbHBlciIsImV0aFByaWNlIiwiQm9uZGVkVG9rZW5Db250YWluZXIiLCJjYWxjdWxhdGVTYWxlUmV0dXJuIiwiY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4iLCJjYWxjdWxhdGVCdXlQcmljZSIsImdldENoaWxkQ29udGV4dCIsImluaXRTdGF0ZSIsImdldENvbnRyYWN0UGFyYW1zIiwibG9hZGluZyIsIndhbGxldEJhbGFuY2UiLCJ0b2tlbkJhbGFuY2UiLCJ0cmFuc2FjdGlvbiIsIkVUSFVTRCIsIm5leHRTdGF0ZSIsImRyaXp6bGVTdGF0dXMiLCJSZWxldmFudENvaW4iLCJwcmljZUV0aCIsImNhbGN1bGF0ZVByaWNlIiwicHJpY2VEb2xsYXIiLCJhY2NvdW50SW5mbyIsImFjY291bnRzIiwiYm9uZGluZ0N1cnZlU3RhdGUiLCJzdGF0dXMiLCJ3ZWIzU3RhdGUiLCJkcml6emxlIiwidGhlbiIsInJlcGxhY2UiLCJmb3JjZVVwZGF0ZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm5leHRQcm9wcyIsImwiLCJ0cmFuc2FjdGlvblN0YWNrIiwibGVuZ3RoIiwicmVjZW50VHJhbnNhY3Rpb24iLCJsYXRlc3RTdGF0dXMiLCJ0cmFuc2FjdGlvbnMiLCJ0eCIsInR5cGUiLCJ0YXJnZXQiLCJpc0FkZHJlc3MiLCJNYXRoIiwibWF4IiwiYW1vdW50Iiwicm91bmQiLCJmb28iLCJ0aGVtZUNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjaGlsZENvbnRleHRUeXBlcyIsInJlbGV2YW50Q29pbkhlbHBlciIsIkJvbmRlZFRva2VuSGVhZGVyIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYWNjZW50Q29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJCb25kZWRUb2tlblRyYW5zYWN0IiwiaXNCdXkiLCJ0b2dnbGVCdXkiLCJzdWJtaXQiLCJuZXh0Q29udGV4dCIsInRvV2VpIiwidG9TdHJpbmciLCJidXkiLCJjYWNoZVNlbmQiLCJmcm9tIiwidGltZXMiLCJzZWxsIiwibWV0YW1hc2tOZXR3b3JrIiwiYnV0dG9uIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsInRvTG93ZXJDYXNlIiwiZ2V0VG9rZW5zIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b21Db2xvciIsImUiLCJSZWNoYXJ0cyIsIkFyZWEiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJSZWZlcmVuY2VEb3QiLCJDb21wb3NlZENoYXJ0IiwiQ3VydmVDaGFydCIsImdldENoYXJ0RGF0YSIsImRvY3VtZW50UmVhZHkiLCJkYXRhIiwic3RlcCIsInByaWNlIiwiY3VycmVudFByaWNlIiwic3VwcGx5IiwiaSIsImV0aCIsInB1c2giLCJtaW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiQm9uZGVkVG9rZW5VdGlscyIsIkNoYXJ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsNkJBQTZCO0FBQzdCLHVDQUF1Qzs7Ozs7OztBQ0R2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOzs7Ozs7O0FDTHpDO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUSxtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDMUUsQ0FBQzs7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1OSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2M1OGU3YTY5Y2ZkNThjZTI4N2MiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnd2ViMy11dGlscycpO1xuXG5sZXQgZGVmYXVsdENvbnZlcnQgPSB7XG4gIGNvbnZlcnQ6IHRydWUsXG4gIGRlY2ltYWxzOiAnZGVjaW1hbHMnXG59O1xuXG5leHBvcnQgY29uc3QgcGFyYW1zID0ge1xuICB0b3RhbFN1cHBseTogZGVmYXVsdENvbnZlcnQsXG4gIGRlY2ltYWxzOiB7IGNvbnZlcnQ6IGZhbHNlIH0sXG4gIHBvb2xCYWxhbmNlOiBkZWZhdWx0Q29udmVydCxcbiAgcmVzZXJ2ZVJhdGlvOiB7IGNvbnZlcnQ6IHRydWUsIGRlY2ltYWxzOiA2IH0sXG4gIGluZmxhdGlvblN1cHBseTogZGVmYXVsdENvbnZlcnQsXG4gIHN5bWJvbDogeyBjb252ZXJ0OiBmYWxzZSB9LFxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjb3VudEJhbGFuY2UoYWNjb3VudEJhbGFuY2VzLCBhY2NvdW50KSB7XG4gIGlmICghYWNjb3VudCkgcmV0dXJuIDA7XG4gIHRyeSB7XG4gICAgbGV0IGJhbGFuY2UgPSBhY2NvdW50QmFsYW5jZXNbYWNjb3VudF07XG4gICAgaWYgKCFiYWxhbmNlKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh1dGlscy5mcm9tV2VpKGJhbGFuY2UpLCAxMCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQYXJhbShjb250cmFjdCwgdmFsdWUsIHBhcmFtKSB7XG4gIC8vIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICBsZXQgcCA9IHBhcmFtc1twYXJhbV0gfHwgZGVmYXVsdENvbnZlcnQ7XG4gIGlmIChwLmNvbnZlcnQgJiYgcC5kZWNpbWFscyA9PT0gJ2RlY2ltYWxzJykge1xuICAgIGxldCBkZWNpbWFscyA9IGdldFZhbHVlKGNvbnRyYWN0LCAnZGVjaW1hbHMnKTtcbiAgICB2YWx1ZSAvPSAoMTAgKiogZGVjaW1hbHMpO1xuICB9IGVsc2UgaWYgKHAuY29udmVydCAmJiBwLmRlY2ltYWxzKSB7XG4gICAgdmFsdWUgLz0gKDEwICoqIHAuZGVjaW1hbHMpO1xuICB9XG4gIGlmIChwLnN0cmluZykgdmFsdWUuc29TdHJpbmcoKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoY29udHJhY3QsIG1ldGhvZCwgYXJncykge1xuICBpZiAoIWNvbnRyYWN0IHx8ICFjb250cmFjdC5pbml0aWFsaXplZCkgcmV0dXJuIG51bGw7XG4gIGxldCByZXN1bHQ7XG4gIGlmIChhcmdzKSB7XG4gICAgcmVzdWx0ID0gY29udHJhY3QubWV0aG9kc1ttZXRob2RdLmNhY2hlQ2FsbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBjb250cmFjdC5tZXRob2RzW21ldGhvZF0uY2FjaGVDYWxsKCk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFBhcmFtKGNvbnRyYWN0LCByZXN1bHQsIG1ldGhvZCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRQYXJhbXMoY29udHJhY3QpIHtcbiAgaWYgKCFjb250cmFjdCB8fCAhY29udHJhY3QuaW5pdGlhbGl6ZWQpIHJldHVybiB7fTtcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICBnZXRWYWx1ZShjb250cmFjdCwgcGFyYW0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbChjb250cmFjdCkge1xuICBpZiAoIWNvbnRyYWN0IHx8ICFjb250cmFjdC5pbml0aWFsaXplZCkgcmV0dXJuIHt9O1xuICBsZXQgcmVzdWx0ID0ge307XG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgcmVzdWx0W3BhcmFtXSA9IGdldFZhbHVlKGNvbnRyYWN0LCBwYXJhbSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV0d29yayh3ZWIzKSB7XG4gIGlmICghd2ViMykgcmV0dXJuIG51bGw7XG4gIGxldCBuZXR3b3JrID0gd2ViMy5uZXR3b3JrSWQ7XG4gIHN3aXRjaCAobmV0d29yaykge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnbWFpbic7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICdtb3JkZW4nO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAncm9wc3Rlbic7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuICdyaW5rZWJ5JztcbiAgICBjYXNlIDQyOlxuICAgICAgcmV0dXJuICdrb3Zhbic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndW5rbm93bic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWxldmFudENvaW5IZWxwZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mbGV4aWJsZS1zd2l0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1mbGV4aWJsZS1zd2l0Y2hcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy11dGlsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYjMtdXRpbHNcIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAncmVhY3QtZmxleGlibGUtc3dpdGNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEJvbmRlZFRva2VuQWR2YW5jZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0QWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZHZhbmNlZDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUFkdmFuY2VkID0gdGhpcy50b2dnbGVBZHZhbmNlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmlnTWF4ID0gMTAwMDAwMDtcbiAgfVxuXG4gIHRvZ2dsZUFkdmFuY2VkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWR2YW5jZWQ6ICF0aGlzLnN0YXRlLmFkdmFuY2VkXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgb25DaGFuZ2UgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdEFjdGlvbnM7XG4gICAgbGV0IHtcbiAgICAgIHBvb2xCYWxhbmNlLFxuICAgICAgdG90YWxTdXBwbHksXG4gICAgICByZXNlcnZlUmF0aW8sXG4gICAgICBhZGRyZXNzXG4gICAgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBsZXQgeyBiaWdNYXggfSA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgLS1Cb25kZWRUb2tlbkFkdmFuY2VkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIC0tYm9uZGVkVG9rZW4tZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgc3dpdGNoU3R5bGVzPXt7IHdpZHRoOiAxMTAsIGNvbG9yOiAnZ3JleScgfX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZHZhbmNlZH1cbiAgICAgICAgICBjaXJjbGVTdHlsZXM9e3sgZGlhbWV0ZXI6IDE2LCBvbkNvbG9yOiAnZ3JleScsIG9mZkNvbG9yOiAnbGlnaHRncmV5JyB9fVxuICAgICAgICAgIGxhYmVscz17eyBvbjogJ0FkdmFuY2VkJywgb2ZmOiAnQWR2YW5jZWQnIH19XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlQWR2YW5jZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5hZHZhbmNlZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIC0tQm9uZGVkVG9rZW5BZHZhbmNlZC1vcGVuXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICAgIDxkaXY+VG9rZW4gQWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICdhZGRyZXNzJyl9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgICAgPGRpdj5Qb29sIEJhbGFuY2U8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWV0aFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyEhYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bvb2xCYWxhbmNlLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICBtYXg9e2JpZ01heH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3Bvb2xCYWxhbmNlJyl9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIHshYWRkcmVzcyAmJiAoXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bvb2xCYWxhbmNlLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAncG9vbEJhbGFuY2UnKX0gLz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICAgIDxkaXY+UmF0aW88L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXJhdGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZWFkT25seT17ISFhZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jlc2VydmVSYXRpby50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAncmVzZXJ2ZVJhdGlvJyl9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIHshYWRkcmVzcyAmJiAoXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jlc2VydmVSYXRpby50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIG1heD1cIjFcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICdyZXNlcnZlUmF0aW8nKX0gLz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICAgIDxkaXY+VG90YWwgU3VwcGx5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi10b2tlblwiPlxuICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyEhYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbFN1cHBseS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBtYXg9e2JpZ01heH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAndG90YWxTdXBwbHknKX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgeyFhZGRyZXNzICYmIChcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxTdXBwbHkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICBtYXg9e2JpZ01heH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICd0b3RhbFN1cHBseScpfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvbmRlZFRva2VuQWR2YW5jZWQucHJvcFR5cGVzID0ge1xuICB0b3RhbFN1cHBseTogUHJvcFR5cGVzLm51bWJlcixcbiAgcmVzZXJ2ZVJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwb29sQmFsYW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgYmlnTWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5BZHZhbmNlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb25kZWRUb2tlbkFkdmFuY2VkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBjb250cmFjdEhlbHBlciBmcm9tICcuL3JlbGV2YW50Q29pbkhlbHBlcic7XG5cbmNvbnN0IGV0aFByaWNlID0gcmVxdWlyZSgnZXRoLXByaWNlJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcblxuY2xhc3MgQm9uZGVkVG9rZW5Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVTYWxlUmV0dXJuID0gdGhpcy5jYWxjdWxhdGVTYWxlUmV0dXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVQdXJjaGFzZVJldHVybiA9IHRoaXMuY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUJ1eVByaWNlID0gdGhpcy5jYWxjdWxhdGVCdXlQcmljZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluaXRTdGF0ZSA9IHRoaXMuaW5pdFN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRDb250cmFjdFBhcmFtcyA9IHRoaXMuZ2V0Q29udHJhY3RQYXJhbXMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZGRyZXNzOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgYWNjb3VudDogbnVsbCxcblxuICAgICAgd2FsbGV0QmFsYW5jZTogMCxcbiAgICAgIHRva2VuQmFsYW5jZTogMCxcbiAgICAgIHBvb2xCYWxhbmNlOiA0MDAwMDAwLFxuICAgICAgdG90YWxTdXBwbHk6IDEwMDAwMDAsXG4gICAgICByZXNlcnZlUmF0aW86IDAuMixcbiAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICB9O1xuICAgIHRoaXMudHJhbnNhY3Rpb24gPSB7fTtcbiAgICB0aGlzLkVUSFVTRCA9IDA7XG4gIH1cblxuICAvLyB5b3UgbXVzdCBzcGVjaWZ5IHdoYXQgeW914oCZcmUgYWRkaW5nIHRvIHRoZSBjb250ZXh0XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhY2NvdW50SW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdEFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYm9uZGluZ0N1cnZlU3RhdGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb250cmFjdFBhcmFtc1xuICAgIH07XG4gIH1cblxuICBnZXRDb250cmFjdFBhcmFtcyhwcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgbGV0IHN0YXRlID0gcHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCA/XG4gICAgICBjb250cmFjdEhlbHBlci5nZXRBbGwocHJvcHMuUmVsZXZhbnRDb2luKSA6XG4gICAgICB0aGlzLnN0YXRlO1xuICAgIGxldCB7XG4gICAgICBwb29sQmFsYW5jZSxcbiAgICAgIHRvdGFsU3VwcGx5LFxuICAgICAgcmVzZXJ2ZVJhdGlvLFxuICAgICAgZGVjaW1hbHMsXG4gICAgICBzeW1ib2wsXG4gICAgfSA9IHN0YXRlO1xuXG4gICAgbGV0IHdhbGxldEJhbGFuY2UgPSBjb250cmFjdEhlbHBlclxuICAgICAgLmdldEFjY291bnRCYWxhbmNlKHByb3BzLmFjY291bnRCYWxhbmNlcywgdGhpcy5hY2NvdW50KSB8fFxuICAgICAgdGhpcy5zdGF0ZS53YWxsZXRCYWxhbmNlO1xuXG4gICAgbGV0IHRva2VuQmFsYW5jZSA9IHRoaXMuYWNjb3VudCA/XG4gICAgICBjb250cmFjdEhlbHBlci5nZXRWYWx1ZShwcm9wcy5SZWxldmFudENvaW4sICdiYWxhbmNlT2YnLCB0aGlzLmFjY291bnQpIDpcbiAgICAgIDA7XG5cbiAgICBsZXQgcHJpY2VFdGggPSB0aGlzLmNhbGN1bGF0ZVByaWNlKHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvKTtcblxuICAgIGxldCBwcmljZURvbGxhciA9IChwcmljZUV0aCAqIHRoaXMuRVRIVVNEKS50b0ZpeGVkKDIpO1xuICAgIHByaWNlRXRoID0gcHJpY2VFdGgudG9GaXhlZCgyKTtcblxuICAgIGxldCBjb250cmFjdFBhcmFtcyA9IHtcbiAgICAgIHRva2VuQmFsYW5jZSxcbiAgICAgIHBvb2xCYWxhbmNlLFxuICAgICAgdG90YWxTdXBwbHksXG4gICAgICByZXNlcnZlUmF0aW8sXG4gICAgICBkZWNpbWFscyxcbiAgICAgIHN5bWJvbCxcbiAgICAgIFJlbGV2YW50Q29pbjogcHJvcHMuUmVsZXZhbnRDb2luLFxuICAgICAgYWRkcmVzczogbmV4dFN0YXRlLmFkZHJlc3MsXG4gICAgICBwcmljZUV0aCxcbiAgICAgIHByaWNlRG9sbGFyXG4gICAgfTtcblxuICAgIGxldCBhY2NvdW50SW5mbyA9IHtcbiAgICAgIGFjY291bnQ6IHByb3BzLmFjY291bnRzWzBdLFxuICAgICAgd2FsbGV0QmFsYW5jZVxuICAgIH07XG5cbiAgICBsZXQgY29udHJhY3RBY3Rpb25zID0ge1xuICAgICAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm46IHRoaXMuY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4sXG4gICAgICBjYWxjdWxhdGVTYWxlUmV0dXJuOiB0aGlzLmNhbGN1bGF0ZVNhbGVSZXR1cm4sXG4gICAgICBjYWxjdWxhdGVCdXlQcmljZTogdGhpcy5jYWxjdWxhdGVCdXlQcmljZSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgIH07XG5cbiAgICBsZXQgYm9uZGluZ0N1cnZlU3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiB0aGlzLnRyYW5zYWN0aW9uLnN0YXR1cyA9PT0gJ3BlbmRpbmcnLFxuICAgICAgdHJhbnNhY3Rpb246IHRoaXMudHJhbnNhY3Rpb24sXG4gICAgICB3ZWIzU3RhdGU6IHByb3BzLmRyaXp6bGUud2ViMyxcbiAgICAgIGRyaXp6bGVTdGF0dXM6IHByb3BzLmRyaXp6bGVTdGF0dXNcbiAgICB9O1xuXG4gICAgdGhpcy5jb250cmFjdFBhcmFtcyA9IHtcbiAgICAgIGNvbnRyYWN0UGFyYW1zLFxuICAgICAgY29udHJhY3RBY3Rpb25zLFxuICAgICAgYWNjb3VudEluZm8sXG4gICAgICBib25kaW5nQ3VydmVTdGF0ZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5nZXRDb250cmFjdFBhcmFtcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGV0aFByaWNlKCd1c2QnKVxuICAgICAgLnRoZW4oRVRIVVNEID0+IHtcbiAgICAgICAgRVRIVVNEID0gRVRIVVNEWzBdLnJlcGxhY2UoJ1VTRDogJywnJyk7XG4gICAgICAgIHRoaXMuRVRIVVNEID0gcGFyc2VGbG9hdChFVEhVU0QpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBsZXQgYWNjb3VudCA9IG5leHRQcm9wcy5hY2NvdW50c1swXSB8fCBudWxsO1xuICAgIGlmICghdGhpcy5wcm9wcy5kcml6emxlU3RhdHVzLmluaXRpYWxpemVkICYmIG5leHRQcm9wcy5kcml6emxlU3RhdHVzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgLy8gYWRkcmVzcyBuZWVkcyB0byBiZSBpbiBzdGF0ZSBpbiBjYXNlIHdlIGVkaXRcbiAgICAgIC8vIFRPRE8gY29tZSB1cCB3aXRoIGEgYmV0dGVyIHdheSB0byB0b2dnbGUgdGhpc1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFkZHJlc3M6IG5leHRQcm9wcy5SZWxldmFudENvaW4uYWRkcmVzc1xuICAgICAgfSk7XG4gICAgICBjb250cmFjdEhlbHBlci5pbml0UGFyYW1zKG5leHRQcm9wcy5SZWxldmFudENvaW4pO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCkgdGhpcy5pbml0U3RhdGUobmV4dFByb3BzKTtcblxuICAgIHRoaXMuZ2V0Q29udHJhY3RQYXJhbXMobmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICB9XG5cbiAgaW5pdFN0YXRlKHByb3BzKSB7XG4gICAgbGV0IGFjY291bnQgPSBwcm9wcy5hY2NvdW50c1swXSB8fCBudWxsO1xuICAgIGlmIChhY2NvdW50ICE9PSB0aGlzLmFjY291bnQpIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5hZGRyZXNzICE9PSBwcm9wcy5SZWxldmFudENvaW4uYWRkcmVzcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3M6IHByb3BzLlJlbGV2YW50Q29pbi5hZGRyZXNzIH0pO1xuICAgIH1cblxuICAgIGxldCBsID0gcHJvcHMuZHJpenpsZS50cmFuc2FjdGlvblN0YWNrLmxlbmd0aDtcbiAgICBpZiAobCkge1xuICAgICAgbGV0IHJlY2VudFRyYW5zYWN0aW9uID0gcHJvcHMuZHJpenpsZS50cmFuc2FjdGlvblN0YWNrW2wgLSAxXTtcbiAgICAgIGxldCBsYXRlc3RTdGF0dXMgPSBwcm9wcy5kcml6emxlLnRyYW5zYWN0aW9uc1tyZWNlbnRUcmFuc2FjdGlvbl0uc3RhdHVzO1xuICAgICAgaWYgKGxhdGVzdFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24gPSB7fTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgc3RhdHVzOiBsYXRlc3RTdGF0dXMsXG4gICAgICAgICAgdHg6IHJlY2VudFRyYW5zYWN0aW9uXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQsIHR5cGUpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBudWxsO1xuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xuICAgIGlmICh0eXBlID09PSAnYWRkcmVzcycpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgJiYgIXV0aWxzLmlzQWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIC8vIFRPRE8gdXBkYXRlIGNvbnRyYWN0XG4gICAgICAgIC8vIGNvbnRyYWN0VXRpbHMudXBkYXRlQ29udHJhY3RBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAndG90YWxTdXBwbHknKSB7XG4gICAgICB2YWx1ZSA9IE1hdGgubWF4KDEwMDAsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYW5zYWN0aW9uLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSByZXR1cm47XG4gICAgbGV0IHN0YXRlID0ge307XG4gICAgc3RhdGVbdHlwZV0gPSBldmVudC50YXJnZXQgPyB2YWx1ZSA6IGV2ZW50O1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgY2FsY3VsYXRlUHJpY2UodG90YWxTdXBwbHksIHBvb2xCYWxhbmNlLCByZXNlcnZlUmF0aW8pIHtcbiAgICByZXR1cm4gcG9vbEJhbGFuY2UgLyAodG90YWxTdXBwbHkgKiByZXNlcnZlUmF0aW8pO1xuICB9XG5cbiAgLyogY2FsY3VsYXRlU2FsZVJldHVyblxuICAgIFJldHVybiA9IF9jb25uZWN0b3JCYWxhbmNlICogKDEgLSAoMSAtIF9zZWxsQW1vdW50IC8gX3N1cHBseSkgXiAoMSAvIChfY29ubmVjdG9yV2VpZ2h0IC8gMTAwMDAwMCkpKVxuICAqL1xuICBjYWxjdWxhdGVTYWxlUmV0dXJuKHByb3BzKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jb250cmFjdFBhcmFtcy5jb250cmFjdFBhcmFtcyB8fCB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IHsgdG90YWxTdXBwbHksIHBvb2xCYWxhbmNlLCByZXNlcnZlUmF0aW8sIGFtb3VudCB9ID0geyAuLi5zdGF0ZSwgLi4ucHJvcHMgfTtcbiAgICBpZiAoIXRvdGFsU3VwcGx5IHx8ICFwb29sQmFsYW5jZSB8fCAhcmVzZXJ2ZVJhdGlvIHx8ICFhbW91bnQpIHJldHVybiAnMCc7XG5cbiAgICBpZiAodG90YWxTdXBwbHkgPT09IDAgfHwgcmVzZXJ2ZVJhdGlvID09PSAwIHx8IHBvb2xCYWxhbmNlID09PSAwIHx8IGFtb3VudCA9PT0gMCkgcmV0dXJuICcwJztcbiAgICBpZiAoYW1vdW50ID09PSB0b3RhbFN1cHBseSkgcmV0dXJuIHBvb2xCYWxhbmNlO1xuICAgIGlmIChyZXNlcnZlUmF0aW8gPT09IDEpIHJldHVybiBwb29sQmFsYW5jZTtcblxuICAgIC8vIFJldHVybiA9IF9jb25uZWN0b3JCYWxhbmNlICogKDEgLSAoMSAtIF9zZWxsQW1vdW50IC8gX3N1cHBseSkgXiAoMSAvIChfY29ubmVjdG9yV2VpZ2h0IC8gMTAwMDAwMCkpKVxuICAgIGxldCByZXN1bHQgPSBwb29sQmFsYW5jZSAqICgxIC0gKDEgLSAoYW1vdW50IC8gdG90YWxTdXBwbHkpKSAqKiAoMSAvIHJlc2VydmVSYXRpbykpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHJlc3VsdCAqIDEwMDAwKSAvIDEwMDAwO1xuICB9XG5cbiAgY2FsY3VsYXRlQnV5UHJpY2UocHJvcHMpIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLmNvbnRyYWN0UGFyYW1zLmNvbnRyYWN0UGFyYW1zIHx8IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgdG90YWxTdXBwbHksIHBvb2xCYWxhbmNlLCByZXNlcnZlUmF0aW8sIGFtb3VudCB9ID0geyAuLi5zdGF0ZSwgLi4ucHJvcHMgfTtcbiAgICBpZiAoIXRvdGFsU3VwcGx5IHx8ICFwb29sQmFsYW5jZSB8fCAhcmVzZXJ2ZVJhdGlvIHx8ICFhbW91bnQpIHJldHVybiAnMCc7XG4gICAgaWYgKHRvdGFsU3VwcGx5ID09PSAwIHx8IHJlc2VydmVSYXRpbyA9PT0gMCB8fCBwb29sQmFsYW5jZSA9PT0gMCB8fCBhbW91bnQgPT09IDApIHJldHVybiAnMCc7XG4gICAgbGV0IGZvbyA9IHBvb2xCYWxhbmNlICogKCgxICsgKGFtb3VudCAvIHRvdGFsU3VwcGx5KSkgKiogKDEgLyByZXNlcnZlUmF0aW8pIC0gMSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZm9vICogMTAwMDApIC8gMTAwMDA7XG4gIH1cblxuICAvLyBjYWxjdWxhdGVQdXJjaGFzZVJldHVyblxuICAvLyBSZXR1cm4gPSBfc3VwcGx5ICogKCgxICsgX2RlcG9zaXRBbW91bnQgLyBfY29ubmVjdG9yQmFsYW5jZSkgXiAoX2Nvbm5lY3RvcldlaWdodCAvIDEwMDAwMDApIC0gMSlcbiAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4ocHJvcHMpIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLmNvbnRyYWN0UGFyYW1zLmNvbnRyYWN0UGFyYW1zIHx8IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgdG90YWxTdXBwbHksIHBvb2xCYWxhbmNlLCByZXNlcnZlUmF0aW8sIGFtb3VudCB9ID0geyAuLi5zdGF0ZSwgLi4ucHJvcHMgfTtcbiAgICBpZiAoIXRvdGFsU3VwcGx5IHx8ICFwb29sQmFsYW5jZSB8fCAhcmVzZXJ2ZVJhdGlvIHx8ICFhbW91bnQpIHJldHVybiAnMCc7XG4gICAgLy8gc3BlY2lhbCBjYXNlIGlmIHRoZSB3ZWlnaHQgPSAxMDAlXG4gICAgaWYgKHJlc2VydmVSYXRpbyA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRvdGFsU3VwcGx5ICogKGFtb3VudCAvIHBvb2xCYWxhbmNlKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gPSBfc3VwcGx5ICogKCgxICsgX2RlcG9zaXRBbW91bnQgLyBfY29ubmVjdG9yQmFsYW5jZSkgXiAoX2Nvbm5lY3RvcldlaWdodCAvIDEwMDAwMDApIC0gMSlcbiAgICBsZXQgZm9vID0gdG90YWxTdXBwbHkgKiAoKDEgKyBhbW91bnQgLyBwb29sQmFsYW5jZSkgKiogcmVzZXJ2ZVJhdGlvIC0gMSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZm9vICogMTAwMDApIC8gMTAwMDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5wcm9wcy50aGVtZUNvbG9yIHx8ICdncmV5JztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eyctLWJvbmRlZFRva2VuJ31cbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGNvbG9yIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb25kZWRUb2tlbkNvbnRhaW5lcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyByZWxldmFudENvaW5IZWxwZXIgZnJvbSAnLi9yZWxldmFudENvaW5IZWxwZXInO1xuXG5jbGFzcyBCb25kZWRUb2tlbkhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgYWNjb3VudEluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYm9uZGluZ0N1cnZlU3RhdGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB3YWxsZXRCYWxhbmNlLCBhY2NvdW50IH0gPSB0aGlzLmNvbnRleHQuYWNjb3VudEluZm87XG4gICAgbGV0IHsgdHJhbnNhY3Rpb24sIHdlYjNTdGF0ZSB9ID0gdGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlO1xuICAgIGxldCB7IHRva2VuQmFsYW5jZSwgc3ltYm9sIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG4gICAgbGV0IG5ldHdvcmsgPSByZWxldmFudENvaW5IZWxwZXIuZ2V0TmV0d29yayh3ZWIzU3RhdGUpO1xuICAgIG5ldHdvcmsgPSBuZXR3b3JrID09PSAnbWFpbicgPyAnJyA6IG5ldHdvcmsgKyAnLic7XG4gICAgbGV0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgbGV0IHRpdGxlID0gcHJvcHMudGl0bGUgfHwgJ0JvbmRlZCBUb2tlbic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuSGVhZGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBwcm9wcy5hY2NlbnRDb2xvciB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+e3RpdGxlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW5IZWFkZXJCb2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuQWRkcmVzc1wiPlxuICAgICAgICAgICAge3RyYW5zYWN0aW9uLnN0YXR1cyAmJiB0cmFuc2FjdGlvbi5zdGF0dXMgPT09ICdwZW5kaW5nJyA/IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAvLyBtYXhXaWR0aDogJzc1JScsXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgcGVuZGluZyB0eDp7JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcblxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovLyR7bmV0d29ya31ldGhlcnNjYW4uaW8vdHgvJHt0cmFuc2FjdGlvbi50eH1gfT5cbiAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24udHh9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgYWRkcmVzczogPGFcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly8ke25ldHdvcmt9ZXRoZXJzY2FuLmlvL2FkZHJlc3MvJHthY2NvdW50fWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthY2NvdW50fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tcG9pbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt3YWxsZXRCYWxhbmNlLnRvRml4ZWQoMil9IEVUSFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tcG9pbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0b2tlbkJhbGFuY2UgPyB0b2tlbkJhbGFuY2UudG9GaXhlZCgyKSA6IHRva2VuQmFsYW5jZX0ge3N5bWJvbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9uZGVkVG9rZW5IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdyZWFjdC1mbGV4aWJsZS1zd2l0Y2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgZ2V0TmV0d29yayB9IGZyb20gJy4vcmVsZXZhbnRDb2luSGVscGVyJztcblxuY2xhc3MgQm9uZGVkVG9rZW5UcmFuc2FjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYWNjb3VudEluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvbmRpbmdDdXJ2ZVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0J1eTogdHJ1ZSxcbiAgICAgIGFtb3VudDogMCxcbiAgICB9O1xuXG4gICAgdGhpcy50b2dnbGVCdXkgPSB0aGlzLnRvZ2dsZUJ1eS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYmlnTWF4ID0gMTAwMDAwMDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0Q29udGV4dCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGUubG9hZGluZyAmJiAhbmV4dENvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGUubG9hZGluZykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFtb3VudDogMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJ1eSgpIHtcbiAgICBsZXQgeyBsb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGU7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFtb3VudDogMCxcbiAgICAgIGlzQnV5OiAhdGhpcy5zdGF0ZS5pc0J1eVxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGxldCB7IGxvYWRpbmcgfSA9IHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZTtcbiAgICBsZXQgeyBhY2NvdW50IH0gPSB0aGlzLmNvbnRleHQuYWNjb3VudEluZm87XG4gICAgbGV0IHsgZGVjaW1hbHMsIFJlbGV2YW50Q29pbiB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGlmICh0aGlzLnN0YXRlLmFtb3VudCA8PSAwIHx8IGxvYWRpbmcpIHJldHVybjtcblxuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnUGxlYXNlIFJldmlldyAmIFNpZ24gVHJhbnNhY3Rpb24nIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNCdXkpIHtcbiAgICAgIGxldCBhbW91bnQgPSBXZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUuYW1vdW50KTtcbiAgICAgIGFtb3VudCA9IG5ldyBCaWdOdW1iZXIoYW1vdW50LCAxMCkudG9TdHJpbmcoMTApO1xuICAgICAgUmVsZXZhbnRDb2luLm1ldGhvZHMuYnV5LmNhY2hlU2VuZCh7XG4gICAgICAgIHZhbHVlOiBhbW91bnQsIGZyb206IGFjY291bnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYW1vdW50ID0gbmV3IEJpZ051bWJlcih0aGlzLnN0YXRlLmFtb3VudCkudGltZXMoMTAgKiogZGVjaW1hbHMpO1xuICAgICAgUmVsZXZhbnRDb2luLm1ldGhvZHMuc2VsbC5jYWNoZVNlbmQoYW1vdW50LCB7XG4gICAgICAgIGZyb206IGFjY291bnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4sXG4gICAgICBjYWxjdWxhdGVTYWxlUmV0dXJuXG4gICAgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdEFjdGlvbnM7XG4gICAgbGV0IHsgbG9hZGluZywgd2ViM1N0YXRlIH0gPSB0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGU7XG4gICAgbGV0IHsgd2FsbGV0QmFsYW5jZSwgYWNjb3VudCB9ID0gdGhpcy5jb250ZXh0LmFjY291bnRJbmZvO1xuICAgIGxldCB7IHRva2VuQmFsYW5jZSwgc3ltYm9sLCBhZGRyZXNzLCBwcmljZUV0aCwgcHJpY2VEb2xsYXIgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcblxuICAgIGxldCBtZXRhbWFza05ldHdvcmsgPSBnZXROZXR3b3JrKHdlYjNTdGF0ZSk7XG5cbiAgICBsZXQgY29sb3IgPSB0aGlzLnByb3BzLmFjY2VudENvbG9yIHx8ICdibHVlJztcbiAgICBsZXQgeyBiaWdNYXggfSA9IHRoaXM7XG5cbiAgICBsZXQgYnV0dG9uID0gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICB2YWx1ZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tc3VibWl0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXQoKX0gPlxuICAgICAgICBzdWJtaXRcbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgYnV0dG9uID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICB7IC4uLnRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5zdWJtaXQoKSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGlmICghZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPHA+XG4gICAgLy8gICAgICAgQ29ubmVjdGluZyB0byBNZXRhbWFzay4uLlxuICAgIC8vICAgICA8L3A+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm5ldHdvcmsudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc29sZS5sb2coJ21ldGFtYXNrTmV0d29yaycsIG1ldGFtYXNrTmV0d29yayk7XG4gICAgY29uc29sZS5sb2cod2ViM1N0YXRlKTtcblxuICAgIGlmICghYWNjb3VudCB8fCB0aGlzLnByb3BzLm5ldHdvcmsudG9Mb3dlckNhc2UoKSAhPT0gbWV0YW1hc2tOZXR3b3JrKSB7XG4gICAgICBsZXQgbmV0d29yayA9IHRoaXMucHJvcHMubmV0d29yayB8fCAnbWFpbic7XG4gICAgICBsZXQgZ2V0VG9rZW5zID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBZb3UgY2FuIGdldCBzb21lIGZyZWUgdGVzdCBuZXR3b3JrIEV0aGVyIGhlcmU6eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mYXVjZXQucmlua2VieS5pby9cIj5odHRwczovL2ZhdWNldC5yaW5rZWJ5LmlvLzwvYT5cbiAgICAgICAgICA8YnIvPihwcm8tdGlwOiB1c2UgeW91ciBHb29nbGVQbHVzIGFjY291bnQpXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tbm90LWNvbm5lY3RlZFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIFBsZWFzZSBlbmFibGUgeW91ciBNZXRhbWFzayB3YWxsZXQgYW5kIGNvbm5lY3QgdG8gdGhlIHtuZXR3b3JrfSBuZXR3b3JrLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBEb24ndCBoYXZlIE1ldGFtYXNrPyBEb3dubG9hZCBpdCBoZXJlOnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWV0YW1hc2suaW8vXCI+aHR0cHM6Ly9tZXRhbWFzay5pby88L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtuZXR3b3JrICE9PSAnbWFpbicgPyBnZXRUb2tlbnMgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBzd2l0Y2hTdHlsZXM9e3sgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXNCdXl9XG4gICAgICAgICAgICBjaXJjbGVTdHlsZXM9e3tcbiAgICAgICAgICAgICAgZGlhbWV0ZXI6IDIwLFxuICAgICAgICAgICAgICBvbkNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgb2ZmQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhYmVscz17eyBvbjogJ0JVWScsIG9mZjogJ1NFTEwnIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGVCdXkoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcuOHJlbScgfX0+XG4gICAgICAgICAgICAxIHtzeW1ib2x9ID0ge3ByaWNlRXRofSBFVEggLyAke3ByaWNlRG9sbGFyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4XCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yIH19PlxuICAgICAgICAgICAgPGRpdj5TcGVuZDo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcwJykgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogJycgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogMCB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG1heD17dGhpcy5zdGF0ZS5pc0J1eSA/XG4gICAgICAgICAgICAgICAgKGFkZHJlc3MgPyB3YWxsZXRCYWxhbmNlLnRvRml4ZWQoNCkgOiBiaWdNYXgpXG4gICAgICAgICAgICAgICAgOiB0b2tlbkJhbGFuY2UudG9GaXhlZCg0KX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAqIDEgPiBldmVudC50YXJnZXQubWF4KSB7XG4gICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBldmVudC50YXJnZXQubWF4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWV2ZW50LnRhcmdldC52YWx1ZSB8fCBldmVudC50YXJnZXQudmFsdWUgKiAxIDwgMCkge1xuICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbW91bnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNCdXkgPyAnRVRIJyA6IHN5bWJvbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICA8ZGl2PlJlY2lldmU6PC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQnV5ID9cbiAgICAgICAgICAgICAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4oeyBhbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50IH0pIDpcbiAgICAgICAgICAgICAgY2FsY3VsYXRlU2FsZVJldHVybih7IGFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgfSl9XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmlzQnV5ID8gJ0VUSCcgOiBzeW1ib2x9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthZGRyZXNzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tc3VibWl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5UcmFuc2FjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb25kZWRUb2tlblRyYW5zYWN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlY2hhcnRzID0gcmVxdWlyZSgncmVjaGFydHMnKTtcblxuY29uc3Qge1xuICBBcmVhLFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsXG4gIFJlZmVyZW5jZURvdCxcbiAgQ29tcG9zZWRDaGFydFxufSA9IFJlY2hhcnRzO1xuXG5jbGFzcyBDdXJ2ZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBjb250cmFjdEFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmdldENoYXJ0RGF0YSA9IHRoaXMuZ2V0Q2hhcnREYXRhLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5kb2N1bWVudFJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBnZXRDaGFydERhdGEoKSB7XG4gICAgbGV0IHsgY2FsY3VsYXRlU2FsZVJldHVybiwgY2FsY3VsYXRlQnV5UHJpY2UgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdEFjdGlvbnM7XG4gICAgbGV0IHsgdG90YWxTdXBwbHksIHJlc2VydmVSYXRpbywgcG9vbEJhbGFuY2UgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBsZXQgcHJvcHMgPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGxldCBzdGVwID0gTWF0aC5yb3VuZCh0b3RhbFN1cHBseSAvIDEwMCk7XG4gICAgbGV0IHByaWNlID0gcG9vbEJhbGFuY2UgLyAocmVzZXJ2ZVJhdGlvICogdG90YWxTdXBwbHkpO1xuICAgIGxldCBjdXJyZW50UHJpY2UgPSB7IHN1cHBseTogdG90YWxTdXBwbHksIHZhbHVlOiBwcmljZSB9O1xuXG4gICAgZm9yIChsZXQgaSA9IHN0ZXA7IGkgPCB0b3RhbFN1cHBseSAqIDEuNTsgaSArPSBzdGVwKSB7XG4gICAgICBpZiAoaSA8IHRvdGFsU3VwcGx5KSB7XG4gICAgICAgIGxldCBldGggPSAxICogY2FsY3VsYXRlU2FsZVJldHVybih7IC4uLnByb3BzLCBhbW91bnQ6IHRvdGFsU3VwcGx5IC0gaSB9KTtcbiAgICAgICAgcHJpY2UgPSAocGFyc2VGbG9hdChwb29sQmFsYW5jZSwgMTApIC0gZXRoKSAvIChyZXNlcnZlUmF0aW8gKiBpKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgc3VwcGx5OiBpLCBzZWxsOiBwcmljZSwgdmFsdWU6IHByaWNlIH0pO1xuICAgICAgfSBlbHNlIGlmIChpID4gdG90YWxTdXBwbHkpIHtcbiAgICAgICAgbGV0IGV0aCA9IDEgKiBjYWxjdWxhdGVCdXlQcmljZSh7IC4uLnByb3BzLCBhbW91bnQ6IGkgLSB0b3RhbFN1cHBseSB9KTtcbiAgICAgICAgcHJpY2UgPSAoZXRoICsgcGFyc2VGbG9hdChwb29sQmFsYW5jZSwgMTApKSAvIChyZXNlcnZlUmF0aW8gKiBpKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgc3VwcGx5OiAxICogaSwgYnV5OiBwcmljZSwgdmFsdWU6IDEgKiBwcmljZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZGF0YSwgY3VycmVudFByaWNlIH07XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRSZWFkeSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHsgZGF0YSwgY3VycmVudFByaWNlIH0gPSB0aGlzLmdldENoYXJ0RGF0YSgpO1xuICAgIGxldCB3aWR0aCA9IE1hdGgubWluKDYwMCwgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgwID8gd2luZG93LmlubmVyV2lkdGggOiA0ODApIC0gMzApO1xuICAgIGxldCBoZWlnaHQgPSB3aWR0aCAqIDIgLyAzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2ID5cbiAgICAgICAgPENvbXBvc2VkQ2hhcnRcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJyB9fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG1hcmdpbj17eyB0b3A6IDEwLCByaWdodDogMzAsIGxlZnQ6IDAsIGJvdHRvbTogMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIvPlxuICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwic3VwcGx5XCIgdHlwZT17J251bWJlcid9IC8+XG4gICAgICAgICAgPFlBeGlzIGRhdGFLZXk9XCJ2YWx1ZVwiIHR5cGU9eydudW1iZXInfSAvPlxuICAgICAgICAgIDxUb29sdGlwLz5cblxuICAgICAgICAgIDxBcmVhIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX0gZG90cz17ZmFsc2V9IHN0YWNrT2Zmc2V0PXsnbm9uZSd9IGRhdGFLZXk9XCJ2YWx1ZVwiIG5hbWU9eydwcmljZSd9IGtleT17J3ByaWNlJ30gc3Ryb2tlPSdibHVlJyBmaWxsPSdub25lJy8+XG5cbiAgICAgICAgICA8QXJlYSBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9IHN0YWNrT2Zmc2V0PXsnbm9uZSd9IGRhdGFLZXk9XCJzZWxsXCIgc3Ryb2tlPVwiYmx1ZVwiIGZpbGw9J2JsdWUnIC8+XG5cbiAgICAgICAgICA8UmVmZXJlbmNlRG90XG4gICAgICAgICAgICBpc0Zyb250PXt0cnVlfVxuICAgICAgICAgICAgYWx3YXlzU2hvdz17dHJ1ZX1cbiAgICAgICAgICAgIHg9e2N1cnJlbnRQcmljZS5zdXBwbHl9XG4gICAgICAgICAgICB5PXtjdXJyZW50UHJpY2UudmFsdWV9XG4gICAgICAgICAgICByPXs4fVxuICAgICAgICAgICAgZmlsbD1cImJsdWVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICA8L0NvbXBvc2VkQ2hhcnQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnZlQ2hhcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ2hhcnQuanMiLCJpbXBvcnQgQm9uZGVkVG9rZW5Db250YWluZXIgZnJvbSAnLi4vc3JjL0JvbmRlZFRva2VuQ29udGFpbmVyJztcbmltcG9ydCBCb25kZWRUb2tlbkhlYWRlciBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5IZWFkZXInO1xuaW1wb3J0IEJvbmRlZFRva2VuVHJhbnNhY3QgZnJvbSAnLi4vc3JjL0JvbmRlZFRva2VuVHJhbnNhY3QnO1xuaW1wb3J0IEJvbmRlZFRva2VuQWR2YW5jZWQgZnJvbSAnLi4vc3JjL0JvbmRlZFRva2VuQWR2YW5jZWQnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL3NyYy9DaGFydCc7XG5pbXBvcnQgKiBhcyBCb25kZWRUb2tlblV0aWxzIGZyb20gJy4uL3NyYy9yZWxldmFudENvaW5IZWxwZXInO1xuXG5leHBvcnQge1xuICBCb25kZWRUb2tlbkNvbnRhaW5lcixcbiAgQm9uZGVkVG9rZW5IZWFkZXIsXG4gIEJvbmRlZFRva2VuVHJhbnNhY3QsXG4gIEJvbmRlZFRva2VuQWR2YW5jZWQsXG4gIENoYXJ0LFxuICBCb25kZWRUb2tlblV0aWxzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlnbnVtYmVyLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmlnbnVtYmVyLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGgtcHJpY2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldGgtcHJpY2VcIlxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVjaGFydHNcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWIzXCJcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9