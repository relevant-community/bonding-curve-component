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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(41);
var hide = __webpack_require__(12);
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

var anObject = __webpack_require__(18);
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(63);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(65);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(62);

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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(44);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.params = undefined;

var _keys = __webpack_require__(64);

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
  rewardPool: defaultConvert,
  distributedRewards: defaultConvert,
  virtualSupply: defaultConvert,
  virtualBalance: defaultConvert,
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

var _assign = __webpack_require__(61);

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
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(86);
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
  __webpack_require__(80).appendChild(iframe);
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
var TAG = __webpack_require__(15)('toStringTag');

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
var isObject = __webpack_require__(13);
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

exports.f = __webpack_require__(15);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(67);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(66);

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
var aFunction = __webpack_require__(76);
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

var isObject = __webpack_require__(13);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(11)(function () {
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
var hide = __webpack_require__(12);
var has = __webpack_require__(4);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(82);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(48);
var ITERATOR = __webpack_require__(15)('iterator');
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
var toIObject = __webpack_require__(14);
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
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(78)(false);
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
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


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

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactFlexibleSwitch = __webpack_require__(52);

var _reactFlexibleSwitch2 = _interopRequireDefault(_reactFlexibleSwitch);

var _propTypes = __webpack_require__(16);

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

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BondedTokenBalance = function (_React$Component) {
  (0, _inherits3.default)(BondedTokenBalance, _React$Component);

  function BondedTokenBalance() {
    (0, _classCallCheck3.default)(this, BondedTokenBalance);
    return (0, _possibleConstructorReturn3.default)(this, (BondedTokenBalance.__proto__ || (0, _getPrototypeOf2.default)(BondedTokenBalance)).apply(this, arguments));
  }

  (0, _createClass3.default)(BondedTokenBalance, [{
    key: 'render',
    value: function render() {
      var account = this.context.accountInfo.account;
      var web3State = this.context.bondingCurveState.web3State;
      var _context$contractPara = this.context.contractParams,
          tokenBalance = _context$contractPara.tokenBalance,
          symbol = _context$contractPara.symbol,
          priceDollar = _context$contractPara.priceDollar;

      if (web3State.status !== 'initialized') return null;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: '--bondedTokenBalance' },
          tokenBalance ? tokenBalance.toFixed(2) : tokenBalance,
          ' ',
          symbol,
          ' ',
          '($',
          (priceDollar * tokenBalance).toFixed(2),
          ')'
        )
      );
    }
  }]);
  return BondedTokenBalance;
}(_react2.default.Component);

BondedTokenBalance.contextTypes = {
  accountInfo: _propTypes2.default.object,
  contractParams: _propTypes2.default.object,
  bondingCurveState: _propTypes2.default.object
};
exports.default = BondedTokenBalance;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _relevantCoinHelper = __webpack_require__(20);

var contractHelper = _interopRequireWildcard(_relevantCoinHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ethPrice = __webpack_require__(106);
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
          reserveRatio = state.reserveRatio;


      var walletBalance = contractHelper.getAccountBalance(props.accountBalances, this.account) || this.state.walletBalance;

      var tokenBalance = this.account ? contractHelper.getValue(props.RelevantCoin, 'balanceOf', this.account) : 0;

      var priceEth = this.calculatePrice(totalSupply, poolBalance, reserveRatio);

      var priceDollar = (priceEth * this.ETHUSD).toFixed(2);
      priceEth = priceEth.toFixed(2);

      var contractParams = (0, _extends3.default)({}, state, {
        tokenBalance: tokenBalance,
        RelevantCoin: props.RelevantCoin,
        address: nextState.address,
        priceEth: priceEth,
        priceDollar: priceDollar
      });

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

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
            'address: ',
            _react2.default.createElement(
              'a',
              {
                target: '_blank',
                href: 'https://' + network + 'etherscan.io/address/' + account
              },
              account
            ),
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
            ) : null
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactFlexibleSwitch = __webpack_require__(52);

