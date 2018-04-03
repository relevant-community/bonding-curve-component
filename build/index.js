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
var createDesc = __webpack_require__(22);
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
var uid = __webpack_require__(24);
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
/* 21 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


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
var uid = __webpack_require__(24);
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

var pIE = __webpack_require__(21);
var createDesc = __webpack_require__(22);
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
var toObject = __webpack_require__(23);
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

var _relevantCoinHelper = __webpack_require__(20);

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

var _relevantCoinHelper = __webpack_require__(20);

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

var _relevantCoinHelper = __webpack_require__(20);

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

      var desiredNetwork = this.props.network ? this.props.network.toLowerCase() : metamaskNetwork;

      if (!account || desiredNetwork !== metamaskNetwork) {
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

var _relevantCoinHelper = __webpack_require__(20);

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
var pIE = __webpack_require__(21);
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
var descriptor = __webpack_require__(22);
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

var META = __webpack_require__(24)('meta');
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
var pIE = __webpack_require__(21);
var toObject = __webpack_require__(23);
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
var toObject = __webpack_require__(23);
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
var toObject = __webpack_require__(23);
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
var uid = __webpack_require__(24);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(78);
var isArray = __webpack_require__(80);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(22);
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
  __webpack_require__(21).f = $propertyIsEnumerable;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDkyZjUwMWE4MjM5NDhlODY4YjciLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9yZWxldmFudENvaW5IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZsZXhpYmxlLXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtdXRpbHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvbmRlZFRva2VuSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb25kZWRUb2tlblRyYW5zYWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9DaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJpZ251bWJlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV0aC1wcmljZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY2hhcnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldEFjY291bnRCYWxhbmNlIiwiZm9ybWF0UGFyYW0iLCJnZXRWYWx1ZSIsImluaXRQYXJhbXMiLCJnZXRBbGwiLCJnZXROZXR3b3JrIiwidXRpbHMiLCJyZXF1aXJlIiwiZGVmYXVsdENvbnZlcnQiLCJjb252ZXJ0IiwiZGVjaW1hbHMiLCJwYXJhbXMiLCJ0b3RhbFN1cHBseSIsInBvb2xCYWxhbmNlIiwicmVzZXJ2ZVJhdGlvIiwiaW5mbGF0aW9uU3VwcGx5Iiwic3ltYm9sIiwiYWNjb3VudEJhbGFuY2VzIiwiYWNjb3VudCIsImJhbGFuY2UiLCJwYXJzZUZsb2F0IiwiZnJvbVdlaSIsImVyciIsImNvbnRyYWN0IiwidmFsdWUiLCJwYXJhbSIsInAiLCJzdHJpbmciLCJzb1N0cmluZyIsIm1ldGhvZCIsImFyZ3MiLCJpbml0aWFsaXplZCIsInJlc3VsdCIsIm1ldGhvZHMiLCJjYWNoZUNhbGwiLCJmb3JFYWNoIiwid2ViMyIsIm5ldHdvcmsiLCJuZXR3b3JrSWQiLCJCb25kZWRUb2tlbkFkdmFuY2VkIiwicHJvcHMiLCJzdGF0ZSIsImFkdmFuY2VkIiwidG9nZ2xlQWR2YW5jZWQiLCJiaW5kIiwiYmlnTWF4Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImNvbnRleHQiLCJjb250cmFjdEFjdGlvbnMiLCJjb250cmFjdFBhcmFtcyIsImFkZHJlc3MiLCJ3aWR0aCIsImNvbG9yIiwiZGlhbWV0ZXIiLCJvbkNvbG9yIiwib2ZmQ29sb3IiLCJvbiIsIm9mZiIsImV2ZW50IiwidG9GaXhlZCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsImVsZW1lbnQiLCJjb250cmFjdEhlbHBlciIsImV0aFByaWNlIiwiQm9uZGVkVG9rZW5Db250YWluZXIiLCJjYWxjdWxhdGVTYWxlUmV0dXJuIiwiY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4iLCJjYWxjdWxhdGVCdXlQcmljZSIsImdldENoaWxkQ29udGV4dCIsImluaXRTdGF0ZSIsImdldENvbnRyYWN0UGFyYW1zIiwibG9hZGluZyIsIndhbGxldEJhbGFuY2UiLCJ0b2tlbkJhbGFuY2UiLCJ0cmFuc2FjdGlvbiIsIkVUSFVTRCIsIm5leHRTdGF0ZSIsImRyaXp6bGVTdGF0dXMiLCJSZWxldmFudENvaW4iLCJwcmljZUV0aCIsImNhbGN1bGF0ZVByaWNlIiwicHJpY2VEb2xsYXIiLCJhY2NvdW50SW5mbyIsImFjY291bnRzIiwiYm9uZGluZ0N1cnZlU3RhdGUiLCJzdGF0dXMiLCJ3ZWIzU3RhdGUiLCJkcml6emxlIiwidGhlbiIsInJlcGxhY2UiLCJmb3JjZVVwZGF0ZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm5leHRQcm9wcyIsImwiLCJ0cmFuc2FjdGlvblN0YWNrIiwibGVuZ3RoIiwicmVjZW50VHJhbnNhY3Rpb24iLCJsYXRlc3RTdGF0dXMiLCJ0cmFuc2FjdGlvbnMiLCJ0eCIsInR5cGUiLCJ0YXJnZXQiLCJpc0FkZHJlc3MiLCJNYXRoIiwibWF4IiwiYW1vdW50Iiwicm91bmQiLCJmb28iLCJ0aGVtZUNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjaGlsZENvbnRleHRUeXBlcyIsInJlbGV2YW50Q29pbkhlbHBlciIsIkJvbmRlZFRva2VuSGVhZGVyIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYWNjZW50Q29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJCb25kZWRUb2tlblRyYW5zYWN0IiwiaXNCdXkiLCJ0b2dnbGVCdXkiLCJzdWJtaXQiLCJuZXh0Q29udGV4dCIsInRvV2VpIiwidG9TdHJpbmciLCJidXkiLCJjYWNoZVNlbmQiLCJmcm9tIiwidGltZXMiLCJzZWxsIiwibWV0YW1hc2tOZXR3b3JrIiwiYnV0dG9uIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsImRlc2lyZWROZXR3b3JrIiwidG9Mb3dlckNhc2UiLCJnZXRUb2tlbnMiLCJmb250U2l6ZSIsImJvcmRlckJvdHRvbUNvbG9yIiwiZSIsIlJlY2hhcnRzIiwiQXJlYSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIlJlZmVyZW5jZURvdCIsIkNvbXBvc2VkQ2hhcnQiLCJDdXJ2ZUNoYXJ0IiwiZ2V0Q2hhcnREYXRhIiwiZG9jdW1lbnRSZWFkeSIsImRhdGEiLCJzdGVwIiwicHJpY2UiLCJjdXJyZW50UHJpY2UiLCJzdXBwbHkiLCJpIiwiZXRoIiwicHVzaCIsIm1pbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJCb25kZWRUb2tlblV0aWxzIiwiQ2hhcnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSw2QkFBNkI7QUFDN0IsdUNBQXVDOzs7Ozs7O0FDRHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7QUNMekM7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7O0FDSEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxnQ0FBZ0M7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxrQkFBa0I7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7O0FBRTNDLG9EQUFvRCw2QkFBNkI7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsZUFBZSxFQUFFO0FBQzNDLDBCQUEwQixnQkFBZ0I7QUFDMUMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sUUFBUSxpQ0FBaUM7QUFDcEcsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pPQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQSx5Qzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLHFDOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5MmY1MDFhODIzOTQ4ZTg2OGI3IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG5cbmxldCBkZWZhdWx0Q29udmVydCA9IHtcbiAgY29udmVydDogdHJ1ZSxcbiAgZGVjaW1hbHM6ICdkZWNpbWFscydcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJhbXMgPSB7XG4gIHRvdGFsU3VwcGx5OiBkZWZhdWx0Q29udmVydCxcbiAgZGVjaW1hbHM6IHsgY29udmVydDogZmFsc2UgfSxcbiAgcG9vbEJhbGFuY2U6IGRlZmF1bHRDb252ZXJ0LFxuICByZXNlcnZlUmF0aW86IHsgY29udmVydDogdHJ1ZSwgZGVjaW1hbHM6IDYgfSxcbiAgaW5mbGF0aW9uU3VwcGx5OiBkZWZhdWx0Q29udmVydCxcbiAgc3ltYm9sOiB7IGNvbnZlcnQ6IGZhbHNlIH0sXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2NvdW50QmFsYW5jZShhY2NvdW50QmFsYW5jZXMsIGFjY291bnQpIHtcbiAgaWYgKCFhY2NvdW50KSByZXR1cm4gMDtcbiAgdHJ5IHtcbiAgICBsZXQgYmFsYW5jZSA9IGFjY291bnRCYWxhbmNlc1thY2NvdW50XTtcbiAgICBpZiAoIWJhbGFuY2UpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHV0aWxzLmZyb21XZWkoYmFsYW5jZSksIDEwKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBhcmFtKGNvbnRyYWN0LCB2YWx1ZSwgcGFyYW0pIHtcbiAgLy8gaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gIGxldCBwID0gcGFyYW1zW3BhcmFtXSB8fCBkZWZhdWx0Q29udmVydDtcbiAgaWYgKHAuY29udmVydCAmJiBwLmRlY2ltYWxzID09PSAnZGVjaW1hbHMnKSB7XG4gICAgbGV0IGRlY2ltYWxzID0gZ2V0VmFsdWUoY29udHJhY3QsICdkZWNpbWFscycpO1xuICAgIHZhbHVlIC89ICgxMCAqKiBkZWNpbWFscyk7XG4gIH0gZWxzZSBpZiAocC5jb252ZXJ0ICYmIHAuZGVjaW1hbHMpIHtcbiAgICB2YWx1ZSAvPSAoMTAgKiogcC5kZWNpbWFscyk7XG4gIH1cbiAgaWYgKHAuc3RyaW5nKSB2YWx1ZS5zb1N0cmluZygpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShjb250cmFjdCwgbWV0aG9kLCBhcmdzKSB7XG4gIGlmICghY29udHJhY3QgfHwgIWNvbnRyYWN0LmluaXRpYWxpemVkKSByZXR1cm4gbnVsbDtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKGFyZ3MpIHtcbiAgICByZXN1bHQgPSBjb250cmFjdC5tZXRob2RzW21ldGhvZF0uY2FjaGVDYWxsKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGNvbnRyYWN0Lm1ldGhvZHNbbWV0aG9kXS5jYWNoZUNhbGwoKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0UGFyYW0oY29udHJhY3QsIHJlc3VsdCwgbWV0aG9kKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFBhcmFtcyhjb250cmFjdCkge1xuICBpZiAoIWNvbnRyYWN0IHx8ICFjb250cmFjdC5pbml0aWFsaXplZCkgcmV0dXJuIHt9O1xuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW0gPT4ge1xuICAgIGdldFZhbHVlKGNvbnRyYWN0LCBwYXJhbSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsKGNvbnRyYWN0KSB7XG4gIGlmICghY29udHJhY3QgfHwgIWNvbnRyYWN0LmluaXRpYWxpemVkKSByZXR1cm4ge307XG4gIGxldCByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICByZXN1bHRbcGFyYW1dID0gZ2V0VmFsdWUoY29udHJhY3QsIHBhcmFtKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXR3b3JrKHdlYjMpIHtcbiAgaWYgKCF3ZWIzKSByZXR1cm4gbnVsbDtcbiAgbGV0IG5ldHdvcmsgPSB3ZWIzLm5ldHdvcmtJZDtcbiAgc3dpdGNoIChuZXR3b3JrKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdtYWluJztcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ21vcmRlbic7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdyb3BzdGVuJztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gJ3JpbmtlYnknO1xuICAgIGNhc2UgNDI6XG4gICAgICByZXR1cm4gJ2tvdmFuJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICd1bmtub3duJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbGV2YW50Q29pbkhlbHBlci5qcyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmxleGlibGUtc3dpdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZmxleGlibGUtc3dpdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjMtdXRpbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWIzLXV0aWxzXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ3JlYWN0LWZsZXhpYmxlLXN3aXRjaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCb25kZWRUb2tlbkFkdmFuY2VkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdEFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWR2YW5jZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy50b2dnbGVBZHZhbmNlZCA9IHRoaXMudG9nZ2xlQWR2YW5jZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJpZ01heCA9IDEwMDAwMDA7XG4gIH1cblxuICB0b2dnbGVBZHZhbmNlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFkdmFuY2VkOiAhdGhpcy5zdGF0ZS5hZHZhbmNlZFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IG9uQ2hhbmdlIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RBY3Rpb25zO1xuICAgIGxldCB7XG4gICAgICBwb29sQmFsYW5jZSxcbiAgICAgIHRvdGFsU3VwcGx5LFxuICAgICAgcmVzZXJ2ZVJhdGlvLFxuICAgICAgYWRkcmVzc1xuICAgIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG4gICAgbGV0IHsgYmlnTWF4IH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIC0tQm9uZGVkVG9rZW5BZHZhbmNlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAtLWJvbmRlZFRva2VuLWZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIHN3aXRjaFN0eWxlcz17eyB3aWR0aDogMTEwLCBjb2xvcjogJ2dyZXknIH19XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWR2YW5jZWR9XG4gICAgICAgICAgY2lyY2xlU3R5bGVzPXt7IGRpYW1ldGVyOiAxNiwgb25Db2xvcjogJ2dyZXknLCBvZmZDb2xvcjogJ2xpZ2h0Z3JleScgfX1cbiAgICAgICAgICBsYWJlbHM9e3sgb246ICdBZHZhbmNlZCcsIG9mZjogJ0FkdmFuY2VkJyB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUFkdmFuY2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuYWR2YW5jZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAtLUJvbmRlZFRva2VuQWR2YW5jZWQtb3BlblwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlRva2VuIEFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAnYWRkcmVzcycpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICAgIDxkaXY+UG9vbCBCYWxhbmNlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1ldGhcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshIWFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb29sQmFsYW5jZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICdwb29sQmFsYW5jZScpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICB7IWFkZHJlc3MgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwb29sQmFsYW5jZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIG1heD17YmlnTWF4fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3Bvb2xCYWxhbmNlJyl9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlJhdGlvPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1yYXRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyEhYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNlcnZlUmF0aW8udG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3Jlc2VydmVSYXRpbycpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICB7IWFkZHJlc3MgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNlcnZlUmF0aW8udG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAncmVzZXJ2ZVJhdGlvJyl9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlRvdGFsIFN1cHBseTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tdG9rZW5cIj5cbiAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshIWFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxTdXBwbHkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3RvdGFsU3VwcGx5Jyl9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIHshYWRkcmVzcyAmJiAoXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsU3VwcGx5LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAndG90YWxTdXBwbHknKX0gLz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb25kZWRUb2tlbkFkdmFuY2VkLnByb3BUeXBlcyA9IHtcbiAgdG90YWxTdXBwbHk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlc2VydmVSYXRpbzogUHJvcFR5cGVzLm51bWJlcixcbiAgcG9vbEJhbGFuY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJpZ01heDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZGRyZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmRlZFRva2VuQWR2YW5jZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgY29udHJhY3RIZWxwZXIgZnJvbSAnLi9yZWxldmFudENvaW5IZWxwZXInO1xuXG5jb25zdCBldGhQcmljZSA9IHJlcXVpcmUoJ2V0aC1wcmljZScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG5cbmNsYXNzIEJvbmRlZFRva2VuQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsY3VsYXRlU2FsZVJldHVybiA9IHRoaXMuY2FsY3VsYXRlU2FsZVJldHVybi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4gPSB0aGlzLmNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVCdXlQcmljZSA9IHRoaXMuY2FsY3VsYXRlQnV5UHJpY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldENoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbml0U3RhdGUgPSB0aGlzLmluaXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q29udHJhY3RQYXJhbXMgPSB0aGlzLmdldENvbnRyYWN0UGFyYW1zLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWRkcmVzczogJycsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGFjY291bnQ6IG51bGwsXG5cbiAgICAgIHdhbGxldEJhbGFuY2U6IDAsXG4gICAgICB0b2tlbkJhbGFuY2U6IDAsXG4gICAgICBwb29sQmFsYW5jZTogNDAwMDAwMCxcbiAgICAgIHRvdGFsU3VwcGx5OiAxMDAwMDAwLFxuICAgICAgcmVzZXJ2ZVJhdGlvOiAwLjIsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgfTtcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0ge307XG4gICAgdGhpcy5FVEhVU0QgPSAwO1xuICB9XG5cbiAgLy8geW91IG11c3Qgc3BlY2lmeSB3aGF0IHlvdeKAmXJlIGFkZGluZyB0byB0aGUgY29udGV4dFxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYWNjb3VudEluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvbmRpbmdDdXJ2ZVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29udHJhY3RQYXJhbXNcbiAgICB9O1xuICB9XG5cbiAgZ2V0Q29udHJhY3RQYXJhbXMocHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGxldCBzdGF0ZSA9IHByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgY29udHJhY3RIZWxwZXIuZ2V0QWxsKHByb3BzLlJlbGV2YW50Q29pbikgOlxuICAgICAgdGhpcy5zdGF0ZTtcbiAgICBsZXQge1xuICAgICAgcG9vbEJhbGFuY2UsXG4gICAgICB0b3RhbFN1cHBseSxcbiAgICAgIHJlc2VydmVSYXRpbyxcbiAgICAgIGRlY2ltYWxzLFxuICAgICAgc3ltYm9sLFxuICAgIH0gPSBzdGF0ZTtcblxuICAgIGxldCB3YWxsZXRCYWxhbmNlID0gY29udHJhY3RIZWxwZXJcbiAgICAgIC5nZXRBY2NvdW50QmFsYW5jZShwcm9wcy5hY2NvdW50QmFsYW5jZXMsIHRoaXMuYWNjb3VudCkgfHxcbiAgICAgIHRoaXMuc3RhdGUud2FsbGV0QmFsYW5jZTtcblxuICAgIGxldCB0b2tlbkJhbGFuY2UgPSB0aGlzLmFjY291bnQgP1xuICAgICAgY29udHJhY3RIZWxwZXIuZ2V0VmFsdWUocHJvcHMuUmVsZXZhbnRDb2luLCAnYmFsYW5jZU9mJywgdGhpcy5hY2NvdW50KSA6XG4gICAgICAwO1xuXG4gICAgbGV0IHByaWNlRXRoID0gdGhpcy5jYWxjdWxhdGVQcmljZSh0b3RhbFN1cHBseSwgcG9vbEJhbGFuY2UsIHJlc2VydmVSYXRpbyk7XG5cbiAgICBsZXQgcHJpY2VEb2xsYXIgPSAocHJpY2VFdGggKiB0aGlzLkVUSFVTRCkudG9GaXhlZCgyKTtcbiAgICBwcmljZUV0aCA9IHByaWNlRXRoLnRvRml4ZWQoMik7XG5cbiAgICBsZXQgY29udHJhY3RQYXJhbXMgPSB7XG4gICAgICB0b2tlbkJhbGFuY2UsXG4gICAgICBwb29sQmFsYW5jZSxcbiAgICAgIHRvdGFsU3VwcGx5LFxuICAgICAgcmVzZXJ2ZVJhdGlvLFxuICAgICAgZGVjaW1hbHMsXG4gICAgICBzeW1ib2wsXG4gICAgICBSZWxldmFudENvaW46IHByb3BzLlJlbGV2YW50Q29pbixcbiAgICAgIGFkZHJlc3M6IG5leHRTdGF0ZS5hZGRyZXNzLFxuICAgICAgcHJpY2VFdGgsXG4gICAgICBwcmljZURvbGxhclxuICAgIH07XG5cbiAgICBsZXQgYWNjb3VudEluZm8gPSB7XG4gICAgICBhY2NvdW50OiBwcm9wcy5hY2NvdW50c1swXSxcbiAgICAgIHdhbGxldEJhbGFuY2VcbiAgICB9O1xuXG4gICAgbGV0IGNvbnRyYWN0QWN0aW9ucyA9IHtcbiAgICAgIGNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuOiB0aGlzLmNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuLFxuICAgICAgY2FsY3VsYXRlU2FsZVJldHVybjogdGhpcy5jYWxjdWxhdGVTYWxlUmV0dXJuLFxuICAgICAgY2FsY3VsYXRlQnV5UHJpY2U6IHRoaXMuY2FsY3VsYXRlQnV5UHJpY2UsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICB9O1xuXG4gICAgbGV0IGJvbmRpbmdDdXJ2ZVN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdGhpcy50cmFuc2FjdGlvbi5zdGF0dXMgPT09ICdwZW5kaW5nJyxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uLFxuICAgICAgd2ViM1N0YXRlOiBwcm9wcy5kcml6emxlLndlYjMsXG4gICAgICBkcml6emxlU3RhdHVzOiBwcm9wcy5kcml6emxlU3RhdHVzXG4gICAgfTtcblxuICAgIHRoaXMuY29udHJhY3RQYXJhbXMgPSB7XG4gICAgICBjb250cmFjdFBhcmFtcyxcbiAgICAgIGNvbnRyYWN0QWN0aW9ucyxcbiAgICAgIGFjY291bnRJbmZvLFxuICAgICAgYm9uZGluZ0N1cnZlU3RhdGVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZ2V0Q29udHJhY3RQYXJhbXModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBldGhQcmljZSgndXNkJylcbiAgICAgIC50aGVuKEVUSFVTRCA9PiB7XG4gICAgICAgIEVUSFVTRCA9IEVUSFVTRFswXS5yZXBsYWNlKCdVU0Q6ICcsJycpO1xuICAgICAgICB0aGlzLkVUSFVTRCA9IHBhcnNlRmxvYXQoRVRIVVNEKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kcml6emxlU3RhdHVzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgbGV0IGFjY291bnQgPSBuZXh0UHJvcHMuYWNjb3VudHNbMF0gfHwgbnVsbDtcbiAgICBpZiAoIXRoaXMucHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCAmJiBuZXh0UHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgIC8vIGFkZHJlc3MgbmVlZHMgdG8gYmUgaW4gc3RhdGUgaW4gY2FzZSB3ZSBlZGl0XG4gICAgICAvLyBUT0RPIGNvbWUgdXAgd2l0aCBhIGJldHRlciB3YXkgdG8gdG9nZ2xlIHRoaXNcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhZGRyZXNzOiBuZXh0UHJvcHMuUmVsZXZhbnRDb2luLmFkZHJlc3NcbiAgICAgIH0pO1xuICAgICAgY29udHJhY3RIZWxwZXIuaW5pdFBhcmFtcyhuZXh0UHJvcHMuUmVsZXZhbnRDb2luKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHRoaXMuaW5pdFN0YXRlKG5leHRQcm9wcyk7XG5cbiAgICB0aGlzLmdldENvbnRyYWN0UGFyYW1zKG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgfVxuXG4gIGluaXRTdGF0ZShwcm9wcykge1xuICAgIGxldCBhY2NvdW50ID0gcHJvcHMuYWNjb3VudHNbMF0gfHwgbnVsbDtcbiAgICBpZiAoYWNjb3VudCAhPT0gdGhpcy5hY2NvdW50KSB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWRkcmVzcyAhPT0gcHJvcHMuUmVsZXZhbnRDb2luLmFkZHJlc3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBwcm9wcy5SZWxldmFudENvaW4uYWRkcmVzcyB9KTtcbiAgICB9XG5cbiAgICBsZXQgbCA9IHByb3BzLmRyaXp6bGUudHJhbnNhY3Rpb25TdGFjay5sZW5ndGg7XG4gICAgaWYgKGwpIHtcbiAgICAgIGxldCByZWNlbnRUcmFuc2FjdGlvbiA9IHByb3BzLmRyaXp6bGUudHJhbnNhY3Rpb25TdGFja1tsIC0gMV07XG4gICAgICBsZXQgbGF0ZXN0U3RhdHVzID0gcHJvcHMuZHJpenpsZS50cmFuc2FjdGlvbnNbcmVjZW50VHJhbnNhY3Rpb25dLnN0YXR1cztcbiAgICAgIGlmIChsYXRlc3RTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uID0ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgIHN0YXR1czogbGF0ZXN0U3RhdHVzLFxuICAgICAgICAgIHR4OiByZWNlbnRUcmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50LCB0eXBlKSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogbnVsbDtcbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbiAgICBpZiAodHlwZSA9PT0gJ2FkZHJlc3MnKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICYmICF1dGlscy5pc0FkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgICAvLyBUT0RPIHVwZGF0ZSBjb250cmFjdFxuICAgICAgICAvLyBjb250cmFjdFV0aWxzLnVwZGF0ZUNvbnRyYWN0QWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3RvdGFsU3VwcGx5Jykge1xuICAgICAgdmFsdWUgPSBNYXRoLm1heCgxMDAwLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFuc2FjdGlvbi5zdGF0dXMgPT09ICdwZW5kaW5nJykgcmV0dXJuO1xuICAgIGxldCBzdGF0ZSA9IHt9O1xuICAgIHN0YXRlW3R5cGVdID0gZXZlbnQudGFyZ2V0ID8gdmFsdWUgOiBldmVudDtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVByaWNlKHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvKSB7XG4gICAgcmV0dXJuIHBvb2xCYWxhbmNlIC8gKHRvdGFsU3VwcGx5ICogcmVzZXJ2ZVJhdGlvKTtcbiAgfVxuXG4gIC8qIGNhbGN1bGF0ZVNhbGVSZXR1cm5cbiAgICBSZXR1cm4gPSBfY29ubmVjdG9yQmFsYW5jZSAqICgxIC0gKDEgLSBfc2VsbEFtb3VudCAvIF9zdXBwbHkpIF4gKDEgLyAoX2Nvbm5lY3RvcldlaWdodCAvIDEwMDAwMDApKSlcbiAgKi9cbiAgY2FsY3VsYXRlU2FsZVJldHVybihwcm9wcykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY29udHJhY3RQYXJhbXMuY29udHJhY3RQYXJhbXMgfHwgdGhpcy5zdGF0ZTtcblxuICAgIGxldCB7IHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvLCBhbW91bnQgfSA9IHsgLi4uc3RhdGUsIC4uLnByb3BzIH07XG4gICAgaWYgKCF0b3RhbFN1cHBseSB8fCAhcG9vbEJhbGFuY2UgfHwgIXJlc2VydmVSYXRpbyB8fCAhYW1vdW50KSByZXR1cm4gJzAnO1xuXG4gICAgaWYgKHRvdGFsU3VwcGx5ID09PSAwIHx8IHJlc2VydmVSYXRpbyA9PT0gMCB8fCBwb29sQmFsYW5jZSA9PT0gMCB8fCBhbW91bnQgPT09IDApIHJldHVybiAnMCc7XG4gICAgaWYgKGFtb3VudCA9PT0gdG90YWxTdXBwbHkpIHJldHVybiBwb29sQmFsYW5jZTtcbiAgICBpZiAocmVzZXJ2ZVJhdGlvID09PSAxKSByZXR1cm4gcG9vbEJhbGFuY2U7XG5cbiAgICAvLyBSZXR1cm4gPSBfY29ubmVjdG9yQmFsYW5jZSAqICgxIC0gKDEgLSBfc2VsbEFtb3VudCAvIF9zdXBwbHkpIF4gKDEgLyAoX2Nvbm5lY3RvcldlaWdodCAvIDEwMDAwMDApKSlcbiAgICBsZXQgcmVzdWx0ID0gcG9vbEJhbGFuY2UgKiAoMSAtICgxIC0gKGFtb3VudCAvIHRvdGFsU3VwcGx5KSkgKiogKDEgLyByZXNlcnZlUmF0aW8pKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChyZXN1bHQgKiAxMDAwMCkgLyAxMDAwMDtcbiAgfVxuXG4gIGNhbGN1bGF0ZUJ1eVByaWNlKHByb3BzKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jb250cmFjdFBhcmFtcy5jb250cmFjdFBhcmFtcyB8fCB0aGlzLnN0YXRlO1xuICAgIGxldCB7IHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvLCBhbW91bnQgfSA9IHsgLi4uc3RhdGUsIC4uLnByb3BzIH07XG4gICAgaWYgKCF0b3RhbFN1cHBseSB8fCAhcG9vbEJhbGFuY2UgfHwgIXJlc2VydmVSYXRpbyB8fCAhYW1vdW50KSByZXR1cm4gJzAnO1xuICAgIGlmICh0b3RhbFN1cHBseSA9PT0gMCB8fCByZXNlcnZlUmF0aW8gPT09IDAgfHwgcG9vbEJhbGFuY2UgPT09IDAgfHwgYW1vdW50ID09PSAwKSByZXR1cm4gJzAnO1xuICAgIGxldCBmb28gPSBwb29sQmFsYW5jZSAqICgoMSArIChhbW91bnQgLyB0b3RhbFN1cHBseSkpICoqICgxIC8gcmVzZXJ2ZVJhdGlvKSAtIDEpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZvbyAqIDEwMDAwKSAvIDEwMDAwO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm5cbiAgLy8gUmV0dXJuID0gX3N1cHBseSAqICgoMSArIF9kZXBvc2l0QW1vdW50IC8gX2Nvbm5lY3RvckJhbGFuY2UpIF4gKF9jb25uZWN0b3JXZWlnaHQgLyAxMDAwMDAwKSAtIDEpXG4gIGNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuKHByb3BzKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jb250cmFjdFBhcmFtcy5jb250cmFjdFBhcmFtcyB8fCB0aGlzLnN0YXRlO1xuICAgIGxldCB7IHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvLCBhbW91bnQgfSA9IHsgLi4uc3RhdGUsIC4uLnByb3BzIH07XG4gICAgaWYgKCF0b3RhbFN1cHBseSB8fCAhcG9vbEJhbGFuY2UgfHwgIXJlc2VydmVSYXRpbyB8fCAhYW1vdW50KSByZXR1cm4gJzAnO1xuICAgIC8vIHNwZWNpYWwgY2FzZSBpZiB0aGUgd2VpZ2h0ID0gMTAwJVxuICAgIGlmIChyZXNlcnZlUmF0aW8gPT09IDEpIHtcbiAgICAgIHJldHVybiB0b3RhbFN1cHBseSAqIChhbW91bnQgLyBwb29sQmFsYW5jZSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuID0gX3N1cHBseSAqICgoMSArIF9kZXBvc2l0QW1vdW50IC8gX2Nvbm5lY3RvckJhbGFuY2UpIF4gKF9jb25uZWN0b3JXZWlnaHQgLyAxMDAwMDAwKSAtIDEpXG4gICAgbGV0IGZvbyA9IHRvdGFsU3VwcGx5ICogKCgxICsgYW1vdW50IC8gcG9vbEJhbGFuY2UpICoqIHJlc2VydmVSYXRpbyAtIDEpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZvbyAqIDEwMDAwKSAvIDEwMDAwO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMudGhlbWVDb2xvciB8fCAnZ3JleSc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsnLS1ib25kZWRUb2tlbid9XG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBjb2xvciB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5Db250YWluZXI7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb25kZWRUb2tlbkNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgcmVsZXZhbnRDb2luSGVscGVyIGZyb20gJy4vcmVsZXZhbnRDb2luSGVscGVyJztcblxuY2xhc3MgQm9uZGVkVG9rZW5IZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGFjY291bnRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvbmRpbmdDdXJ2ZVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd2FsbGV0QmFsYW5jZSwgYWNjb3VudCB9ID0gdGhpcy5jb250ZXh0LmFjY291bnRJbmZvO1xuICAgIGxldCB7IHRyYW5zYWN0aW9uLCB3ZWIzU3RhdGUgfSA9IHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZTtcbiAgICBsZXQgeyB0b2tlbkJhbGFuY2UsIHN5bWJvbCB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGxldCBuZXR3b3JrID0gcmVsZXZhbnRDb2luSGVscGVyLmdldE5ldHdvcmsod2ViM1N0YXRlKTtcbiAgICBuZXR3b3JrID0gbmV0d29yayA9PT0gJ21haW4nID8gJycgOiBuZXR3b3JrICsgJy4nO1xuICAgIGxldCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlIHx8ICdCb25kZWQgVG9rZW4nO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbkhlYWRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogcHJvcHMuYWNjZW50Q29sb3IgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuSGVhZGVyQm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbkFkZHJlc3NcIj5cbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5zdGF0dXMgJiYgdHJhbnNhY3Rpb24uc3RhdHVzID09PSAncGVuZGluZycgPyAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLy8gbWF4V2lkdGg6ICc3NSUnLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHBlbmRpbmcgdHg6eycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG5cbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly8ke25ldHdvcmt9ZXRoZXJzY2FuLmlvL3R4LyR7dHJhbnNhY3Rpb24udHh9YH0+XG4gICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLnR4fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIGFkZHJlc3M6IDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vJHtuZXR3b3JrfWV0aGVyc2Nhbi5pby9hZGRyZXNzLyR7YWNjb3VudH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YWNjb3VudH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7d2FsbGV0QmFsYW5jZS50b0ZpeGVkKDIpfSBFVEhcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dG9rZW5CYWxhbmNlID8gdG9rZW5CYWxhbmNlLnRvRml4ZWQoMikgOiB0b2tlbkJhbGFuY2V9IHtzeW1ib2x9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmRlZFRva2VuSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAncmVhY3QtZmxleGlibGUtc3dpdGNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IGdldE5ldHdvcmsgfSBmcm9tICcuL3JlbGV2YW50Q29pbkhlbHBlcic7XG5cbmNsYXNzIEJvbmRlZFRva2VuVHJhbnNhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGFjY291bnRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0QWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBib25kaW5nQ3VydmVTdGF0ZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNCdXk6IHRydWUsXG4gICAgICBhbW91bnQ6IDAsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlQnV5ID0gdGhpcy50b2dnbGVCdXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmJpZ01heCA9IDEwMDAwMDA7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlLmxvYWRpbmcgJiYgIW5leHRDb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbW91bnQ6IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCdXkoKSB7XG4gICAgbGV0IHsgbG9hZGluZyB9ID0gdGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlO1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhbW91bnQ6IDAsXG4gICAgICBpc0J1eTogIXRoaXMuc3RhdGUuaXNCdXlcbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBsZXQgeyBsb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGU7XG4gICAgbGV0IHsgYWNjb3VudCB9ID0gdGhpcy5jb250ZXh0LmFjY291bnRJbmZvO1xuICAgIGxldCB7IGRlY2ltYWxzLCBSZWxldmFudENvaW4gfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBpZiAodGhpcy5zdGF0ZS5hbW91bnQgPD0gMCB8fCBsb2FkaW5nKSByZXR1cm47XG5cbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogJ1BsZWFzZSBSZXZpZXcgJiBTaWduIFRyYW5zYWN0aW9uJyB9KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzQnV5KSB7XG4gICAgICBsZXQgYW1vdW50ID0gV2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLmFtb3VudCk7XG4gICAgICBhbW91bnQgPSBuZXcgQmlnTnVtYmVyKGFtb3VudCwgMTApLnRvU3RyaW5nKDEwKTtcbiAgICAgIFJlbGV2YW50Q29pbi5tZXRob2RzLmJ1eS5jYWNoZVNlbmQoe1xuICAgICAgICB2YWx1ZTogYW1vdW50LCBmcm9tOiBhY2NvdW50XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGFtb3VudCA9IG5ldyBCaWdOdW1iZXIodGhpcy5zdGF0ZS5hbW91bnQpLnRpbWVzKDEwICoqIGRlY2ltYWxzKTtcbiAgICAgIFJlbGV2YW50Q29pbi5tZXRob2RzLnNlbGwuY2FjaGVTZW5kKGFtb3VudCwge1xuICAgICAgICBmcm9tOiBhY2NvdW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuLFxuICAgICAgY2FsY3VsYXRlU2FsZVJldHVyblxuICAgIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RBY3Rpb25zO1xuICAgIGxldCB7IGxvYWRpbmcsIHdlYjNTdGF0ZSB9ID0gdGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlO1xuICAgIGxldCB7IHdhbGxldEJhbGFuY2UsIGFjY291bnQgfSA9IHRoaXMuY29udGV4dC5hY2NvdW50SW5mbztcbiAgICBsZXQgeyB0b2tlbkJhbGFuY2UsIHN5bWJvbCwgYWRkcmVzcywgcHJpY2VFdGgsIHByaWNlRG9sbGFyIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG5cbiAgICBsZXQgbWV0YW1hc2tOZXR3b3JrID0gZ2V0TmV0d29yayh3ZWIzU3RhdGUpO1xuXG4gICAgbGV0IGNvbG9yID0gdGhpcy5wcm9wcy5hY2NlbnRDb2xvciB8fCAnYmx1ZSc7XG4gICAgbGV0IHsgYmlnTWF4IH0gPSB0aGlzO1xuXG4gICAgbGV0IGJ1dHRvbiA9IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdmFsdWU9XCJzdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0KCl9ID5cbiAgICAgICAgc3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIGJ1dHRvbiA9IFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgeyAuLi50aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc3VibWl0KCkgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoIWRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxwPlxuICAgIC8vICAgICAgIENvbm5lY3RpbmcgdG8gTWV0YW1hc2suLi5cbiAgICAvLyAgICAgPC9wPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG5cbiAgICBsZXQgZGVzaXJlZE5ldHdvcmsgPSB0aGlzLnByb3BzLm5ldHdvcmsgPyB0aGlzLnByb3BzLm5ldHdvcmsudG9Mb3dlckNhc2UoKSA6IG1ldGFtYXNrTmV0d29yaztcblxuICAgIGlmICghYWNjb3VudCB8fCBkZXNpcmVkTmV0d29yayAhPT0gbWV0YW1hc2tOZXR3b3JrKSB7XG4gICAgICBsZXQgbmV0d29yayA9IHRoaXMucHJvcHMubmV0d29yayB8fCAnbWFpbic7XG4gICAgICBsZXQgZ2V0VG9rZW5zID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBZb3UgY2FuIGdldCBzb21lIGZyZWUgdGVzdCBuZXR3b3JrIEV0aGVyIGhlcmU6eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mYXVjZXQucmlua2VieS5pby9cIj5odHRwczovL2ZhdWNldC5yaW5rZWJ5LmlvLzwvYT5cbiAgICAgICAgICA8YnIvPihwcm8tdGlwOiB1c2UgeW91ciBHb29nbGVQbHVzIGFjY291bnQpXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tbm90LWNvbm5lY3RlZFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIFBsZWFzZSBlbmFibGUgeW91ciBNZXRhbWFzayB3YWxsZXQgYW5kIGNvbm5lY3QgdG8gdGhlIHtuZXR3b3JrfSBuZXR3b3JrLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBEb24ndCBoYXZlIE1ldGFtYXNrPyBEb3dubG9hZCBpdCBoZXJlOnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWV0YW1hc2suaW8vXCI+aHR0cHM6Ly9tZXRhbWFzay5pby88L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtuZXR3b3JrICE9PSAnbWFpbicgPyBnZXRUb2tlbnMgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBzd2l0Y2hTdHlsZXM9e3sgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXNCdXl9XG4gICAgICAgICAgICBjaXJjbGVTdHlsZXM9e3tcbiAgICAgICAgICAgICAgZGlhbWV0ZXI6IDIwLFxuICAgICAgICAgICAgICBvbkNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgb2ZmQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhYmVscz17eyBvbjogJ0JVWScsIG9mZjogJ1NFTEwnIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGVCdXkoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcuOHJlbScgfX0+XG4gICAgICAgICAgICAxIHtzeW1ib2x9ID0ge3ByaWNlRXRofSBFVEggLyAke3ByaWNlRG9sbGFyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4XCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yIH19PlxuICAgICAgICAgICAgPGRpdj5TcGVuZDo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcwJykgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogJycgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogMCB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG1heD17dGhpcy5zdGF0ZS5pc0J1eSA/XG4gICAgICAgICAgICAgICAgKGFkZHJlc3MgPyB3YWxsZXRCYWxhbmNlLnRvRml4ZWQoNCkgOiBiaWdNYXgpXG4gICAgICAgICAgICAgICAgOiB0b2tlbkJhbGFuY2UudG9GaXhlZCg0KX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAqIDEgPiBldmVudC50YXJnZXQubWF4KSB7XG4gICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBldmVudC50YXJnZXQubWF4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWV2ZW50LnRhcmdldC52YWx1ZSB8fCBldmVudC50YXJnZXQudmFsdWUgKiAxIDwgMCkge1xuICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbW91bnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNCdXkgPyAnRVRIJyA6IHN5bWJvbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICA8ZGl2PlJlY2lldmU6PC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQnV5ID9cbiAgICAgICAgICAgICAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4oeyBhbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50IH0pIDpcbiAgICAgICAgICAgICAgY2FsY3VsYXRlU2FsZVJldHVybih7IGFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgfSl9XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmlzQnV5ID8gJ0VUSCcgOiBzeW1ib2x9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthZGRyZXNzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tc3VibWl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5UcmFuc2FjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb25kZWRUb2tlblRyYW5zYWN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlY2hhcnRzID0gcmVxdWlyZSgncmVjaGFydHMnKTtcblxuY29uc3Qge1xuICBBcmVhLFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsXG4gIFJlZmVyZW5jZURvdCxcbiAgQ29tcG9zZWRDaGFydFxufSA9IFJlY2hhcnRzO1xuXG5jbGFzcyBDdXJ2ZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBjb250cmFjdEFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmdldENoYXJ0RGF0YSA9IHRoaXMuZ2V0Q2hhcnREYXRhLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5kb2N1bWVudFJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBnZXRDaGFydERhdGEoKSB7XG4gICAgbGV0IHsgY2FsY3VsYXRlU2FsZVJldHVybiwgY2FsY3VsYXRlQnV5UHJpY2UgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdEFjdGlvbnM7XG4gICAgbGV0IHsgdG90YWxTdXBwbHksIHJlc2VydmVSYXRpbywgcG9vbEJhbGFuY2UgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBsZXQgcHJvcHMgPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGxldCBzdGVwID0gTWF0aC5yb3VuZCh0b3RhbFN1cHBseSAvIDEwMCk7XG4gICAgbGV0IHByaWNlID0gcG9vbEJhbGFuY2UgLyAocmVzZXJ2ZVJhdGlvICogdG90YWxTdXBwbHkpO1xuICAgIGxldCBjdXJyZW50UHJpY2UgPSB7IHN1cHBseTogdG90YWxTdXBwbHksIHZhbHVlOiBwcmljZSB9O1xuXG4gICAgZm9yIChsZXQgaSA9IHN0ZXA7IGkgPCB0b3RhbFN1cHBseSAqIDEuNTsgaSArPSBzdGVwKSB7XG4gICAgICBpZiAoaSA8IHRvdGFsU3VwcGx5KSB7XG4gICAgICAgIGxldCBldGggPSAxICogY2FsY3VsYXRlU2FsZVJldHVybih7IC4uLnByb3BzLCBhbW91bnQ6IHRvdGFsU3VwcGx5IC0gaSB9KTtcbiAgICAgICAgcHJpY2UgPSAocGFyc2VGbG9hdChwb29sQmFsYW5jZSwgMTApIC0gZXRoKSAvIChyZXNlcnZlUmF0aW8gKiBpKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgc3VwcGx5OiBpLCBzZWxsOiBwcmljZSwgdmFsdWU6IHByaWNlIH0pO1xuICAgICAgfSBlbHNlIGlmIChpID4gdG90YWxTdXBwbHkpIHtcbiAgICAgICAgbGV0IGV0aCA9IDEgKiBjYWxjdWxhdGVCdXlQcmljZSh7IC4uLnByb3BzLCBhbW91bnQ6IGkgLSB0b3RhbFN1cHBseSB9KTtcbiAgICAgICAgcHJpY2UgPSAoZXRoICsgcGFyc2VGbG9hdChwb29sQmFsYW5jZSwgMTApKSAvIChyZXNlcnZlUmF0aW8gKiBpKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgc3VwcGx5OiAxICogaSwgYnV5OiBwcmljZSwgdmFsdWU6IDEgKiBwcmljZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZGF0YSwgY3VycmVudFByaWNlIH07XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRSZWFkeSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHsgZGF0YSwgY3VycmVudFByaWNlIH0gPSB0aGlzLmdldENoYXJ0RGF0YSgpO1xuICAgIGxldCB3aWR0aCA9IE1hdGgubWluKDYwMCwgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgwID8gd2luZG93LmlubmVyV2lkdGggOiA0ODApIC0gMzApO1xuICAgIGxldCBoZWlnaHQgPSB3aWR0aCAqIDIgLyAzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2ID5cbiAgICAgICAgPENvbXBvc2VkQ2hhcnRcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJyB9fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG1hcmdpbj17eyB0b3A6IDEwLCByaWdodDogMzAsIGxlZnQ6IDAsIGJvdHRvbTogMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIvPlxuICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwic3VwcGx5XCIgdHlwZT17J251bWJlcid9IC8+XG4gICAgICAgICAgPFlBeGlzIGRhdGFLZXk9XCJ2YWx1ZVwiIHR5cGU9eydudW1iZXInfSAvPlxuICAgICAgICAgIDxUb29sdGlwLz5cblxuICAgICAgICAgIDxBcmVhIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX0gZG90cz17ZmFsc2V9IHN0YWNrT2Zmc2V0PXsnbm9uZSd9IGRhdGFLZXk9XCJ2YWx1ZVwiIG5hbWU9eydwcmljZSd9IGtleT17J3ByaWNlJ30gc3Ryb2tlPSdibHVlJyBmaWxsPSdub25lJy8+XG5cbiAgICAgICAgICA8QXJlYSBpc0FuaW1hdGlvbkFjdGl2ZT17ZmFsc2V9IHN0YWNrT2Zmc2V0PXsnbm9uZSd9IGRhdGFLZXk9XCJzZWxsXCIgc3Ryb2tlPVwiYmx1ZVwiIGZpbGw9J2JsdWUnIC8+XG5cbiAgICAgICAgICA8UmVmZXJlbmNlRG90XG4gICAgICAgICAgICBpc0Zyb250PXt0cnVlfVxuICAgICAgICAgICAgYWx3YXlzU2hvdz17dHJ1ZX1cbiAgICAgICAgICAgIHg9e2N1cnJlbnRQcmljZS5zdXBwbHl9XG4gICAgICAgICAgICB5PXtjdXJyZW50UHJpY2UudmFsdWV9XG4gICAgICAgICAgICByPXs4fVxuICAgICAgICAgICAgZmlsbD1cImJsdWVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICA8L0NvbXBvc2VkQ2hhcnQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnZlQ2hhcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ2hhcnQuanMiLCJpbXBvcnQgQm9uZGVkVG9rZW5Db250YWluZXIgZnJvbSAnLi4vc3JjL0JvbmRlZFRva2VuQ29udGFpbmVyJztcbmltcG9ydCBCb25kZWRUb2tlbkhlYWRlciBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5IZWFkZXInO1xuaW1wb3J0IEJvbmRlZFRva2VuVHJhbnNhY3QgZnJvbSAnLi4vc3JjL0JvbmRlZFRva2VuVHJhbnNhY3QnO1xuaW1wb3J0IEJvbmRlZFRva2VuQWR2YW5jZWQgZnJvbSAnLi4vc3JjL0JvbmRlZFRva2VuQWR2YW5jZWQnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL3NyYy9DaGFydCc7XG5pbXBvcnQgKiBhcyBCb25kZWRUb2tlblV0aWxzIGZyb20gJy4uL3NyYy9yZWxldmFudENvaW5IZWxwZXInO1xuXG5leHBvcnQge1xuICBCb25kZWRUb2tlbkNvbnRhaW5lcixcbiAgQm9uZGVkVG9rZW5IZWFkZXIsXG4gIEJvbmRlZFRva2VuVHJhbnNhY3QsXG4gIEJvbmRlZFRva2VuQWR2YW5jZWQsXG4gIENoYXJ0LFxuICBCb25kZWRUb2tlblV0aWxzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlnbnVtYmVyLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmlnbnVtYmVyLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGgtcHJpY2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldGgtcHJpY2VcIlxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVjaGFydHNcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWIzXCJcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9