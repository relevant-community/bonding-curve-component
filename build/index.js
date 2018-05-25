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
      priceEth = priceEth.toFixed(6);

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
        var amount = _web2.default.utils.toWei(this.state.amount.toString());
        amount = new _bignumber2.default(amount.toString());
        RelevantCoin.methods.buy.cacheSend({
          value: amount, from: account
        });
      } else {
        var _amount = new _bignumber2.default(this.state.amount.toString()).times(Math.pow(10, decimals));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2NmZTNhMTg3ZGViNzFkZWIxMzQiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWxldmFudENvaW5IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZsZXhpYmxlLXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtdXRpbHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5CYWxhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Cb25kZWRUb2tlbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9uZGVkVG9rZW5IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvbmRlZFRva2VuVHJhbnNhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmlnbnVtYmVyLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXRoLXByaWNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiZ2V0QWNjb3VudEJhbGFuY2UiLCJmb3JtYXRQYXJhbSIsImdldFZhbHVlIiwiaW5pdFBhcmFtcyIsImdldEFsbCIsImdldE5ldHdvcmsiLCJ1dGlscyIsInJlcXVpcmUiLCJkZWZhdWx0Q29udmVydCIsImNvbnZlcnQiLCJkZWNpbWFscyIsInBhcmFtcyIsInRvdGFsU3VwcGx5IiwicG9vbEJhbGFuY2UiLCJyZXNlcnZlUmF0aW8iLCJpbmZsYXRpb25TdXBwbHkiLCJyZXdhcmRQb29sIiwiZGlzdHJpYnV0ZWRSZXdhcmRzIiwidmlydHVhbFN1cHBseSIsInZpcnR1YWxCYWxhbmNlIiwic3ltYm9sIiwiYWNjb3VudEJhbGFuY2VzIiwiYWNjb3VudCIsImJhbGFuY2UiLCJwYXJzZUZsb2F0IiwiZnJvbVdlaSIsImVyciIsImNvbnRyYWN0IiwidmFsdWUiLCJwYXJhbSIsInAiLCJzdHJpbmciLCJzb1N0cmluZyIsIm1ldGhvZCIsImFyZ3MiLCJpbml0aWFsaXplZCIsInJlc3VsdCIsIm1ldGhvZHMiLCJjYWNoZUNhbGwiLCJmb3JFYWNoIiwid2ViMyIsIm5ldHdvcmsiLCJuZXR3b3JrSWQiLCJCb25kZWRUb2tlbkFkdmFuY2VkIiwicHJvcHMiLCJzdGF0ZSIsImFkdmFuY2VkIiwidG9nZ2xlQWR2YW5jZWQiLCJiaW5kIiwiYmlnTWF4Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImNvbnRleHQiLCJjb250cmFjdEFjdGlvbnMiLCJjb250cmFjdFBhcmFtcyIsImFkZHJlc3MiLCJ3aWR0aCIsImNvbG9yIiwiZGlhbWV0ZXIiLCJvbkNvbG9yIiwib2ZmQ29sb3IiLCJvbiIsIm9mZiIsImV2ZW50IiwidG9GaXhlZCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsImVsZW1lbnQiLCJCb25kZWRUb2tlbkJhbGFuY2UiLCJhY2NvdW50SW5mbyIsIndlYjNTdGF0ZSIsImJvbmRpbmdDdXJ2ZVN0YXRlIiwidG9rZW5CYWxhbmNlIiwicHJpY2VEb2xsYXIiLCJzdGF0dXMiLCJjb250cmFjdEhlbHBlciIsImV0aFByaWNlIiwiQm9uZGVkVG9rZW5Db250YWluZXIiLCJjYWxjdWxhdGVTYWxlUmV0dXJuIiwiY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4iLCJjYWxjdWxhdGVCdXlQcmljZSIsImdldENoaWxkQ29udGV4dCIsImluaXRTdGF0ZSIsImdldENvbnRyYWN0UGFyYW1zIiwibG9hZGluZyIsIndhbGxldEJhbGFuY2UiLCJ0cmFuc2FjdGlvbiIsIkVUSFVTRCIsIm5leHRTdGF0ZSIsImRyaXp6bGVTdGF0dXMiLCJSZWxldmFudENvaW4iLCJwcmljZUV0aCIsImNhbGN1bGF0ZVByaWNlIiwiYWNjb3VudHMiLCJkcml6emxlIiwidGhlbiIsInJlcGxhY2UiLCJmb3JjZVVwZGF0ZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm5leHRQcm9wcyIsImwiLCJ0cmFuc2FjdGlvblN0YWNrIiwibGVuZ3RoIiwicmVjZW50VHJhbnNhY3Rpb24iLCJsYXRlc3RTdGF0dXMiLCJ0cmFuc2FjdGlvbnMiLCJ0eCIsInR5cGUiLCJ0YXJnZXQiLCJpc0FkZHJlc3MiLCJNYXRoIiwibWF4IiwiYW1vdW50Iiwicm91bmQiLCJmb28iLCJ0aGVtZUNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjaGlsZENvbnRleHRUeXBlcyIsInJlbGV2YW50Q29pbkhlbHBlciIsIkJvbmRlZFRva2VuSGVhZGVyIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiYWNjZW50Q29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJCb25kZWRUb2tlblRyYW5zYWN0IiwiaXNCdXkiLCJ0b2dnbGVCdXkiLCJzdWJtaXQiLCJuZXh0Q29udGV4dCIsInRvV2VpIiwidG9TdHJpbmciLCJidXkiLCJjYWNoZVNlbmQiLCJmcm9tIiwidGltZXMiLCJzZWxsIiwibWV0YW1hc2tOZXR3b3JrIiwiYnV0dG9uIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsImRlc2lyZWROZXR3b3JrIiwidG9Mb3dlckNhc2UiLCJhY3Rpb24iLCJhdmFpbGFibGUiLCJwbGFjZWhvbGRlciIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJlIiwiUmVjaGFydHMiLCJBcmVhIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVmZXJlbmNlRG90IiwiQ29tcG9zZWRDaGFydCIsIkN1cnZlQ2hhcnQiLCJnZXRDaGFydERhdGEiLCJkb2N1bWVudFJlYWR5IiwiZGF0YSIsInN0ZXAiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsInN1cHBseSIsImkiLCJldGgiLCJwdXNoIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsIkJvbmRlZFRva2VuVXRpbHMiLCJDaGFydCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7QUNEdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7Ozs7OztBQ0x6QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQTtB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cUM7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2NmZTNhMTg3ZGViNzFkZWIxMzQiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcblxubGV0IGRlZmF1bHRDb252ZXJ0ID0ge1xuICBjb252ZXJ0OiB0cnVlLFxuICBkZWNpbWFsczogJ2RlY2ltYWxzJ1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcbiAgdG90YWxTdXBwbHk6IGRlZmF1bHRDb252ZXJ0LFxuICBkZWNpbWFsczogeyBjb252ZXJ0OiBmYWxzZSB9LFxuICBwb29sQmFsYW5jZTogZGVmYXVsdENvbnZlcnQsXG4gIHJlc2VydmVSYXRpbzogeyBjb252ZXJ0OiB0cnVlLCBkZWNpbWFsczogNiB9LFxuICBpbmZsYXRpb25TdXBwbHk6IGRlZmF1bHRDb252ZXJ0LFxuICByZXdhcmRQb29sOiBkZWZhdWx0Q29udmVydCxcbiAgZGlzdHJpYnV0ZWRSZXdhcmRzOiBkZWZhdWx0Q29udmVydCxcbiAgdmlydHVhbFN1cHBseTogZGVmYXVsdENvbnZlcnQsXG4gIHZpcnR1YWxCYWxhbmNlOiBkZWZhdWx0Q29udmVydCxcbiAgc3ltYm9sOiB7IGNvbnZlcnQ6IGZhbHNlIH0sXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2NvdW50QmFsYW5jZShhY2NvdW50QmFsYW5jZXMsIGFjY291bnQpIHtcbiAgaWYgKCFhY2NvdW50KSByZXR1cm4gMDtcbiAgdHJ5IHtcbiAgICBsZXQgYmFsYW5jZSA9IGFjY291bnRCYWxhbmNlc1thY2NvdW50XTtcbiAgICBpZiAoIWJhbGFuY2UpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHV0aWxzLmZyb21XZWkoYmFsYW5jZSksIDEwKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBhcmFtKGNvbnRyYWN0LCB2YWx1ZSwgcGFyYW0pIHtcbiAgLy8gaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gIGxldCBwID0gcGFyYW1zW3BhcmFtXSB8fCBkZWZhdWx0Q29udmVydDtcbiAgaWYgKHAuY29udmVydCAmJiBwLmRlY2ltYWxzID09PSAnZGVjaW1hbHMnKSB7XG4gICAgbGV0IGRlY2ltYWxzID0gZ2V0VmFsdWUoY29udHJhY3QsICdkZWNpbWFscycpO1xuICAgIHZhbHVlIC89ICgxMCAqKiBkZWNpbWFscyk7XG4gIH0gZWxzZSBpZiAocC5jb252ZXJ0ICYmIHAuZGVjaW1hbHMpIHtcbiAgICB2YWx1ZSAvPSAoMTAgKiogcC5kZWNpbWFscyk7XG4gIH1cbiAgaWYgKHAuc3RyaW5nKSB2YWx1ZS5zb1N0cmluZygpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShjb250cmFjdCwgbWV0aG9kLCBhcmdzKSB7XG4gIGlmICghY29udHJhY3QgfHwgIWNvbnRyYWN0LmluaXRpYWxpemVkKSByZXR1cm4gbnVsbDtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKGFyZ3MpIHtcbiAgICByZXN1bHQgPSBjb250cmFjdC5tZXRob2RzW21ldGhvZF0uY2FjaGVDYWxsKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGNvbnRyYWN0Lm1ldGhvZHNbbWV0aG9kXS5jYWNoZUNhbGwoKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0UGFyYW0oY29udHJhY3QsIHJlc3VsdCwgbWV0aG9kKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFBhcmFtcyhjb250cmFjdCkge1xuICBpZiAoIWNvbnRyYWN0IHx8ICFjb250cmFjdC5pbml0aWFsaXplZCkgcmV0dXJuIHt9O1xuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW0gPT4ge1xuICAgIGdldFZhbHVlKGNvbnRyYWN0LCBwYXJhbSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsKGNvbnRyYWN0KSB7XG4gIGlmICghY29udHJhY3QgfHwgIWNvbnRyYWN0LmluaXRpYWxpemVkKSByZXR1cm4ge307XG4gIGxldCByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICByZXN1bHRbcGFyYW1dID0gZ2V0VmFsdWUoY29udHJhY3QsIHBhcmFtKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXR3b3JrKHdlYjMpIHtcbiAgaWYgKCF3ZWIzKSByZXR1cm4gbnVsbDtcbiAgbGV0IG5ldHdvcmsgPSB3ZWIzLm5ldHdvcmtJZDtcbiAgc3dpdGNoIChuZXR3b3JrKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdtYWluJztcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ21vcmRlbic7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdyb3BzdGVuJztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gJ3JpbmtlYnknO1xuICAgIGNhc2UgNDI6XG4gICAgICByZXR1cm4gJ2tvdmFuJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICd1bmtub3duJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbGV2YW50Q29pbkhlbHBlci5qcyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmxleGlibGUtc3dpdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZmxleGlibGUtc3dpdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjMtdXRpbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWIzLXV0aWxzXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ3JlYWN0LWZsZXhpYmxlLXN3aXRjaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCb25kZWRUb2tlbkFkdmFuY2VkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdEFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWR2YW5jZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy50b2dnbGVBZHZhbmNlZCA9IHRoaXMudG9nZ2xlQWR2YW5jZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJpZ01heCA9IDEwMDAwMDA7XG4gIH1cblxuICB0b2dnbGVBZHZhbmNlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFkdmFuY2VkOiAhdGhpcy5zdGF0ZS5hZHZhbmNlZFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IG9uQ2hhbmdlIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RBY3Rpb25zO1xuICAgIGxldCB7XG4gICAgICBwb29sQmFsYW5jZSxcbiAgICAgIHRvdGFsU3VwcGx5LFxuICAgICAgcmVzZXJ2ZVJhdGlvLFxuICAgICAgYWRkcmVzc1xuICAgIH0gPSB0aGlzLmNvbnRleHQuY29udHJhY3RQYXJhbXM7XG4gICAgbGV0IHsgYmlnTWF4IH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIC0tQm9uZGVkVG9rZW5BZHZhbmNlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAtLWJvbmRlZFRva2VuLWZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIHN3aXRjaFN0eWxlcz17eyB3aWR0aDogMTEwLCBjb2xvcjogJ2dyZXknIH19XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWR2YW5jZWR9XG4gICAgICAgICAgY2lyY2xlU3R5bGVzPXt7IGRpYW1ldGVyOiAxNiwgb25Db2xvcjogJ2dyZXknLCBvZmZDb2xvcjogJ2xpZ2h0Z3JleScgfX1cbiAgICAgICAgICBsYWJlbHM9e3sgb246ICdBZHZhbmNlZCcsIG9mZjogJ0FkdmFuY2VkJyB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUFkdmFuY2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuYWR2YW5jZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAtLUJvbmRlZFRva2VuQWR2YW5jZWQtb3BlblwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlRva2VuIEFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAnYWRkcmVzcycpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICAgIDxkaXY+UG9vbCBCYWxhbmNlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1ldGhcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshIWFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb29sQmFsYW5jZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsICdwb29sQmFsYW5jZScpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICB7IWFkZHJlc3MgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwb29sQmFsYW5jZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIG1heD17YmlnTWF4fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3Bvb2xCYWxhbmNlJyl9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlJhdGlvPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1yYXRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyEhYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNlcnZlUmF0aW8udG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3Jlc2VydmVSYXRpbycpfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICB7IWFkZHJlc3MgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNlcnZlUmF0aW8udG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAncmVzZXJ2ZVJhdGlvJyl9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLWZsZXggLS1ib25kZWRUb2tlblRyYW5zYWN0XCI+XG4gICAgICAgICAgICA8ZGl2PlRvdGFsIFN1cHBseTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tdG9rZW5cIj5cbiAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshIWFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxTdXBwbHkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwgJ3RvdGFsU3VwcGx5Jyl9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIHshYWRkcmVzcyAmJiAoXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsU3VwcGx5LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgbWF4PXtiaWdNYXh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LCAndG90YWxTdXBwbHknKX0gLz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb25kZWRUb2tlbkFkdmFuY2VkLnByb3BUeXBlcyA9IHtcbiAgdG90YWxTdXBwbHk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlc2VydmVSYXRpbzogUHJvcFR5cGVzLm51bWJlcixcbiAgcG9vbEJhbGFuY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJpZ01heDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZGRyZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmRlZFRva2VuQWR2YW5jZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCb25kZWRUb2tlbkJhbGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGFjY291bnRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvbmRpbmdDdXJ2ZVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgYWNjb3VudCB9ID0gdGhpcy5jb250ZXh0LmFjY291bnRJbmZvO1xuICAgIGxldCB7IHdlYjNTdGF0ZSB9ID0gdGhpcy5jb250ZXh0LmJvbmRpbmdDdXJ2ZVN0YXRlO1xuICAgIGxldCB7IHRva2VuQmFsYW5jZSwgc3ltYm9sLCBwcmljZURvbGxhciB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGlmICh3ZWIzU3RhdGUuc3RhdHVzICE9PSAnaW5pdGlhbGl6ZWQnKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW5CYWxhbmNlXCI+XG4gICAgICAgICAge3Rva2VuQmFsYW5jZSA/IHRva2VuQmFsYW5jZS50b0ZpeGVkKDIpIDogdG9rZW5CYWxhbmNlfSB7c3ltYm9sfVxuICAgICAgICAgIHsnICd9KCR7KHByaWNlRG9sbGFyICogdG9rZW5CYWxhbmNlKS50b0ZpeGVkKDIpfSlcbiAgICAgICAgPC9kaXY+XG57LyogICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbkhlYWRlckJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW5BZGRyZXNzXCI+XG4gICAgICAgICAgICBhZGRyZXNzOiA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovLyR7bmV0d29ya31ldGhlcnNjYW4uaW8vYWRkcmVzcy8ke2FjY291bnR9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FjY291bnR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb25kZWRUb2tlbkJhbGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9uZGVkVG9rZW5CYWxhbmNlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBjb250cmFjdEhlbHBlciBmcm9tICcuL3JlbGV2YW50Q29pbkhlbHBlcic7XG5cbmNvbnN0IGV0aFByaWNlID0gcmVxdWlyZSgnZXRoLXByaWNlJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcblxuY2xhc3MgQm9uZGVkVG9rZW5Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVTYWxlUmV0dXJuID0gdGhpcy5jYWxjdWxhdGVTYWxlUmV0dXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxjdWxhdGVQdXJjaGFzZVJldHVybiA9IHRoaXMuY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUJ1eVByaWNlID0gdGhpcy5jYWxjdWxhdGVCdXlQcmljZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluaXRTdGF0ZSA9IHRoaXMuaW5pdFN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRDb250cmFjdFBhcmFtcyA9IHRoaXMuZ2V0Q29udHJhY3RQYXJhbXMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZGRyZXNzOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgYWNjb3VudDogbnVsbCxcbiAgICAgIHdhbGxldEJhbGFuY2U6IDAsXG4gICAgICB0b2tlbkJhbGFuY2U6IDAsXG4gICAgICBwb29sQmFsYW5jZTogNDAwMDAwMCxcbiAgICAgIHRvdGFsU3VwcGx5OiAxMDAwMDAwLFxuICAgICAgcmVzZXJ2ZVJhdGlvOiAwLjIsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgfTtcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0ge307XG4gICAgdGhpcy5FVEhVU0QgPSAwO1xuICB9XG5cbiAgLy8geW91IG11c3Qgc3BlY2lmeSB3aGF0IHlvdeKAmXJlIGFkZGluZyB0byB0aGUgY29udGV4dFxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgY29udHJhY3RQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYWNjb3VudEluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udHJhY3RBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvbmRpbmdDdXJ2ZVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29udHJhY3RQYXJhbXNcbiAgICB9O1xuICB9XG5cbiAgZ2V0Q29udHJhY3RQYXJhbXMocHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGxldCBzdGF0ZSA9IHByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgY29udHJhY3RIZWxwZXIuZ2V0QWxsKHByb3BzLlJlbGV2YW50Q29pbikgOlxuICAgICAgdGhpcy5zdGF0ZTtcbiAgICBsZXQge1xuICAgICAgcG9vbEJhbGFuY2UsXG4gICAgICB0b3RhbFN1cHBseSxcbiAgICAgIHJlc2VydmVSYXRpbyxcbiAgICB9ID0gc3RhdGU7XG5cbiAgICBsZXQgd2FsbGV0QmFsYW5jZSA9IGNvbnRyYWN0SGVscGVyXG4gICAgICAuZ2V0QWNjb3VudEJhbGFuY2UocHJvcHMuYWNjb3VudEJhbGFuY2VzLCB0aGlzLmFjY291bnQpIHx8XG4gICAgICB0aGlzLnN0YXRlLndhbGxldEJhbGFuY2U7XG5cbiAgICBsZXQgdG9rZW5CYWxhbmNlID0gdGhpcy5hY2NvdW50ID9cbiAgICAgIGNvbnRyYWN0SGVscGVyLmdldFZhbHVlKHByb3BzLlJlbGV2YW50Q29pbiwgJ2JhbGFuY2VPZicsIHRoaXMuYWNjb3VudCkgOlxuICAgICAgMDtcblxuICAgIGxldCBwcmljZUV0aCA9IHRoaXMuY2FsY3VsYXRlUHJpY2UodG90YWxTdXBwbHksIHBvb2xCYWxhbmNlLCByZXNlcnZlUmF0aW8pO1xuXG4gICAgbGV0IHByaWNlRG9sbGFyID0gKHByaWNlRXRoICogdGhpcy5FVEhVU0QpLnRvRml4ZWQoMik7XG4gICAgcHJpY2VFdGggPSBwcmljZUV0aC50b0ZpeGVkKDYpO1xuXG4gICAgbGV0IGNvbnRyYWN0UGFyYW1zID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICB0b2tlbkJhbGFuY2UsXG4gICAgICBSZWxldmFudENvaW46IHByb3BzLlJlbGV2YW50Q29pbixcbiAgICAgIGFkZHJlc3M6IG5leHRTdGF0ZS5hZGRyZXNzLFxuICAgICAgcHJpY2VFdGgsXG4gICAgICBwcmljZURvbGxhclxuICAgIH07XG5cbiAgICBsZXQgYWNjb3VudEluZm8gPSB7XG4gICAgICBhY2NvdW50OiBwcm9wcy5hY2NvdW50c1swXSxcbiAgICAgIHdhbGxldEJhbGFuY2VcbiAgICB9O1xuXG4gICAgbGV0IGNvbnRyYWN0QWN0aW9ucyA9IHtcbiAgICAgIGNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuOiB0aGlzLmNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuLFxuICAgICAgY2FsY3VsYXRlU2FsZVJldHVybjogdGhpcy5jYWxjdWxhdGVTYWxlUmV0dXJuLFxuICAgICAgY2FsY3VsYXRlQnV5UHJpY2U6IHRoaXMuY2FsY3VsYXRlQnV5UHJpY2UsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICB9O1xuXG4gICAgbGV0IGJvbmRpbmdDdXJ2ZVN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdGhpcy50cmFuc2FjdGlvbi5zdGF0dXMgPT09ICdwZW5kaW5nJyxcbiAgICAgIHRyYW5zYWN0aW9uOiB0aGlzLnRyYW5zYWN0aW9uLFxuICAgICAgd2ViM1N0YXRlOiBwcm9wcy5kcml6emxlLndlYjMsXG4gICAgICBkcml6emxlU3RhdHVzOiBwcm9wcy5kcml6emxlU3RhdHVzXG4gICAgfTtcblxuICAgIHRoaXMuY29udHJhY3RQYXJhbXMgPSB7XG4gICAgICBjb250cmFjdFBhcmFtcyxcbiAgICAgIGNvbnRyYWN0QWN0aW9ucyxcbiAgICAgIGFjY291bnRJbmZvLFxuICAgICAgYm9uZGluZ0N1cnZlU3RhdGVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZ2V0Q29udHJhY3RQYXJhbXModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBldGhQcmljZSgndXNkJylcbiAgICAgIC50aGVuKEVUSFVTRCA9PiB7XG4gICAgICAgIEVUSFVTRCA9IEVUSFVTRFswXS5yZXBsYWNlKCdVU0Q6ICcsJycpO1xuICAgICAgICB0aGlzLkVUSFVTRCA9IHBhcnNlRmxvYXQoRVRIVVNEKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kcml6emxlU3RhdHVzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgbGV0IGFjY291bnQgPSBuZXh0UHJvcHMuYWNjb3VudHNbMF0gfHwgbnVsbDtcbiAgICBpZiAoIXRoaXMucHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCAmJiBuZXh0UHJvcHMuZHJpenpsZVN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgIC8vIGFkZHJlc3MgbmVlZHMgdG8gYmUgaW4gc3RhdGUgaW4gY2FzZSB3ZSBlZGl0XG4gICAgICAvLyBUT0RPIGNvbWUgdXAgd2l0aCBhIGJldHRlciB3YXkgdG8gdG9nZ2xlIHRoaXNcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhZGRyZXNzOiBuZXh0UHJvcHMuUmVsZXZhbnRDb2luLmFkZHJlc3NcbiAgICAgIH0pO1xuICAgICAgY29udHJhY3RIZWxwZXIuaW5pdFBhcmFtcyhuZXh0UHJvcHMuUmVsZXZhbnRDb2luKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHRoaXMuaW5pdFN0YXRlKG5leHRQcm9wcyk7XG5cbiAgICB0aGlzLmdldENvbnRyYWN0UGFyYW1zKG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgfVxuXG4gIGluaXRTdGF0ZShwcm9wcykge1xuICAgIGxldCBhY2NvdW50ID0gcHJvcHMuYWNjb3VudHNbMF0gfHwgbnVsbDtcbiAgICBpZiAoYWNjb3VudCAhPT0gdGhpcy5hY2NvdW50KSB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWRkcmVzcyAhPT0gcHJvcHMuUmVsZXZhbnRDb2luLmFkZHJlc3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBwcm9wcy5SZWxldmFudENvaW4uYWRkcmVzcyB9KTtcbiAgICB9XG5cbiAgICBsZXQgbCA9IHByb3BzLmRyaXp6bGUudHJhbnNhY3Rpb25TdGFjay5sZW5ndGg7XG4gICAgaWYgKGwpIHtcbiAgICAgIGxldCByZWNlbnRUcmFuc2FjdGlvbiA9IHByb3BzLmRyaXp6bGUudHJhbnNhY3Rpb25TdGFja1tsIC0gMV07XG4gICAgICBsZXQgbGF0ZXN0U3RhdHVzID0gcHJvcHMuZHJpenpsZS50cmFuc2FjdGlvbnNbcmVjZW50VHJhbnNhY3Rpb25dLnN0YXR1cztcbiAgICAgIGlmIChsYXRlc3RTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uID0ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgIHN0YXR1czogbGF0ZXN0U3RhdHVzLFxuICAgICAgICAgIHR4OiByZWNlbnRUcmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50LCB0eXBlKSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogbnVsbDtcbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbiAgICBpZiAodHlwZSA9PT0gJ2FkZHJlc3MnKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICYmICF1dGlscy5pc0FkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgICAvLyBUT0RPIHVwZGF0ZSBjb250cmFjdFxuICAgICAgICAvLyBjb250cmFjdFV0aWxzLnVwZGF0ZUNvbnRyYWN0QWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3RvdGFsU3VwcGx5Jykge1xuICAgICAgdmFsdWUgPSBNYXRoLm1heCgxMDAwLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFuc2FjdGlvbi5zdGF0dXMgPT09ICdwZW5kaW5nJykgcmV0dXJuO1xuICAgIGxldCBzdGF0ZSA9IHt9O1xuICAgIHN0YXRlW3R5cGVdID0gZXZlbnQudGFyZ2V0ID8gdmFsdWUgOiBldmVudDtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVByaWNlKHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvKSB7XG4gICAgcmV0dXJuIHBvb2xCYWxhbmNlIC8gKHRvdGFsU3VwcGx5ICogcmVzZXJ2ZVJhdGlvKTtcbiAgfVxuXG4gIC8qIGNhbGN1bGF0ZVNhbGVSZXR1cm5cbiAgICBSZXR1cm4gPSBfY29ubmVjdG9yQmFsYW5jZSAqICgxIC0gKDEgLSBfc2VsbEFtb3VudCAvIF9zdXBwbHkpIF4gKDEgLyAoX2Nvbm5lY3RvcldlaWdodCAvIDEwMDAwMDApKSlcbiAgKi9cbiAgY2FsY3VsYXRlU2FsZVJldHVybihwcm9wcykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY29udHJhY3RQYXJhbXMuY29udHJhY3RQYXJhbXMgfHwgdGhpcy5zdGF0ZTtcblxuICAgIGxldCB7IHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvLCBhbW91bnQgfSA9IHsgLi4uc3RhdGUsIC4uLnByb3BzIH07XG4gICAgaWYgKCF0b3RhbFN1cHBseSB8fCAhcG9vbEJhbGFuY2UgfHwgIXJlc2VydmVSYXRpbyB8fCAhYW1vdW50KSByZXR1cm4gJzAnO1xuXG4gICAgaWYgKHRvdGFsU3VwcGx5ID09PSAwIHx8IHJlc2VydmVSYXRpbyA9PT0gMCB8fCBwb29sQmFsYW5jZSA9PT0gMCB8fCBhbW91bnQgPT09IDApIHJldHVybiAnMCc7XG4gICAgaWYgKGFtb3VudCA9PT0gdG90YWxTdXBwbHkpIHJldHVybiBwb29sQmFsYW5jZTtcbiAgICBpZiAocmVzZXJ2ZVJhdGlvID09PSAxKSByZXR1cm4gcG9vbEJhbGFuY2U7XG5cbiAgICAvLyBSZXR1cm4gPSBfY29ubmVjdG9yQmFsYW5jZSAqICgxIC0gKDEgLSBfc2VsbEFtb3VudCAvIF9zdXBwbHkpIF4gKDEgLyAoX2Nvbm5lY3RvcldlaWdodCAvIDEwMDAwMDApKSlcbiAgICBsZXQgcmVzdWx0ID0gcG9vbEJhbGFuY2UgKiAoMSAtICgxIC0gKGFtb3VudCAvIHRvdGFsU3VwcGx5KSkgKiogKDEgLyByZXNlcnZlUmF0aW8pKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChyZXN1bHQgKiAxMDAwMCkgLyAxMDAwMDtcbiAgfVxuXG4gIGNhbGN1bGF0ZUJ1eVByaWNlKHByb3BzKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jb250cmFjdFBhcmFtcy5jb250cmFjdFBhcmFtcyB8fCB0aGlzLnN0YXRlO1xuICAgIGxldCB7IHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvLCBhbW91bnQgfSA9IHsgLi4uc3RhdGUsIC4uLnByb3BzIH07XG4gICAgaWYgKCF0b3RhbFN1cHBseSB8fCAhcG9vbEJhbGFuY2UgfHwgIXJlc2VydmVSYXRpbyB8fCAhYW1vdW50KSByZXR1cm4gJzAnO1xuICAgIGlmICh0b3RhbFN1cHBseSA9PT0gMCB8fCByZXNlcnZlUmF0aW8gPT09IDAgfHwgcG9vbEJhbGFuY2UgPT09IDAgfHwgYW1vdW50ID09PSAwKSByZXR1cm4gJzAnO1xuICAgIGxldCBmb28gPSBwb29sQmFsYW5jZSAqICgoMSArIChhbW91bnQgLyB0b3RhbFN1cHBseSkpICoqICgxIC8gcmVzZXJ2ZVJhdGlvKSAtIDEpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZvbyAqIDEwMDAwKSAvIDEwMDAwO1xuICB9XG5cbiAgLy8gY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm5cbiAgLy8gUmV0dXJuID0gX3N1cHBseSAqICgoMSArIF9kZXBvc2l0QW1vdW50IC8gX2Nvbm5lY3RvckJhbGFuY2UpIF4gKF9jb25uZWN0b3JXZWlnaHQgLyAxMDAwMDAwKSAtIDEpXG4gIGNhbGN1bGF0ZVB1cmNoYXNlUmV0dXJuKHByb3BzKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jb250cmFjdFBhcmFtcy5jb250cmFjdFBhcmFtcyB8fCB0aGlzLnN0YXRlO1xuICAgIGxldCB7IHRvdGFsU3VwcGx5LCBwb29sQmFsYW5jZSwgcmVzZXJ2ZVJhdGlvLCBhbW91bnQgfSA9IHsgLi4uc3RhdGUsIC4uLnByb3BzIH07XG4gICAgaWYgKCF0b3RhbFN1cHBseSB8fCAhcG9vbEJhbGFuY2UgfHwgIXJlc2VydmVSYXRpbyB8fCAhYW1vdW50KSByZXR1cm4gJzAnO1xuICAgIC8vIHNwZWNpYWwgY2FzZSBpZiB0aGUgd2VpZ2h0ID0gMTAwJVxuICAgIGlmIChyZXNlcnZlUmF0aW8gPT09IDEpIHtcbiAgICAgIHJldHVybiB0b3RhbFN1cHBseSAqIChhbW91bnQgLyBwb29sQmFsYW5jZSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuID0gX3N1cHBseSAqICgoMSArIF9kZXBvc2l0QW1vdW50IC8gX2Nvbm5lY3RvckJhbGFuY2UpIF4gKF9jb25uZWN0b3JXZWlnaHQgLyAxMDAwMDAwKSAtIDEpXG4gICAgbGV0IGZvbyA9IHRvdGFsU3VwcGx5ICogKCgxICsgYW1vdW50IC8gcG9vbEJhbGFuY2UpICoqIHJlc2VydmVSYXRpbyAtIDEpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZvbyAqIDEwMDAwKSAvIDEwMDAwO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMudGhlbWVDb2xvciB8fCAnZ3JleSc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsnLS1ib25kZWRUb2tlbid9XG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBjb2xvciB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZGVkVG9rZW5Db250YWluZXI7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb25kZWRUb2tlbkNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgcmVsZXZhbnRDb2luSGVscGVyIGZyb20gJy4vcmVsZXZhbnRDb2luSGVscGVyJztcblxuY2xhc3MgQm9uZGVkVG9rZW5IZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGFjY291bnRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvbmRpbmdDdXJ2ZVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgd2FsbGV0QmFsYW5jZSwgYWNjb3VudCB9ID0gdGhpcy5jb250ZXh0LmFjY291bnRJbmZvO1xuICAgIGxldCB7IHRyYW5zYWN0aW9uLCB3ZWIzU3RhdGUgfSA9IHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZTtcbiAgICBsZXQgeyB0b2tlbkJhbGFuY2UsIHN5bWJvbCB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGxldCBuZXR3b3JrID0gcmVsZXZhbnRDb2luSGVscGVyLmdldE5ldHdvcmsod2ViM1N0YXRlKTtcbiAgICBuZXR3b3JrID0gbmV0d29yayA9PT0gJ21haW4nID8gJycgOiBuZXR3b3JrICsgJy4nO1xuICAgIGxldCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlIHx8ICdCb25kZWQgVG9rZW4nO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbkhlYWRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogcHJvcHMuYWNjZW50Q29sb3IgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuSGVhZGVyQm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbkFkZHJlc3NcIj5cbiAgICAgICAgICAgIGFkZHJlc3M6IDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vJHtuZXR3b3JrfWV0aGVyc2Nhbi5pby9hZGRyZXNzLyR7YWNjb3VudH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YWNjb3VudH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5zdGF0dXMgJiYgdHJhbnNhY3Rpb24uc3RhdHVzID09PSAncGVuZGluZycgPyAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLy8gbWF4V2lkdGg6ICc3NSUnLFxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHBlbmRpbmcgdHg6eycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG5cbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly8ke25ldHdvcmt9ZXRoZXJzY2FuLmlvL3R4LyR7dHJhbnNhY3Rpb24udHh9YH0+XG4gICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLnR4fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbnsvKiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7d2FsbGV0QmFsYW5jZS50b0ZpeGVkKDIpfSBFVEhcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCItLWJvbmRlZFRva2VuLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dG9rZW5CYWxhbmNlID8gdG9rZW5CYWxhbmNlLnRvRml4ZWQoMikgOiB0b2tlbkJhbGFuY2V9IHtzeW1ib2x9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmRlZFRva2VuSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAncmVhY3QtZmxleGlibGUtc3dpdGNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IGdldE5ldHdvcmsgfSBmcm9tICcuL3JlbGV2YW50Q29pbkhlbHBlcic7XG5cbmNsYXNzIEJvbmRlZFRva2VuVHJhbnNhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNvbnRyYWN0UGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGFjY291bnRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRyYWN0QWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBib25kaW5nQ3VydmVTdGF0ZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNCdXk6IHRydWUsXG4gICAgICBhbW91bnQ6ICcnLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZUJ1eSA9IHRoaXMudG9nZ2xlQnV5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5iaWdNYXggPSAxMDAwMDAwO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZS5sb2FkaW5nICYmICFuZXh0Q29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZS5sb2FkaW5nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW1vdW50OiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJ1eSgpIHtcbiAgICBsZXQgeyBsb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGU7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFtb3VudDogJycsXG4gICAgICBpc0J1eTogIXRoaXMuc3RhdGUuaXNCdXlcbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBsZXQgeyBsb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQuYm9uZGluZ0N1cnZlU3RhdGU7XG4gICAgbGV0IHsgYWNjb3VudCB9ID0gdGhpcy5jb250ZXh0LmFjY291bnRJbmZvO1xuICAgIGxldCB7IGRlY2ltYWxzLCBSZWxldmFudENvaW4gfSA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcbiAgICBpZiAodGhpcy5zdGF0ZS5hbW91bnQgPD0gMCB8fCBsb2FkaW5nKSByZXR1cm47XG5cbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogJ1BsZWFzZSBSZXZpZXcgJiBTaWduIFRyYW5zYWN0aW9uJyB9KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzQnV5KSB7XG4gICAgICBsZXQgYW1vdW50ID0gV2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLmFtb3VudC50b1N0cmluZygpKTtcbiAgICAgIGFtb3VudCA9IG5ldyBCaWdOdW1iZXIoYW1vdW50LnRvU3RyaW5nKCkpO1xuICAgICAgUmVsZXZhbnRDb2luLm1ldGhvZHMuYnV5LmNhY2hlU2VuZCh7XG4gICAgICAgIHZhbHVlOiBhbW91bnQsIGZyb206IGFjY291bnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYW1vdW50ID0gbmV3IEJpZ051bWJlcih0aGlzLnN0YXRlLmFtb3VudC50b1N0cmluZygpKS50aW1lcygxMCAqKiBkZWNpbWFscyk7XG4gICAgICBSZWxldmFudENvaW4ubWV0aG9kcy5zZWxsLmNhY2hlU2VuZChhbW91bnQsIHtcbiAgICAgICAgZnJvbTogYWNjb3VudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7XG4gICAgICBjYWxjdWxhdGVQdXJjaGFzZVJldHVybixcbiAgICAgIGNhbGN1bGF0ZVNhbGVSZXR1cm5cbiAgICB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0QWN0aW9ucztcbiAgICBsZXQgeyBsb2FkaW5nLCB3ZWIzU3RhdGUgfSA9IHRoaXMuY29udGV4dC5ib25kaW5nQ3VydmVTdGF0ZTtcbiAgICBsZXQgeyB3YWxsZXRCYWxhbmNlLCBhY2NvdW50IH0gPSB0aGlzLmNvbnRleHQuYWNjb3VudEluZm87XG4gICAgbGV0IHsgdG9rZW5CYWxhbmNlLCBzeW1ib2wsIGFkZHJlc3MsIHByaWNlRXRoLCBwcmljZURvbGxhciB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuXG4gICAgbGV0IG1ldGFtYXNrTmV0d29yayA9IGdldE5ldHdvcmsod2ViM1N0YXRlKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuYWNjZW50Q29sb3IgfHwgJ2JsdWUnO1xuICAgIGxldCB7IGJpZ01heCB9ID0gdGhpcztcblxuICAgIGxldCBidXR0b24gPSAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHZhbHVlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1zdWJtaXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdCgpfSA+XG4gICAgICAgIHN1Ym1pdFxuICAgICAgPC9idXR0b24+XG4gICAgKTtcblxuICAgIGxldCBzdWJtaXQgPSB0aGlzLnN1Ym1pdDtcblxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBidXR0b24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHsgLi4udGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcyxcbiAgICAgICAgICBvbkNsaWNrOiBzdWJtaXQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoIWRyaXp6bGVTdGF0dXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxwPlxuICAgIC8vICAgICAgIENvbm5lY3RpbmcgdG8gTWV0YW1hc2suLi5cbiAgICAvLyAgICAgPC9wPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG5cbiAgICBsZXQgZGVzaXJlZE5ldHdvcmsgPSB0aGlzLnByb3BzLm5ldHdvcmsgPyB0aGlzLnByb3BzLm5ldHdvcmsudG9Mb3dlckNhc2UoKSA6IG1ldGFtYXNrTmV0d29yaztcblxuICAgIGlmICghYWNjb3VudCB8fCBkZXNpcmVkTmV0d29yayAhPT0gbWV0YW1hc2tOZXR3b3JrKSB7XG4gICAgICBsZXQgbmV0d29yayA9IHRoaXMucHJvcHMubmV0d29yayB8fCAnbWFpbic7XG4gICAgICAvLyBsZXQgZ2V0VG9rZW5zID0gKFxuICAgICAgLy8gICA8cD5cbiAgICAgIC8vICAgICBZb3UgY2FuIGdldCBzb21lIGZyZWUgdGVzdCBuZXR3b3JrIEV0aGVyIGhlcmU6eycgJ31cbiAgICAgIC8vICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mYXVjZXQucmlua2VieS5pby9cIj5odHRwczovL2ZhdWNldC5yaW5rZWJ5LmlvLzwvYT5cbiAgICAgIC8vICAgICA8YnIvPihwcm8tdGlwOiB1c2UgeW91ciBHb29nbGVQbHVzIGFjY291bnQpXG4gICAgICAvLyAgIDwvcD5cbiAgICAgIC8vICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tbm90LWNvbm5lY3RlZFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIFBsZWFzZSBlbmFibGUgeW91ciBNZXRhbWFzayB3YWxsZXQgYW5kIGNvbm5lY3QgdG8gdGhlIHtuZXR3b3JrfSBuZXR3b3JrLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICBEb24ndCBoYXZlIE1ldGFtYXNrPyBEb3dubG9hZCBpdCBoZXJlOnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWV0YW1hc2suaW8vXCI+aHR0cHM6Ly9tZXRhbWFzay5pby88L2E+XG4gICAgICAgICAgPC9wPlxuey8qICAgICAgICAgIHtuZXR3b3JrICE9PSAnbWFpbicgPyBnZXRUb2tlbnMgOiBudWxsfVxuKi99ICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGFjdGlvbiA9ICdQYXkgV2l0aCc7XG4gICAgbGV0IGF2YWlsYWJsZSA9IDxhXG4gICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYW1vdW50OiB3YWxsZXRCYWxhbmNlIH0pfSA+XG4gICAgICAgIEF2YWlsYWJsZToge3dhbGxldEJhbGFuY2UudG9GaXhlZCgyKX0gRVRIPC9hPjtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnRW50ZXIgYW1vdW50Li4uICc7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQnV5KSB7XG4gICAgICAvLyBwbGFjZWhvbGRlciA9ICdFbnRlciB0aGUgYW1vdW50IG9mIFJOVCB5b3Ugd2FudCB0byBzZWxsJztcbiAgICAgIGF2YWlsYWJsZSA9IDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhbW91bnQ6IHRva2VuQmFsYW5jZSB9KX0+XG4gICAgICAgIEF2YWlsYWJsZToge3Rva2VuQmFsYW5jZS50b0ZpeGVkKDIpfSB7c3ltYm9sfVxuICAgICAgPC9hPjtcbiAgICAgIGFjdGlvbiA9ICdTZWxsJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIHN3aXRjaFN0eWxlcz17e1xuICAgICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogJzJweCBzb2xpZCAnICsgY29sb3IuXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlzQnV5fVxuICAgICAgICAgICAgY2lyY2xlU3R5bGVzPXt7XG4gICAgICAgICAgICAgIGRpYW1ldGVyOiAyNSxcbiAgICAgICAgICAgICAgb25Db2xvcjogY29sb3IsXG4gICAgICAgICAgICAgIG9mZkNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhYmVscz17eyBvbjogJ0J1eScsIG9mZjogJ1NlbGwnIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGVCdXkoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlblRyYW5zYWN0XCJcbiAgICAgICAgPlxuXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleFwiIHN0eWxlPXt7IGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvciB9fT5cbiAgICAgICAgICAgIHthY3Rpb259eyc6ICd9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcwJykgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogJycgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbWF4PXt0aGlzLnN0YXRlLmlzQnV5ID9cbiAgICAgICAgICAgICAgICAoYWRkcmVzcyA/IHdhbGxldEJhbGFuY2UudG9GaXhlZCg0KSA6IGJpZ01heClcbiAgICAgICAgICAgICAgICA6IHRva2VuQmFsYW5jZS50b0ZpeGVkKDQpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICogMSA+IGV2ZW50LnRhcmdldC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGV2ZW50LnRhcmdldC5tYXg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZXZlbnQudGFyZ2V0LnZhbHVlIHx8IGV2ZW50LnRhcmdldC52YWx1ZSAqIDEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmlzQnV5ID8gJ0VUSCcgOiBzeW1ib2x9PC9kaXY+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jy0tYm9uZGVkVG9rZW4tYXZhaWxhYmxlJ30+XG4gICAgICAgICAgICB7YXZhaWxhYmxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0tYm9uZGVkVG9rZW4tZmxleCAtLWJvbmRlZFRva2VuVHJhbnNhY3RcIj5cbiAgICAgICAgICA8ZGl2PlJlY2lldmU6PC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQnV5ID9cbiAgICAgICAgICAgICAgY2FsY3VsYXRlUHVyY2hhc2VSZXR1cm4oeyBhbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50IH0pIDpcbiAgICAgICAgICAgICAgY2FsY3VsYXRlU2FsZVJldHVybih7IGFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgfSl9XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmlzQnV5ID8gJ0VUSCcgOiBzeW1ib2x9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1mbGV4IC0tYm9uZGVkVG9rZW5UcmFuc2FjdFwiPlxuICAgICAgICAgIDxkaXY+UmF0ZTo8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgMSB7c3ltYm9sfSA9IHtwcmljZUV0aH0gRVRIICgke3ByaWNlRG9sbGFyfSlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FkZHJlc3MgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLS1ib25kZWRUb2tlbi1zdWJtaXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb25kZWRUb2tlblRyYW5zYWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JvbmRlZFRva2VuVHJhbnNhY3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUmVjaGFydHMgPSByZXF1aXJlKCdyZWNoYXJ0cycpO1xuXG5jb25zdCB7XG4gIEFyZWEsXG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgVG9vbHRpcCxcbiAgUmVmZXJlbmNlRG90LFxuICBDb21wb3NlZENoYXJ0XG59ID0gUmVjaGFydHM7XG5cbmNsYXNzIEN1cnZlQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNvbnRyYWN0QWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250cmFjdFBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0Q2hhcnREYXRhID0gdGhpcy5nZXRDaGFydERhdGEuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRvY3VtZW50UmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGdldENoYXJ0RGF0YSgpIHtcbiAgICBsZXQgeyBjYWxjdWxhdGVTYWxlUmV0dXJuLCBjYWxjdWxhdGVCdXlQcmljZSB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0QWN0aW9ucztcbiAgICBsZXQgeyB0b3RhbFN1cHBseSwgcmVzZXJ2ZVJhdGlvLCBwb29sQmFsYW5jZSB9ID0gdGhpcy5jb250ZXh0LmNvbnRyYWN0UGFyYW1zO1xuICAgIGxldCBwcm9wcyA9IHRoaXMuY29udGV4dC5jb250cmFjdFBhcmFtcztcblxuICAgIGxldCBkYXRhID0gW107XG4gICAgbGV0IHN0ZXAgPSBNYXRoLnJvdW5kKHRvdGFsU3VwcGx5IC8gMTAwKTtcbiAgICBsZXQgcHJpY2UgPSBwb29sQmFsYW5jZSAvIChyZXNlcnZlUmF0aW8gKiB0b3RhbFN1cHBseSk7XG4gICAgbGV0IGN1cnJlbnRQcmljZSA9IHsgc3VwcGx5OiB0b3RhbFN1cHBseSwgdmFsdWU6IHByaWNlIH07XG5cbiAgICBmb3IgKGxldCBpID0gc3RlcDsgaSA8IHRvdGFsU3VwcGx5ICogMS41OyBpICs9IHN0ZXApIHtcbiAgICAgIGlmIChpIDwgdG90YWxTdXBwbHkpIHtcbiAgICAgICAgbGV0IGV0aCA9IDEgKiBjYWxjdWxhdGVTYWxlUmV0dXJuKHsgLi4ucHJvcHMsIGFtb3VudDogdG90YWxTdXBwbHkgLSBpIH0pO1xuICAgICAgICBwcmljZSA9IChwYXJzZUZsb2F0KHBvb2xCYWxhbmNlLCAxMCkgLSBldGgpIC8gKHJlc2VydmVSYXRpbyAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBzdXBwbHk6IGksIHNlbGw6IHByaWNlLCB2YWx1ZTogcHJpY2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGkgPiB0b3RhbFN1cHBseSkge1xuICAgICAgICBsZXQgZXRoID0gMSAqIGNhbGN1bGF0ZUJ1eVByaWNlKHsgLi4ucHJvcHMsIGFtb3VudDogaSAtIHRvdGFsU3VwcGx5IH0pO1xuICAgICAgICBwcmljZSA9IChldGggKyBwYXJzZUZsb2F0KHBvb2xCYWxhbmNlLCAxMCkpIC8gKHJlc2VydmVSYXRpbyAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBzdXBwbHk6IDEgKiBpLCBidXk6IHByaWNlLCB2YWx1ZTogMSAqIHByaWNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBkYXRhLCBjdXJyZW50UHJpY2UgfTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5kb2N1bWVudFJlYWR5KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgeyBkYXRhLCBjdXJyZW50UHJpY2UgfSA9IHRoaXMuZ2V0Q2hhcnREYXRhKCk7XG4gICAgbGV0IHdpZHRoID0gTWF0aC5taW4oNjAwLCAod2luZG93LmlubmVyV2lkdGggPCA0ODAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDQ4MCkgLSAzMCk7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoICogMiAvIDM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8Q29tcG9zZWRDaGFydFxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nIH19XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgbWFyZ2luPXt7IHRvcDogMTAsIHJpZ2h0OiAzMCwgbGVmdDogMCwgYm90dG9tOiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIi8+XG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJzdXBwbHlcIiB0eXBlPXsnbnVtYmVyJ30gLz5cbiAgICAgICAgICA8WUF4aXMgZGF0YUtleT1cInZhbHVlXCIgdHlwZT17J251bWJlcid9IC8+XG4gICAgICAgICAgPFRvb2x0aXAvPlxuXG4gICAgICAgICAgPEFyZWEgaXNBbmltYXRpb25BY3RpdmU9e2ZhbHNlfSBkb3RzPXtmYWxzZX0gc3RhY2tPZmZzZXQ9eydub25lJ30gZGF0YUtleT1cInZhbHVlXCIgbmFtZT17J3ByaWNlJ30ga2V5PXsncHJpY2UnfSBzdHJva2U9J2JsdWUnIGZpbGw9J25vbmUnLz5cblxuICAgICAgICAgIDxBcmVhIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX0gc3RhY2tPZmZzZXQ9eydub25lJ30gZGF0YUtleT1cInNlbGxcIiBzdHJva2U9XCJibHVlXCIgZmlsbD0nYmx1ZScgLz5cblxuICAgICAgICAgIDxSZWZlcmVuY2VEb3RcbiAgICAgICAgICAgIGlzRnJvbnQ9e3RydWV9XG4gICAgICAgICAgICBhbHdheXNTaG93PXt0cnVlfVxuICAgICAgICAgICAgeD17Y3VycmVudFByaWNlLnN1cHBseX1cbiAgICAgICAgICAgIHk9e2N1cnJlbnRQcmljZS52YWx1ZX1cbiAgICAgICAgICAgIHI9ezh9XG4gICAgICAgICAgICBmaWxsPVwiYmx1ZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgIDwvQ29tcG9zZWRDaGFydD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VydmVDaGFydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9DaGFydC5qcyIsImltcG9ydCBCb25kZWRUb2tlbkNvbnRhaW5lciBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5Db250YWluZXInO1xuaW1wb3J0IEJvbmRlZFRva2VuSGVhZGVyIGZyb20gJy4uL3NyYy9Cb25kZWRUb2tlbkhlYWRlcic7XG5pbXBvcnQgQm9uZGVkVG9rZW5UcmFuc2FjdCBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5UcmFuc2FjdCc7XG5pbXBvcnQgQm9uZGVkVG9rZW5BZHZhbmNlZCBmcm9tICcuLi9zcmMvQm9uZGVkVG9rZW5BZHZhbmNlZCc7XG5pbXBvcnQgQm9uZGVkVG9rZW5CYWxhbmNlIGZyb20gJy4uL3NyYy9Cb25kZWRUb2tlbkJhbGFuY2UnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL3NyYy9DaGFydCc7XG5pbXBvcnQgKiBhcyBCb25kZWRUb2tlblV0aWxzIGZyb20gJy4uL3NyYy9yZWxldmFudENvaW5IZWxwZXInO1xuXG5leHBvcnQge1xuICBCb25kZWRUb2tlbkNvbnRhaW5lcixcbiAgQm9uZGVkVG9rZW5IZWFkZXIsXG4gIEJvbmRlZFRva2VuVHJhbnNhY3QsXG4gIEJvbmRlZFRva2VuQWR2YW5jZWQsXG4gIENoYXJ0LFxuICBCb25kZWRUb2tlblV0aWxzLFxuICBCb25kZWRUb2tlbkJhbGFuY2Vcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlnbnVtYmVyLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmlnbnVtYmVyLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGgtcHJpY2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldGgtcHJpY2VcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVjaGFydHNcIlxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWIzXCJcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9