var _reactFlexibleSwitch2 = _interopRequireDefault(_reactFlexibleSwitch);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bignumber = __webpack_require__(105);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _web = __webpack_require__(108);

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
      amount: ''
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
          amount: ''
        });
      }
    }
  }, {
    key: 'toggleBuy',
    value: function toggleBuy() {
      var loading = this.context.bondingCurveState.loading;

      if (loading) return;
      this.setState({
        amount: '',
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

      var submit = this.submit;

      if (this.props.children) {
        button = _react2.default.cloneElement(this.props.children, (0, _extends3.default)({}, this.props.children.props, {
          onClick: submit }));
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
        // let getTokens = (
        //   <p>
        //     You can get some free test network Ether here:{' '}
        //     <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>
        //     <br/>(pro-tip: use your GooglePlus account)
        //   </p>
        // );
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
          '        '
        );
      }

      var action = 'Pay With';
      var available = _react2.default.createElement(
        'a',
        {
          onClick: function onClick() {
            return _this2.setState({ amount: walletBalance });
          } },
        'Available: ',
        walletBalance.toFixed(2),
        ' ETH'
      );
      var placeholder = 'Enter amount... ';
      if (!this.state.isBuy) {
        // placeholder = 'Enter the amount of RNT you want to sell';
        available = _react2.default.createElement(
          'a',
          { onClick: function onClick() {
              return _this2.setState({ amount: tokenBalance });
            } },
          'Available: ',
          tokenBalance.toFixed(2),
          ' ',
          symbol
        );
        action = 'Sell';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: '--bondedToken-flex --bondedTokenTransact' },
          _react2.default.createElement(_reactFlexibleSwitch2.default, {
            switchStyles: {
              // fontWeight: 'bold',
              width: 100,
              color: color,
              background: 'transparent',
              // borderRadius: 0,
              fontSize: '18px',
              // border: '2px solid ' + color.
              borderColor: color
            },
            value: this.state.isBuy,
            circleStyles: {
              diameter: 25,
              onColor: color,
              offColor: color,
              color: color
              // borderRadius: 0
            },
            labels: { on: 'Buy', off: 'Sell' },
            onChange: function onChange() {
              return _this2.toggleBuy();
            }
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: '--bondedTokenTransact'
          },
          _react2.default.createElement(
            'label',
            { className: '--bondedToken-flex', style: { borderBottomColor: color } },
            action,
            ': ',
            _react2.default.createElement('input', {
              placeholder: placeholder,
              onFocus: function onFocus(e) {
                if (e.target.value === '0') _this2.setState({ amount: '' });
              },
              type: 'text',
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
            _react2.default.createElement(
              'div',
              null,
              this.state.isBuy ? 'ETH' : symbol
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '--bondedToken-available' },
            available
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
        _react2.default.createElement(
          'div',
          { className: '--bondedToken-flex --bondedTokenTransact' },
          _react2.default.createElement(
            'div',
            null,
            'Rate:'
          ),
          _react2.default.createElement(
            'div',
            null,
            '1 ',
            symbol,
            ' = ',
            priceEth,
            ' ETH ($',
            priceDollar,
            ')'
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recharts = __webpack_require__(107);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BondedTokenBalance = exports.BondedTokenUtils = exports.Chart = exports.BondedTokenAdvanced = exports.BondedTokenTransact = exports.BondedTokenHeader = exports.BondedTokenContainer = undefined;

var _BondedTokenContainer = __webpack_require__(56);

var _BondedTokenContainer2 = _interopRequireDefault(_BondedTokenContainer);

var _BondedTokenHeader = __webpack_require__(57);

var _BondedTokenHeader2 = _interopRequireDefault(_BondedTokenHeader);

var _BondedTokenTransact = __webpack_require__(58);

var _BondedTokenTransact2 = _interopRequireDefault(_BondedTokenTransact);

var _BondedTokenAdvanced = __webpack_require__(54);

var _BondedTokenAdvanced2 = _interopRequireDefault(_BondedTokenAdvanced);

var _BondedTokenBalance = __webpack_require__(55);

var _BondedTokenBalance2 = _interopRequireDefault(_BondedTokenBalance);

var _Chart = __webpack_require__(59);

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
exports.BondedTokenBalance = _BondedTokenBalance2.default;

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

module.exports = { "default": __webpack_require__(70), __esModule: true };

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

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(99);
__webpack_require__(102);
__webpack_require__(103);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
__webpack_require__(104);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(91);
var toAbsoluteIndex = __webpack_require__(90);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(40);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(15)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(21);
var toObject = __webpack_require__(23);
var IObject = __webpack_require__(44);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(19);

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(18);
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
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(77);
var step = __webpack_require__(83);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(14);

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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(85) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(30) });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(23);
var $keys = __webpack_require__(19);

__webpack_require__(50)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(88).set });


/***/ }),
/* 99 */
/***/ (function(module, exports) {



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(89)(true);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(51);
var META = __webpack_require__(84).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(24);
var wks = __webpack_require__(15);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(81);
var anObject = __webpack_require__(18);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(87);
var $GOPD = __webpack_require__(46);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(19);
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
var global = __webpack_require__(1);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(15)('toStringTag');

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
/* 105 */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("eth-price");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTNlZjk5Y2VkZmQ0OTI0YjZlZTciLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWxldmFudENvaW5IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZsZXhpYmxlLXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtdXRpbHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5CYWxhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb25kZWRUb2tlbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvbmRlZFRva2VuVHJhbnNhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmlnbnVtYmVyLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXRoLXByaWNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiZ2V0QWNjb3VudEJhbGFuY2UiLCJmb3JtYXRQYXJhbSIsImdldFZhbHVlIiwiaW5pdFBhcmFtcyIsImdldEFsbCIsImdldE5ldHdvcmsiLCJ1dGlscyIsInJlcXVpcmUiLCJkZWZhdWx0Q29udmVydCIsImNvbnZlcnQiLCJkZWNpbWFscyIsInBhcmFtcyIsInRvdGFsU3VwcGx5IiwicG9vbEJhbGFuY2UiLCJyZXNlcnZlUmF0aW8iLCJpbmZsYXRpb25TdXBwbHkiLCJyZXdhcmRQb29sIiwiZGlzdHJpYnV0ZWRSZXdhcmRzIiwidmlydHVhbFN1cHBseSIsInZpcnR1YWxCYWxhbmNlIiwic3ltYm9sIiwiYWNjb3VudEJhbGFuY2VzIiwiYWNjb3VudCIsImJhbGFuY2UiLCJwYXJzZUZsb2F0IiwiZnJvbVdlaSIsImVyciIsImNvbnRyYWN0IiwidmFsdWUiLCJwYXJhbSIsInAiLCJzdHJpbmciLCJzb1N0cmluZyIsIm1ldGhvZCIsImFyZ3MiLCJpbml0aWFsaXplZCIsInJlc3VsdCIsIm1ldGhvZHMiLCJjYWNoZUNhbGwiLCJmb3JFYWNoIiwid2ViMyIsIm5ldHdvcmsiLCJuZXR3b3JrSWQiLCJCb25kZWRUb2tlbkFkdmFuY2VkIiwicHJvcHMiLCJzdGF0ZSIsImFkdmFuY2VkIiwidG9nZ2xlQWR2YW5jZWQiLCJiaW5kIiwiYmlnTWF4Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImNvbnRleHQiLCJjb250cmFjdEFjdGlvbnMiLCJjb250cmFjdFBhcmFtcyIsImFkZHJlc3MiLCJ3aWR0aCIsImNvbG9yIiwiZGlhbWV0ZXIiLCJvbkNvbG9yIiwib2ZmQ29sb3IiLCJvbiIsIm9mZiIsImV2ZW50IiwidG9GaXhlZCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsImVsZW1lbnQiLCJCb25kZWRUb2tlbkJhbGFuY2UiLCJhY2NvdW50SW5mbyIsIndlYjNTdGF0ZSIsImJvbmRpbmdDdXJ2ZVN0YXRlIiwidG9rZW5CYWxhbmNlIiwicHJpY2VEb2xsYXIiLCJzdGF0dXMiLCJjb250cmFjdEhlbHBlciIsImV0aFByaWNlIiwiQm9uZGVkVG9rZW5Db250YWluZXIiLCJjYWxjdWxhdGVTYWxlUmV0dXJuIiwiY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4iLCJjYWxjdWxhdGVCdXlQcmljZSIsImdldENoaWxkQ29udGV4dCIsImluaXRTdGF0ZSIsImdldENvbnRyYWN0UGFyYW1zIiwibG9hZGluZyIsIndhbGxldEJhbGFuY2UiLCJ0cmFuc2FjdGlvbiIsIkVUSFVTRCIsIm5leHRTdGF0ZSIsImRyaXp6bGVTdGF0dXMiLCJSZWxldmFudENvaW4iLCJwcmljZUV0aCIsImNhbGN1bGF0ZVByaWNlIiwiYWNjb3VudHMiLCJkcml6emxlIiwidGhlbiIsInJlcGxhY2UiLCJmb3JjZVVwZGF0ZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm5leHRQcm9wcyIsImwiLCJ0cmFuc2FjdGlvblN0YWNrIiwibGVuZ3RoIiwicmVjZW50VHJhbnNhY3Rpb24iLCJsYXRlc3RTdGF0dXMiLCJ0cmFuc2FjdGlvbnMiLCJ0eCIsInR5cGUiLCJ0YXJnZXQiLCJpc0FkZHJlc3MiLCJNYXRoIiwibWF4IiwiYW1vdW50Iiwicm91bmQiLCJmb28iLCJ0aGVtZUNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjaGlsZENvbnRleHRUeXBlcyIsInJlbGV2YW50Q29pbkhlbHBlciIsIkJvbmRlZFRva2VuSGVhZGVyIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYWNjZW50Q29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJCb25kZWRUb2tlblRyYW5zYWN0IiwiaXNCdXkiLCJ0b2dnbGVCdXkiLCJzdWJtaXQiLCJuZXh0Q29udGV4dCIsInRvV2VpIiwidG9TdHJpbmciLCJidXkiLCJjYWNoZVNlbmQiLCJmcm9tIiwidGltZXMiLCJzZWxsIiwibWV0YW1hc2tOZXR3b3JrIiwiYnV0dG9uIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsImRlc2lyZWROZXR3b3JrIiwidG9Mb3dlckNhc2UiLCJhY3Rpb24iLCJhdmFpbGFibGUiLCJwbGFjZWhvbGRlciIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJlIiwiUmVjaGFydHMiLCJBcmVhIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVmZXJlbmNlRG90IiwiQ29tcG9zZWRDaGFydCIsIkN1cnZlQ2hhcnQiLCJnZXRDaGFydERhdGEiLCJkb2N1bWVudFJlYWR5IiwiZGF0YSIsInN0ZXAiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsInN1cHBseSIsImkiLCJldGgiLCJwdXNoIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsIkJvbmRlZFRva2VuVXRpbHMiLCJDaGFydCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7QUNEdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7Ozs7OztBQ0x6QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQTtB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QSxpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUzZWY5OWNlZGZkNDkyNGI2ZWU3IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG5cbmxldCBkZWZhdWx0Q29udmVydCA9IHtcbiAgY29udmVydDogdHJ1ZSxcbiAgZGVjaW1hbHM6ICdkZWNpbWFscydcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJhbXMgPSB7XG4gIHRvdGFsU3VwcGx5OiBkZWZhdWx0Q29udmVydCxcbiAgZGVjaW1hbHM6IHsgY29udmVydDogZmFsc2UgfSxcbiAgcG9vbEJhbGFuY2U6IGRlZmF1bHRDb252ZXJ0LFxuICByZXNlcnZlUmF0aW86IHsgY29udmVydDogdHJ1ZSwgZGVjaW1hbHM6IDYgfSxcbiAgaW5mbGF0aW9uU3VwcGx5OiBkZWZhdWx0Q29udmVydCxcbiAgcmV3YXJkUG9vbDogZGVmYXVsdENvbnZlcnQsXG4gIGRpc3RyaWJ1dGVkUmV3YXJkczogZGVmYXVsdENvbnZlcnQsXG4gIHZpcnR1YWxTdXBwbHk6IGRlZmF1bHRDb252ZXJ0LFxuICB2aXJ0dWFsQmFsYW5jZTogZGVmYXVsdENvbnZlcnQsXG4gIHN5bWJvbDogeyBjb252ZXJ0OiBmYWxzZSB9LFxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjb3VudEJhbGFuY2UoYWNjb3VudEJhbGFuY2VzLCBhY2NvdW50KSB7XG4gIGlmICghYWNjb3VudCkgcmV0dXJuIDA7XG4gIHRyeSB7XG4gICAgbGV0IGJhbGFuY2UgPSBhY2NvdW50QmFsYW5jZXNbYWNjb3VudF07XG4gICAgaWYgKCFiYWxhbmNlKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh1dGlscy5mcm9tV2VpKGJhbGFuY2UpLCAxMCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQYXJhbShjb250cmFjdCwgdmFsdWUsIHBhcmFtKSB7XG4gIC8vIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICBsZXQgcCA9IHBhcmFtc1twYXJhbV0gfHwgZGVmYXVsdENvbnZlcnQ7XG4gIGlmIChwLmNvbnZlcnQgJiYgcC5kZWNpbWFscyA9PT0gJ2RlY2ltYWxzJykge1xuICAgIGxldCBkZWNpbWFscyA9IGdldFZhbHVlKGNvbnRyYWN0LCAnZGVjaW1hbHMnKTtcbiAgICB2YWx1ZSAvPSAoMTAgKiogZGVjaW1hbHMpO1xuICB9IGVsc2UgaWYgKHAuY29udmVydCAmJiBwLmRlY2ltYWxzKSB7XG4gICAgdmFsdWUgLz0gKDEwICoqIHAuZGVjaW1hbHMpO1xuICB9XG4gIGlmIChwLnN0cmluZykgdmFsdWUuc29TdHJpbmcoKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoY29udHJhY3QsIG1ldGhvZCwgYXJncykge1xuICBpZiAoIWNvbnRyYWN0IHx8ICFjb250cmFjdC5pbml0aWFsaXplZCkgcmV0dXJuIG51bGw7XG4gIGxldCByZXN1bHQ7XG4gIGlmIChhcmdzKSB7XG4gICAgcmVzdWx0ID0gY29udHJhY3QubWV0aG9kc1ttZXRob2RdLmNhY2hlQ2FsbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBjb250cmFjdC5tZXRob2RzW21ldGhvZF0uY2FjaGVDYWxsKCk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFBhcmFtKGNvbnRyYWN0LCByZXN1bHQsIG1ldGhvZCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRQYXJhbXMoY29udHJhY3QpIHtcbiAgaWYgKCFjb250cmFjdCB8fCAhY29udHJhY3QuaW5pdGlhbGl6ZWQpIHJldHVybiB7fTtcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICBnZXRWYWx1ZShjb250cmFjdCwgcGFyYW0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbChjb250cmFjdCkge1xuICBpZiAoIWNvbnRyYWN0IHx8ICFjb250cmFjdC5pbml0aWFsaXplZCkgcmV0dXJuIHt9O1xuICBsZXQgcmVzdWx0ID0ge307XG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgcmVzdWx0W3BhcmFtXSA9IGdldFZhbHVlKGNvbnRyYWN0LCBwYXJhbSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV0d29yayh3ZWIzKSB7XG4gIGlmICghd2ViMykgcmV0dXJuIG51bGw7XG4gIGxldCBuZXR3b3JrID0gd2ViMy5uZXR3b3JrSWQ7XG4gIHN3aXRjaCAobmV0d29yaykge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnbWFpbic7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICdtb3JkZW4nO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAncm9wc3Rlbic7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuICdyaW5rZWJ5JztcbiAgICBjYXNlIDQyOlxuICAgICAgcmV0dXJuICdrb3Zhbic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndW5rbm93bic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWxldmFudENvaW5IZWxwZXIuanMiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZsZXhpYmxlLXN3aXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWZsZXhpYmxlLXN3aXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLXV0aWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViMy11dGlsc1wiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdyZWFjdC1mbGV4aWJsZS1zd2l0Y2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQm9uZGVkVG9rZW5BZHZhbmNlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFkdmFuY2VkOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlQWR2YW5jZWQgPSB0aGlzLnRvZ2dsZUFkdmFuY2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5iaWdNYXggPSAxMDAwMDAwO1xuICB9XG5cbiAgdG9nZ2xlQWR2YW5jZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZHZhbmNlZDogIXRoaXMuc3RhdGUuYWR2YW5jZWRcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBvbkNoYW5nZSB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0QWN0aW9ucztcbiAgICBsZXQge1xuICAgICAgcG9vbEJhbGFuY2UsXG4gICAgICB0b3RhbFN1cHBseSxcbiAgICAgIHJlc2VydmVSYXRpbyxcbiAgICAgIGFkZHJlc3NcbiAgICB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGxldCB7IGJpZ01heCB9ID0gdGhpcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAtLUJvbmRlZFRva2VuQWR2YW5jZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgLS1ib25kZWRUb2tlbi1mbGV4LWNlbnRlclwiPlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICBzd2l0Y2hTdHlsZXM9e3sgd2lkdGg6IDExMCwgY29sb3I6ICdncmV5JyB9fVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkdmFuY2VkfVxuICAgICAgICAgIGNpcmNsZVN0eWxlcz17eyBkaWFtZXRlcjogMTYsIG9uQ29sb3I6ICdncmV5Jywgb2ZmQ29sb3I6ICdsaWdodGdyZXknIH19XG4gICAgICAgICAgbGFiZWxzPXt7IG9uOiAnQWR2YW5jZWQnLCBvZmY6ICdBZHZhbmNlZCcgfX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVBZHZhbmNlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmFkdmFuY2VkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgLS1Cb25kZWRUb2tlbkFkdmFuY2VkLW9wZW5cIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgICAgPGRpdj5Ub2tlbiBBZGRyZXNzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ2FkZHJlc3MnKX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlBvb2wgQmFsYW5jZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZXRoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZWFkT25seT17ISFhZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cG9vbEJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgIG1heD17YmlnTWF4fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAncG9vbEJhbGFuY2UnKX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgeyFhZGRyZXNzICYmIChcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cG9vbEJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICBtYXg9e2JpZ01heH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICdwb29sQmFsYW5jZScpfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgICAgPGRpdj5SYXRpbzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tcmF0aW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshIWFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgIG1heD1cIjFcIlxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVzZXJ2ZVJhdGlvLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICdyZXNlcnZlUmF0aW8nKX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgeyFhZGRyZXNzICYmIChcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVzZXJ2ZVJhdGlvLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3Jlc2VydmVSYXRpbycpfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBTdXBwbHk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXRva2VuXCI+XG4gICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seT17ISFhZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsU3VwcGx5LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgIG1heD17YmlnTWF4fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICd0b3RhbFN1cHBseScpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICB7IWFkZHJlc3MgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbFN1cHBseS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIG1heD17YmlnTWF4fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3RvdGFsU3VwcGx5Jyl9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQm9uZGVkVG9rZW5BZHZhbmNlZC5wcm9wVHlwZXMgPSB7XG4gIHRvdGFsU3VwcGx5OiBQcm9wVHlwZXMubnVtYmVyLFxuICByZXNlcnZlUmF0aW86IFByb3BUeXBlcy5udW1iZXIsXG4gIHBvb2xCYWxhbmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBiaWdNYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWRkcmVzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb25kZWRUb2tlbkFkdmFuY2VkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuQWR2YW5jZWQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQm9uZGVkVG9rZW5CYWxhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBhY2NvdW50SW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBib25kaW5nQ3VydmVTdGF0ZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFjY291bnQgfSA9IHRoaXMuY29udGV4dC5hY2NvdW50SW5mbztcbiAgICBsZXQgeyB3ZWIzU3RhdGUgfSA9IHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZTtcbiAgICBsZXQgeyB0b2tlbkJhbGFuY2UsIHN5bWJvbCwgcHJpY2VEb2xsYXIgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBpZiAod2ViM1N0YXRlLnN0YXR1cyAhPT0gJ2luaXRpYWxpemVkJykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuQmFsYW5jZVwiPlxuICAgICAgICAgIHt0b2tlbkJhbGFuY2UgPyB0b2tlbkJhbGFuY2UudG9GaXhlZCgyKSA6IHRva2VuQmFsYW5jZX0ge3N5bWJvbH1cbiAgICAgICAgICB7JyAnfSgkeyhwcmljZURvbGxhciAqIHRva2VuQmFsYW5jZSkudG9GaXhlZCgyKX0pXG4gICAgICAgIDwvZGl2Plxuey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW5IZWFkZXJCb2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuQWRkcmVzc1wiPlxuICAgICAgICAgICAgYWRkcmVzczogPGFcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly8ke25ldHdvcmt9ZXRoZXJzY2FuLmlvL2FkZHJlc3MvJHthY2NvdW50fWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthY2NvdW50fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4qL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5CYWxhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuQmFsYW5jZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgY29udHJhY3RIZWxwZXIgZnJvbSAnLi9yZWxldmFudENvaW5IZWxwZXInO1xuXG5jb25zdCBldGhQcmljZSA9IHJlcXVpcmUoJ2V0aC1wcmljZScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG5cbmNsYXNzIEJvbmRlZFRva2VuQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsY3VsYXRlU2FsZVJldHVybiA9IHRoaXMuY2FsY3VsYXRlU2FsZVJldHVybi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4gPSB0aGlzLmNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVCdXlQcmljZSA9IHRoaXMuY2FsY3VsYXRlQnV5UHJpY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldENoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbml0U3RhdGUgPSB0aGlzLmluaXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q29udHJhY3RQYXJhbXMgPSB0aGlzLmdldENvbnRyYWN0UGFyYW1zLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWRkcmVzczogJycsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGFjY291bnQ6IG51bGwsXG4gICAgICB3YWxsZXRCYWxhbmNlOiAwLFxuICAgICAgdG9rZW5CYWxhbmNlOiAwLFxuICAgICAgcG9vbEJhbGFuY2U6IDQwMDAwMDAsXG4gICAgICB0b3RhbFN1cHBseTogMTAwMDAwMCxcbiAgICAgIHJlc2VydmVSYXRpbzogMC4yLFxuICAgICAgZGVjaW1hbHM6IDE4LFxuICAgIH07XG4gICAgdGhpcy50cmFuc2FjdGlvbiA9IHt9O1xuICAgIHRoaXMuRVRIVVNEID0gMDtcbiAgfVxuXG4gIC8vIHlvdSBtdXN0IHNwZWNpZnkgd2hhdCB5b3XigJlyZSBhZGRpbmcgdG8gdGhlIGNvbnRleHRcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGFjY291bnRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0QWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBib25kaW5nQ3VydmVTdGF0ZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbnRyYWN0UGFyYW1zXG4gICAgfTtcbiAgfVxuXG4gIGdldENvbnRyYWN0UGFyYW1zKHByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBsZXQgc3RhdGUgPSBwcm9wcy5kcml6emxlU3RhdHVzLmluaXRpYWxpemVkID9cbiAgICAgIGNvbnRyYWN0SGVscGVyLmdldEFsbChwcm9wcy5SZWxldmFudENvaW4pIDpcbiAgICAgIHRoaXMuc3RhdGU7XG4gICAgbGV0IHtcbiAgICAgIHBvb2xCYWxhbmNlLFxuICAgICAgdG90YWxTdXBwbHksXG4gICAgICByZXNlcnZlUmF0aW8sXG4gICAgfSA9IHN0YXRlO1xuXG4gICAgbGV0IHdhbGxldEJhbGFuY2UgPSBjb250cmFjdEhlbHBlclxuICAgICAgLmdldEFjY291bnRCYWxhbmNlKHByb3BzLmFjY291bnRCYWxhbmNlcywgdGhpcy5hY2NvdW50KSB8fFxuICAgICAgdGhpcy5zdGF0ZS53YWxsZXRCYWxhbmNlO1xuXG4gICAgbGV0IHRva2VuQmFsYW5jZSA9IHRoaXMuYWNjb3VudCA/XG4gICAgICBjb250cmFjdEhlbHBlci5nZXRWYWx1ZShwcm9wcy5SZWxldmFudENvaW4sICdiYWxhbmNlT2YnLCB0aGlzLmFjY291bnQpIDpcbiAgICAgIDA7XG5cbiAgICBsZXQgcHJpY2VFdGggPSB0aGlzLmNhbGN1bGF0ZVByaWNlKHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvKTtcblxuICAgIGxldCBwcmljZURvbGxhciA9IChwcmljZUV0aCAqIHRoaXMuRVRIVVNEKS50b0ZpeGVkKDIpO1xuICAgIHByaWNlRXRoID0gcHJpY2VFdGgudG9GaXhlZCgyKTtcblxuICAgIGxldCBjb250cmFjdFBhcmFtcyA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdG9rZW5CYWxhbmNlLFxuICAgICAgUmVsZXZhbnRDb2luOiBwcm9wcy5SZWxldmFudENvaW4sXG4gICAgICBhZGRyZXNzOiBuZXh0U3RhdGUuYWRkcmVzcyxcbiAgICAgIHByaWNlRXRoLFxuICAgICAgcHJpY2VEb2xsYXJcbiAgICB9O1xuXG4gICAgbGV0IGFjY291bnRJbmZvID0ge1xuICAgICAgYWNjb3VudDogcHJvcHMuYWNjb3VudHNbMF0sXG4gICAgICB3YWxsZXRCYWxhbmNlXG4gICAgfTtcblxuICAgIGxldCBjb250cmFjdEFjdGlvbnMgPSB7XG4gICAgICBjYWxjdWxhdGVQdXJjaGFzZVJldHVybjogdGhpcy5jYWxjdWxhdGVQdXJjaGFzZVJldHVybixcbiAgICAgIGNhbGN1bGF0ZVNhbGVSZXR1cm46IHRoaXMuY2FsY3VsYXRlU2FsZVJldHVybixcbiAgICAgIGNhbGN1bGF0ZUJ1eVByaWNlOiB0aGlzLmNhbGN1bGF0ZUJ1eVByaWNlLFxuICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgfTtcblxuICAgIGxldCBib25kaW5nQ3VydmVTdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRoaXMudHJhbnNhY3Rpb24uc3RhdHVzID09PSAncGVuZGluZycsXG4gICAgICB0cmFuc2FjdGlvbjogdGhpcy50cmFuc2FjdGlvbixcbiAgICAgIHdlYjNTdGF0ZTogcHJvcHMuZHJpenpsZS53ZWIzLFxuICAgICAgZHJpenpsZVN0YXR1czogcHJvcHMuZHJpenpsZVN0YXR1c1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnRyYWN0UGFyYW1zID0ge1xuICAgICAgY29udHJhY3RQYXJhbXMsXG4gICAgICBjb250cmFjdEFjdGlvbnMsXG4gICAgICBhY2NvdW50SW5mbyxcbiAgICAgIGJvbmRpbmdDdXJ2ZVN0YXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmdldENvbnRyYWN0UGFyYW1zKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZXRoUHJpY2UoJ3VzZCcpXG4gICAgICAudGhlbihFVEhVU0QgPT4ge1xuICAgICAgICBFVEhVU0QgPSBFVEhVU0RbMF0ucmVwbGFjZSgnVVNEOiAnLCcnKTtcbiAgICAgICAgdGhpcy5FVEhVU0QgPSBwYXJzZUZsb2F0KEVUSFVTRCk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0U3RhdGUodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGxldCBhY2NvdW50ID0gbmV4dFByb3BzLmFjY291bnRzWzBdIHx8IG51bGw7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQgJiYgbmV4dFByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAvLyBhZGRyZXNzIG5lZWRzIHRvIGJlIGluIHN0YXRlIGluIGNhc2Ugd2UgZWRpdFxuICAgICAgLy8gVE9ETyBjb21lIHVwIHdpdGggYSBiZXR0ZXIgd2F5IHRvIHRvZ2dsZSB0aGlzXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWRkcmVzczogbmV4dFByb3BzLlJlbGV2YW50Q29pbi5hZGRyZXNzXG4gICAgICB9KTtcbiAgICAgIGNvbnRyYWN0SGVscGVyLmluaXRQYXJhbXMobmV4dFByb3BzLlJlbGV2YW50Q29pbik7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5kcml6emxlU3RhdHVzLmluaXRpYWxpemVkKSB0aGlzLmluaXRTdGF0ZShuZXh0UHJvcHMpO1xuXG4gICAgdGhpcy5nZXRDb250cmFjdFBhcmFtcyhuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gIH1cblxuICBpbml0U3RhdGUocHJvcHMpIHtcbiAgICBsZXQgYWNjb3VudCA9IHByb3BzLmFjY291bnRzWzBdIHx8IG51bGw7XG4gICAgaWYgKGFjY291bnQgIT09IHRoaXMuYWNjb3VudCkgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcblxuICAgIGlmICh0aGlzLnN0YXRlLmFkZHJlc3MgIT09IHByb3BzLlJlbGV2YW50Q29pbi5hZGRyZXNzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogcHJvcHMuUmVsZXZhbnRDb2luLmFkZHJlc3MgfSk7XG4gICAgfVxuXG4gICAgbGV0IGwgPSBwcm9wcy5kcml6emxlLnRyYW5zYWN0aW9uU3RhY2subGVuZ3RoO1xuICAgIGlmIChsKSB7XG4gICAgICBsZXQgcmVjZW50VHJhbnNhY3Rpb24gPSBwcm9wcy5kcml6emxlLnRyYW5zYWN0aW9uU3RhY2tbbCAtIDFdO1xuICAgICAgbGV0IGxhdGVzdFN0YXR1cyA9IHByb3BzLmRyaXp6bGUudHJhbnNhY3Rpb25zW3JlY2VudFRyYW5zYWN0aW9uXS5zdGF0dXM7XG4gICAgICBpZiAobGF0ZXN0U3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbiA9IHt9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbiA9IHtcbiAgICAgICAgICBzdGF0dXM6IGxhdGVzdFN0YXR1cyxcbiAgICAgICAgICB0eDogcmVjZW50VHJhbnNhY3Rpb25cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShldmVudCwgdHlwZSkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IG51bGw7XG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG4gICAgaWYgKHR5cGUgPT09ICdhZGRyZXNzJykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAmJiAhdXRpbHMuaXNBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgLy8gVE9ETyB1cGRhdGUgY29udHJhY3RcbiAgICAgICAgLy8gY29udHJhY3RVdGlscy51cGRhdGVDb250cmFjdEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICd0b3RhbFN1cHBseScpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5tYXgoMTAwMCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhbnNhY3Rpb24uc3RhdHVzID09PSAncGVuZGluZycpIHJldHVybjtcbiAgICBsZXQgc3RhdGUgPSB7fTtcbiAgICBzdGF0ZVt0eXBlXSA9IGV2ZW50LnRhcmdldCA/IHZhbHVlIDogZXZlbnQ7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBjYWxjdWxhdGVQcmljZSh0b3RhbFN1cHBseSwgcG9vbEJhbGFuY2UsIHJlc2VydmVSYXRpbykge1xuICAgIHJldHVybiBwb29sQmFsYW5jZSAvICh0b3RhbFN1cHBseSAqIHJlc2VydmVSYXRpbyk7XG4gIH1cblxuICAvKiBjYWxjdWxhdGVTYWxlUmV0dXJuXG4gICAgUmV0dXJuID0gX2Nvbm5lY3RvckJhbGFuY2UgKiAoMSAtICgxIC0gX3NlbGxBbW91bnQgLyBfc3VwcGx5KSBeICgxIC8gKF9jb25uZWN0b3JXZWlnaHQgLyAxMDAwMDAwKSkpXG4gICovXG4gIGNhbGN1bGF0ZVNhbGVSZXR1cm4ocHJvcHMpIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLmNvbnRyYWN0UGFyYW1zLmNvbnRyYWN0UGFyYW1zIHx8IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgeyB0b3RhbFN1cHBseSwgcG9vbEJhbGFuY2UsIHJlc2VydmVSYXRpbywgYW1vdW50IH0gPSB7IC4uLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIGlmICghdG90YWxTdXBwbHkgfHwgIXBvb2xCYWxhbmNlIHx8ICFyZXNlcnZlUmF0aW8gfHwgIWFtb3VudCkgcmV0dXJuICcwJztcblxuICAgIGlmICh0b3RhbFN1cHBseSA9PT0gMCB8fCByZXNlcnZlUmF0aW8gPT09IDAgfHwgcG9vbEJhbGFuY2UgPT09IDAgfHwgYW1vdW50ID09PSAwKSByZXR1cm4gJzAnO1xuICAgIGlmIChhbW91bnQgPT09IHRvdGFsU3VwcGx5KSByZXR1cm4gcG9vbEJhbGFuY2U7XG4gICAgaWYgKHJlc2VydmVSYXRpbyA9PT0gMSkgcmV0dXJuIHBvb2xCYWxhbmNlO1xuXG4gICAgLy8gUmV0dXJuID0gX2Nvbm5lY3RvckJhbGFuY2UgKiAoMSAtICgxIC0gX3NlbGxBbW91bnQgLyBfc3VwcGx5KSBeICgxIC8gKF9jb25uZWN0b3JXZWlnaHQgLyAxMDAwMDAwKSkpXG4gICAgbGV0IHJlc3VsdCA9IHBvb2xCYWxhbmNlICogKDEgLSAoMSAtIChhbW91bnQgLyB0b3RhbFN1cHBseSkpICoqICgxIC8gcmVzZXJ2ZVJhdGlvKSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocmVzdWx0ICogMTAwMDApIC8gMTAwMDA7XG4gIH1cblxuICBjYWxjdWxhdGVCdXlQcmljZShwcm9wcykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY29udHJhY3RQYXJhbXMuY29udHJhY3RQYXJhbXMgfHwgdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyB0b3RhbFN1cHBseSwgcG9vbEJhbGFuY2UsIHJlc2VydmVSYXRpbywgYW1vdW50IH0gPSB7IC4uLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIGlmICghdG90YWxTdXBwbHkgfHwgIXBvb2xCYWxhbmNlIHx8ICFyZXNlcnZlUmF0aW8gfHwgIWFtb3VudCkgcmV0dXJuICcwJztcbiAgICBpZiAodG90YWxTdXBwbHkgPT09IDAgfHwgcmVzZXJ2ZVJhdGlvID09PSAwIHx8IHBvb2xCYWxhbmNlID09PSAwIHx8IGFtb3VudCA9PT0gMCkgcmV0dXJuICcwJztcbiAgICBsZXQgZm9vID0gcG9vbEJhbGFuY2UgKiAoKDEgKyAoYW1vdW50IC8gdG90YWxTdXBwbHkpKSAqKiAoMSAvIHJlc2VydmVSYXRpbykgLSAxKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmb28gKiAxMDAwMCkgLyAxMDAwMDtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuXG4gIC8vIFJldHVybiA9IF9zdXBwbHkgKiAoKDEgKyBfZGVwb3NpdEFtb3VudCAvIF9jb25uZWN0b3JCYWxhbmNlKSBeIChfY29ubmVjdG9yV2VpZ2h0IC8gMTAwMDAwMCkgLSAxKVxuICBjYWxjdWxhdGVQdXJjaGFzZVJldHVybihwcm9wcykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY29udHJhY3RQYXJhbXMuY29udHJhY3RQYXJhbXMgfHwgdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyB0b3RhbFN1cHBseSwgcG9vbEJhbGFuY2UsIHJlc2VydmVSYXRpbywgYW1vdW50IH0gPSB7IC4uLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIGlmICghdG90YWxTdXBwbHkgfHwgIXBvb2xCYWxhbmNlIHx8ICFyZXNlcnZlUmF0aW8gfHwgIWFtb3VudCkgcmV0dXJuICcwJztcbiAgICAvLyBzcGVjaWFsIGNhc2UgaWYgdGhlIHdlaWdodCA9IDEwMCVcbiAgICBpZiAocmVzZXJ2ZVJhdGlvID09PSAxKSB7XG4gICAgICByZXR1cm4gdG90YWxTdXBwbHkgKiAoYW1vdW50IC8gcG9vbEJhbGFuY2UpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiA9IF9zdXBwbHkgKiAoKDEgKyBfZGVwb3NpdEFtb3VudCAvIF9jb25uZWN0b3JCYWxhbmNlKSBeIChfY29ubmVjdG9yV2VpZ2h0IC8gMTAwMDAwMCkgLSAxKVxuICAgIGxldCBmb28gPSB0b3RhbFN1cHBseSAqICgoMSArIGFtb3VudCAvIHBvb2xCYWxhbmNlKSAqKiByZXNlcnZlUmF0aW8gLSAxKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmb28gKiAxMDAwMCkgLyAxMDAwMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29sb3IgPSB0aGlzLnByb3BzLnRoZW1lQ29sb3IgfHwgJ2dyZXknO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Jy0tYm9uZGVkVG9rZW4nfVxuICAgICAgICBzdHlsZT17eyBib3JkZXJDb2xvcjogY29sb3IgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmRlZFRva2VuQ29udGFpbmVyO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9uZGVkVG9rZW5Db250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHJlbGV2YW50Q29pbkhlbHBlciBmcm9tICcuL3JlbGV2YW50Q29pbkhlbHBlcic7XG5cbmNsYXNzIEJvbmRlZFRva2VuSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBhY2NvdW50SW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBib25kaW5nQ3VydmVTdGF0ZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHdhbGxldEJhbGFuY2UsIGFjY291bnQgfSA9IHRoaXMuY29udGV4dC5hY2NvdW50SW5mbztcbiAgICBsZXQgeyB0cmFuc2FjdGlvbiwgd2ViM1N0YXRlIH0gPSB0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGU7XG4gICAgbGV0IHsgdG9rZW5CYWxhbmNlLCBzeW1ib2wgfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBsZXQgbmV0d29yayA9IHJlbGV2YW50Q29pbkhlbHBlci5nZXROZXR3b3JrKHdlYjNTdGF0ZSk7XG4gICAgbmV0d29yayA9IG5ldHdvcmsgPT09ICdtYWluJyA/ICcnIDogbmV0d29yayArICcuJztcbiAgICBsZXQgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBsZXQgdGl0bGUgPSBwcm9wcy50aXRsZSB8fCAnQm9uZGVkIFRva2VuJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW5IZWFkZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHByb3BzLmFjY2VudENvbG9yIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT57dGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbkhlYWRlckJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW5BZGRyZXNzXCI+XG4gICAgICAgICAgICBhZGRyZXNzOiA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovLyR7bmV0d29ya31ldGhlcnNjYW4uaW8vYWRkcmVzcy8ke2FjY291bnR9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FjY291bnR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7dHJhbnNhY3Rpb24uc3RhdHVzICYmIHRyYW5zYWN0aW9uLnN0YXR1cyA9PT0gJ3BlbmRpbmcnID8gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIC8vIG1heFdpZHRoOiAnNzUlJyxcbiAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBwZW5kaW5nIHR4OnsnICd9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vJHtuZXR3b3JrfWV0aGVyc2Nhbi5pby90eC8ke3RyYW5zYWN0aW9uLnR4fWB9PlxuICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi50eH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG57LyogICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3dhbGxldEJhbGFuY2UudG9GaXhlZCgyKX0gRVRIXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Rva2VuQmFsYW5jZSA/IHRva2VuQmFsYW5jZS50b0ZpeGVkKDIpIDogdG9rZW5CYWxhbmNlfSB7c3ltYm9sfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb25kZWRUb2tlbkhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb25kZWRUb2tlbkhlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ3JlYWN0LWZsZXhpYmxlLXN3aXRjaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBnZXROZXR3b3JrIH0gZnJvbSAnLi9yZWxldmFudENvaW5IZWxwZXInO1xuXG5jbGFzcyBCb25kZWRUb2tlblRyYW5zYWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhY2NvdW50SW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdEFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYm9uZGluZ0N1cnZlU3RhdGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQnV5OiB0cnVlLFxuICAgICAgYW1vdW50OiAnJyxcbiAgICB9O1xuXG4gICAgdGhpcy50b2dnbGVCdXkgPSB0aGlzLnRvZ2dsZUJ1eS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYmlnTWF4ID0gMTAwMDAwMDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0Q29udGV4dCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGUubG9hZGluZyAmJiAhbmV4dENvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGUubG9hZGluZykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFtb3VudDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCdXkoKSB7XG4gICAgbGV0IHsgbG9hZGluZyB9ID0gdGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlO1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhbW91bnQ6ICcnLFxuICAgICAgaXNCdXk6ICF0aGlzLnN0YXRlLmlzQnV5XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgbGV0IHsgbG9hZGluZyB9ID0gdGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlO1xuICAgIGxldCB7IGFjY291bnQgfSA9IHRoaXMuY29udGV4dC5hY2NvdW50SW5mbztcbiAgICBsZXQgeyBkZWNpbWFscywgUmVsZXZhbnRDb2luIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuYW1vdW50IDw9IDAgfHwgbG9hZGluZykgcmV0dXJuO1xuXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICdQbGVhc2UgUmV2aWV3ICYgU2lnbiBUcmFuc2FjdGlvbicgfSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0J1eSkge1xuICAgICAgbGV0IGFtb3VudCA9IFdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS5hbW91bnQpO1xuICAgICAgYW1vdW50ID0gbmV3IEJpZ051bWJlcihhbW91bnQsIDEwKS50b1N0cmluZygxMCk7XG4gICAgICBSZWxldmFudENvaW4ubWV0aG9kcy5idXkuY2FjaGVTZW5kKHtcbiAgICAgICAgdmFsdWU6IGFtb3VudCwgZnJvbTogYWNjb3VudFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhbW91bnQgPSBuZXcgQmlnTnVtYmVyKHRoaXMuc3RhdGUuYW1vdW50KS50aW1lcygxMCAqKiBkZWNpbWFscyk7XG4gICAgICBSZWxldmFudENvaW4ubWV0aG9kcy5zZWxsLmNhY2hlU2VuZChhbW91bnQsIHtcbiAgICAgICAgZnJvbTogYWNjb3VudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7XG4gICAgICBjYWxjdWxhdGVQdXJjaGFzZVJldHVybixcbiAgICAgIGNhbGN1bGF0ZVNhbGVSZXR1cm5cbiAgICB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0QWN0aW9ucztcbiAgICBsZXQgeyBsb2FkaW5nLCB3ZWIzU3RhdGUgfSA9IHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZTtcbiAgICBsZXQgeyB3YWxsZXRCYWxhbmNlLCBhY2NvdW50IH0gPSB0aGlzLmNvbnRleHQuYWNjb3VudEluZm87XG4gICAgbGV0IHsgdG9rZW5CYWxhbmNlLCBzeW1ib2wsIGFkZHJlc3MsIHByaWNlRXRoLCBwcmljZURvbGxhciB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuXG4gICAgbGV0IG1ldGFtYXNrTmV0d29yayA9IGdldE5ldHdvcmsod2ViM1N0YXRlKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuYWNjZW50Q29sb3IgfHwgJ2JsdWUnO1xuICAgIGxldCB7IGJpZ01heCB9ID0gdGhpcztcblxuICAgIGxldCBidXR0b24gPSAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHZhbHVlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1zdWJtaXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdCgpfSA+XG4gICAgICAgIHN1Ym1pdFxuICAgICAgPC9idXR0b24+XG4gICAgKTtcblxuICAgIGxldCBzdWJtaXQgPSB0aGlzLnN1Ym1pdDtcblxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBidXR0b24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHsgLi4udGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcyxcbiAgICAgICAgICBvbkNsaWNrOiBzdWJtaXQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoIWRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxwPlxuICAgIC8vICAgICAgIENvbm5lY3RpbmcgdG8gTWV0YW1hc2suLi5cbiAgICAvLyAgICAgPC9wPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG5cbiAgICBsZXQgZGVzaXJlZE5ldHdvcmsgPSB0aGlzLnByb3BzLm5ldHdvcmsgPyB0aGlzLnByb3BzLm5ldHdvcmsudG9Mb3dlckNhc2UoKSA6IG1ldGFtYXNrTmV0d29yaztcblxuICAgIGlmICghYWNjb3VudCB8fCBkZXNpcmVkTmV0d29yayAhPT0gbWV0YW1hc2tOZXR3b3JrKSB7XG4gICAgICBsZXQgbmV0d29yayA9IHRoaXMucHJvcHMubmV0d29yayB8fCAnbWFpbic7XG4gICAgICAvLyBsZXQgZ2V0VG9rZW5zID0gKFxuICAgICAgLy8gICA8cD5cbiAgICAgIC8vICAgICBZb3UgY2FuIGdldCBzb21lIGZyZWUgdGVzdCBuZXR3b3JrIEV0aGVyIGhlcmU6eycgJ31cbiAgICAgIC8vICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mYXVjZXQucmlua2VieS5pby9cIj5odHRwczovL2ZhdWNldC5yaW5rZWJ5LmlvLzwvYT5cbiAgICAgIC8vICAgICA8YnIvPihwcm8tdGlwOiB1c2UgeW91ciBHb29nbGVQbHVzIGFjY291bnQpXG4gICAgICAvLyAgIDwvcD5cbiAgICAgIC8vICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tbm90LWNvbm5lY3RlZFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIFBsZWFzZSBlbmFibGUgeW91ciBNZXRhbWFzayB3YWxsZXQgYW5kIGNvbm5lY3QgdG8gdGhlIHtuZXR3b3JrfSBuZXR3b3JrLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBEb24ndCBoYXZlIE1ldGFtYXNrPyBEb3dubG9hZCBpdCBoZXJlOnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWV0YW1hc2suaW8vXCI+aHR0cHM6Ly9tZXRhbWFzay5pby88L2E+XG4gICAgICAgICAgPC9wPlxuey8qICAgICAgICAgIHtuZXR3b3JrICE9PSAnbWFpbicgPyBnZXRUb2tlbnMgOiBudWxsfVxuKi99ICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGFjdGlvbiA9ICdQYXkgV2l0aCc7XG4gICAgbGV0IGF2YWlsYWJsZSA9IDxhXG4gICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYW1vdW50OiB3YWxsZXRCYWxhbmNlIH0pfSA+XG4gICAgICAgIEF2YWlsYWJsZToge3dhbGxldEJhbGFuY2UudG9GaXhlZCgyKX0gRVRIPC9hPjtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnRW50ZXIgYW1vdW50Li4uICc7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQnV5KSB7XG4gICAgICAvLyBwbGFjZWhvbGRlciA9ICdFbnRlciB0aGUgYW1vdW50IG9mIFJOVCB5b3Ugd2FudCB0byBzZWxsJztcbiAgICAgIGF2YWlsYWJsZSA9IDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhbW91bnQ6IHRva2VuQmFsYW5jZSB9KX0+XG4gICAgICAgIEF2YWlsYWJsZToge3Rva2VuQmFsYW5jZS50b0ZpeGVkKDIpfSB7c3ltYm9sfVxuICAgICAgPC9hPjtcbiAgICAgIGFjdGlvbiA9ICdTZWxsJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIHN3aXRjaFN0eWxlcz17e1xuICAgICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogJzJweCBzb2xpZCAnICsgY29sb3IuXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlzQnV5fVxuICAgICAgICAgICAgY2lyY2xlU3R5bGVzPXt7XG4gICAgICAgICAgICAgIGRpYW1ldGVyOiAyNSxcbiAgICAgICAgICAgICAgb25Db2xvcjogY29sb3IsXG4gICAgICAgICAgICAgIG9mZkNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhYmVscz17eyBvbjogJ0J1eScsIG9mZjogJ1NlbGwnIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGVCdXkoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlblRyYW5zYWN0XCJcbiAgICAgICAgPlxuXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleFwiIHN0eWxlPXt7IGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvciB9fT5cbiAgICAgICAgICAgIHthY3Rpb259eyc6ICd9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcwJykgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogJycgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbWF4PXt0aGlzLnN0YXRlLmlzQnV5ID9cbiAgICAgICAgICAgICAgICAoYWRkcmVzcyA/IHdhbGxldEJhbGFuY2UudG9GaXhlZCg0KSA6IGJpZ01heClcbiAgICAgICAgICAgICAgICA6IHRva2VuQmFsYW5jZS50b0ZpeGVkKDQpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICogMSA+IGV2ZW50LnRhcmdldC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGV2ZW50LnRhcmdldC5tYXg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZXZlbnQudGFyZ2V0LnZhbHVlIHx8IGV2ZW50LnRhcmdldC52YWx1ZSAqIDEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmlzQnV5ID8gJ0VUSCcgOiBzeW1ib2x9PC9kaXY+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jy0tYm9uZGVkVG9rZW4tYXZhaWxhYmxlJ30+XG4gICAgICAgICAgICB7YXZhaWxhYmxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICA8ZGl2PlJlY2lldmU6PC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQnV5ID9cbiAgICAgICAgICAgICAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4oeyBhbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50IH0pIDpcbiAgICAgICAgICAgICAgY2FsY3VsYXRlU2FsZVJldHVybih7IGFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgfSl9XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmlzQnV5ID8gJ0VUSCcgOiBzeW1ib2x9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgIDxkaXY+UmF0ZTo8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgMSB7c3ltYm9sfSA9IHtwcmljZUV0aH0gRVRIICgke3ByaWNlRG9sbGFyfSlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FkZHJlc3MgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1zdWJtaXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb25kZWRUb2tlblRyYW5zYWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuVHJhbnNhY3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUmVjaGFydHMgPSByZXF1aXJlKCdyZWNoYXJ0cycpO1xuXG5jb25zdCB7XG4gIEFyZWEsXG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgVG9vbHRpcCxcbiAgUmVmZXJlbmNlRG90LFxuICBDb21wb3NlZENoYXJ0XG59ID0gUmVjaGFydHM7XG5cbmNsYXNzIEN1cnZlQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNvbnRyYWN0QWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0Q2hhcnREYXRhID0gdGhpcy5nZXRDaGFydERhdGEuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRvY3VtZW50UmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGdldENoYXJ0RGF0YSgpIHtcbiAgICBsZXQgeyBjYWxjdWxhdGVTYWxlUmV0dXJuLCBjYWxjdWxhdGVCdXlQcmljZSB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0QWN0aW9ucztcbiAgICBsZXQgeyB0b3RhbFN1cHBseSwgcmVzZXJ2ZVJhdGlvLCBwb29sQmFsYW5jZSB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGxldCBwcm9wcyA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcblxuICAgIGxldCBkYXRhID0gW107XG4gICAgbGV0IHN0ZXAgPSBNYXRoLnJvdW5kKHRvdGFsU3VwcGx5IC8gMTAwKTtcbiAgICBsZXQgcHJpY2UgPSBwb29sQmFsYW5jZSAvIChyZXNlcnZlUmF0aW8gKiB0b3RhbFN1cHBseSk7XG4gICAgbGV0IGN1cnJlbnRQcmljZSA9IHsgc3VwcGx5OiB0b3RhbFN1cHBseSwgdmFsdWU6IHByaWNlIH07XG5cbiAgICBmb3IgKGxldCBpID0gc3RlcDsgaSA8IHRvdGFsU3VwcGx5ICogMS41OyBpICs9IHN0ZXApIHtcbiAgICAgIGlmIChpIDwgdG90YWxTdXBwbHkpIHtcbiAgICAgICAgbGV0IGV0aCA9IDEgKiBjYWxjdWxhdGVTYWxlUmV0dXJuKHsgLi4ucHJvcHMsIGFtb3VudDogdG90YWxTdXBwbHkgLSBpIH0pO1xuICAgICAgICBwcmljZSA9IChwYXJzZUZsb2F0KHBvb2xCYWxhbmNlLCAxMCkgLSBldGgpIC8gKHJlc2VydmVSYXRpbyAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBzdXBwbHk6IGksIHNlbGw6IHByaWNlLCB2YWx1ZTogcHJpY2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGkgPiB0b3RhbFN1cHBseSkge1xuICAgICAgICBsZXQgZXRoID0gMSAqIGNhbGN1bGF0ZUJ1eVByaWNlKHsgLi4ucHJvcHMsIGFtb3VudDogaSAtIHRvdGFsU3VwcGx5IH0pO1xuICAgICAgICBwcmljZSA9IChldGggKyBwYXJzZUZsb2F0KHBvb2xCYWxhbmNlLCAxMCkpIC8gKHJlc2VydmVSYXRpbyAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBzdXBwbHk6IDEgKiBpLCBidXk6IHByaWNlLCB2YWx1ZTogMSAqIHByaWNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBkYXRhLCBjdXJyZW50UHJpY2UgfTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5kb2N1bWVudFJlYWR5KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgeyBkYXRhLCBjdXJyZW50UHJpY2UgfSA9IHRoaXMuZ2V0Q2hhcnREYXRhKCk7XG4gICAgbGV0IHdpZHRoID0gTWF0aC5taW4oNjAwLCAod2luZG93LmlubmVyV2lkdGggPCA0ODAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDQ4MCkgLSAzMCk7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoICogMiAvIDM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8Q29tcG9zZWRDaGFydFxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nIH19XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgbWFyZ2luPXt7IHRvcDogMTAsIHJpZ2h0OiAzMCwgbGVmdDogMCwgYm90dG9tOiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIi8+XG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJzdXBwbHlcIiB0eXBlPXsnbnVtYmVyJ30gLz5cbiAgICAgICAgICA8WUF4aXMgZGF0YUtleT1cInZhbHVlXCIgdHlwZT17J251bWJlcid9IC8+XG4gICAgICAgICAgPFRvb2x0aXAvPlxuXG4gICAgICAgICAgPEFyZWEgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfSBkb3RzPXtmYWxzZX0gc3RhY2tPZmZzZXQ9eydub25lJ30gZGF0YUtleT1cInZhbHVlXCIgbmFtZT17J3ByaWNlJ30ga2V5PXsncHJpY2UnfSBzdHJva2U9J2JsdWUnIGZpbGw9J25vbmUnLz5cblxuICAgICAgICAgIDxBcmVhIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX0gc3RhY2tPZmZzZXQ9eydub25lJ30gZGF0YUtleT1cInNlbGxcIiBzdHJva2U9XCJibHVlXCIgZmlsbD0nYmx1ZScgLz5cblxuICAgICAgICAgIDxSZWZlcmVuY2VEb3RcbiAgICAgICAgICAgIGlzRnJvbnQ9e3RydWV9XG4gICAgICAgICAgICBhbHdheXNTaG93PXt0cnVlfVxuICAgICAgICAgICAgeD17Y3VycmVudFByaWNlLnN1cHBseX1cbiAgICAgICAgICAgIHk9e2N1cnJlbnRQcmljZS52YWx1ZX1cbiAgICAgICAgICAgIHI9ezh9XG4gICAgICAgICAgICBmaWxsPVwiYmx1ZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgIDwvQ29tcG9zZWRDaGFydD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VydmVDaGFydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9DaGFydC5qcyIsImltcG9ydCBCb25kZWRUb2tlbkNvbnRhaW5lciBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5Db250YWluZXInO1xuaW1wb3J0IEJvbmRlZFRva2VuSGVhZGVyIGZyb20gJy4uL3NyYy9Cb25kZWRUb2tlbkhlYWRlcic7XG5pbXBvcnQgQm9uZGVkVG9rZW5UcmFuc2FjdCBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5UcmFuc2FjdCc7XG5pbXBvcnQgQm9uZGVkVG9rZW5BZHZhbmNlZCBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZCc7XG5pbXBvcnQgQm9uZGVkVG9rZW5CYWxhbmNlIGZyb20gJy4uL3NyYy9Cb25kZWRUb2tlbkJhbGFuY2UnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL3NyYy9DaGFydCc7XG5pbXBvcnQgKiBhcyBCb25kZWRUb2tlblV0aWxzIGZyb20gJy4uL3NyYy9yZWxldmFudENvaW5IZWxwZXInO1xuXG5leHBvcnQge1xuICBCb25kZWRUb2tlbkNvbnRhaW5lcixcbiAgQm9uZGVkVG9rZW5IZWFkZXIsXG4gIEJvbmRlZFRva2VuVHJhbnNhY3QsXG4gIEJvbmRlZFRva2VuQWR2YW5jZWQsXG4gIENoYXJ0LFxuICBCb25kZWRUb2tlblV0aWxzLFxuICBCb25kZWRUb2tlbkJhbGFuY2Vcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlnbnVtYmVyLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmlnbnVtYmVyLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGgtcHJpY2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldGgtcHJpY2VcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVjaGFydHNcIlxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWIzXCJcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9