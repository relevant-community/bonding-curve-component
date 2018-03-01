module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-flexible-switch");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactFlexibleSwitch = __webpack_require__(4);

var _reactFlexibleSwitch2 = _interopRequireDefault(_reactFlexibleSwitch);

var _Chart = __webpack_require__(11);

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);

var BondedTokenAdvanced = function (_React$Component) {
  _inherits(BondedTokenAdvanced, _React$Component);

  function BondedTokenAdvanced() {
    _classCallCheck(this, BondedTokenAdvanced);

    return _possibleConstructorReturn(this, (BondedTokenAdvanced.__proto__ || Object.getPrototypeOf(BondedTokenAdvanced)).apply(this, arguments));
  }

  _createClass(BondedTokenAdvanced, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: ' --BondedTokenAdvanced' },
        React.createElement(
          'div',
          { className: ' --bondedToken-flex-center' },
          React.createElement(_reactFlexibleSwitch2.default, {
            switchStyles: { width: 110, color: 'grey' },
            value: this.props.advanced,
            circleStyles: { diameter: 16, onColor: 'grey', offColor: 'lightgrey' },
            labels: { on: 'Advanced', off: 'Advanced' },
            onChange: function onChange(event) {
              return _this2.props.toggleAdvanced();
            } })
        ),
        this.props.advanced && React.createElement(
          'div',
          { className: ' --BondedTokenAdvanced-open' },
          React.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            React.createElement(
              'div',
              null,
              'Token Address'
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'label',
                { className: '' },
                React.createElement('input', {
                  type: 'text',
                  value: this.props.address,
                  onChange: function onChange(event) {
                    return _this2.props.onChange(event, 'address');
                  } })
              )
            )
          ),
          React.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            React.createElement(
              'div',
              null,
              'Pool Balance'
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'label',
                { className: '--bondedToken-eth' },
                React.createElement('input', {
                  readOnly: !!this.props.address,
                  type: 'number',
                  value: this.props.balance,
                  max: this.props.bigMax,
                  onChange: function onChange(event) {
                    return _this2.props.onChange(event, 'balance');
                  } })
              ),
              !this.props.address && React.createElement('input', {
                type: 'range',
                value: this.props.balance,
                max: this.props.bigMax,
                onChange: function onChange(event) {
                  return _this2.props.onChange(event, 'balance');
                } })
            )
          ),
          React.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            React.createElement(
              'div',
              null,
              'Ratio'
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'label',
                { className: '--bondedToken-ratio' },
                React.createElement('input', {
                  readOnly: !!this.props.address,
                  type: 'number',
                  step: '0.01',
                  max: '1',
                  min: '0',
                  value: this.props.ratio,
                  onChange: function onChange(event) {
                    return _this2.props.onChange(event, 'ratio');
                  } })
              ),
              !this.props.address && React.createElement('input', {
                type: 'range',
                value: this.props.ratio,
                max: '1',
                step: '0.01',
                onChange: function onChange(event) {
                  return _this2.props.onChange(event, 'ratio');
                } })
            )
          ),
          React.createElement(
            'div',
            { className: '--bondedToken-flex --bondedTokenTransact' },
            React.createElement(
              'div',
              null,
              'Total Supply'
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'label',
                { className: '--bondedToken-token' },
                React.createElement('input', {
                  readOnly: !!this.props.address,
                  type: 'number',
                  value: this.props.totalSupply,
                  max: this.props.bigMax,
                  onChange: function onChange(event) {
                    return _this2.props.onChange(event, 'totalSupply');
                  } })
              ),
              !this.props.address && React.createElement('input', {
                type: 'range',
                value: this.props.totalSupply,
                max: this.props.bigMax,
                onChange: function onChange(event) {
                  return _this2.props.onChange(event, 'totalSupply');
                } })
            )
          ),
          !this.props.documentReady || React.createElement(_Chart2.default, { documentReady: this.props.documentReady, chartData: this.props.chartData })
        )
      );
    }
  }]);

  return BondedTokenAdvanced;
}(React.Component);

;

exports.default = BondedTokenAdvanced;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Blockie from 'lib-blockies';
// console.log(Blockie)
// var foo = require('lib-blockies')
// console.log(foo)
var BondedTokenHeader = function (_React$Component) {
  _inherits(BondedTokenHeader, _React$Component);

  function BondedTokenHeader() {
    _classCallCheck(this, BondedTokenHeader);

    return _possibleConstructorReturn(this, (BondedTokenHeader.__proto__ || Object.getPrototypeOf(BondedTokenHeader)).apply(this, arguments));
  }

  _createClass(BondedTokenHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "--bondedTokenHeader" },
        _react2.default.createElement(
          "div",
          { className: "--bondedTokenAddress" },
          _react2.default.createElement(
            "a",
            {
              target: "_blank",
              href: "https://etherscan.io/address/" + this.props.account },
            this.props.account
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "--bondedToken-flex" },
          _react2.default.createElement(
            "div",
            { className: "--bondedToken-pointer", onClick: function onClick(event) {
                return _this2.props.onChange({ target: { value: _this2.props.walletBalance } }, 'amount');
              } },
            this.props.walletBalance,
            " ETH"
          ),
          _react2.default.createElement(
            "div",
            { className: "--bondedToken-pointer", onClick: function onClick(event) {
                return _this2.props.onChange({ target: { value: _this2.props.tokenBalance } }, 'amount');
              } },
            this.props.tokenBalance,
            " Tokens"
          )
        )
      );
    }

    // constructor(props) {
    //   super(props);
    //   // console.log(Blockie)
    //   // const identicon = new Blockie(this.props.address);
    //   // const canvas = identicon.createCanvas(8);

    //   // this.state = {
    //   //   url: canvas.toDataURL()
    //   // }
    // }

  }]);

  return BondedTokenHeader;
}(_react2.default.Component);

exports.default = BondedTokenHeader;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactFlexibleSwitch = __webpack_require__(4);

var _reactFlexibleSwitch2 = _interopRequireDefault(_reactFlexibleSwitch);

var _bignumber = __webpack_require__(1);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);

var BondedTokenTransact = function (_React$Component) {
  _inherits(BondedTokenTransact, _React$Component);

  function BondedTokenTransact() {
    _classCallCheck(this, BondedTokenTransact);

    return _possibleConstructorReturn(this, (BondedTokenTransact.__proto__ || Object.getPrototypeOf(BondedTokenTransact)).apply(this, arguments));
  }

  _createClass(BondedTokenTransact, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: '--bondedToken-flex --bondedTokenTransact' },
          React.createElement(_reactFlexibleSwitch2.default, {
            switchStyles: { width: 80 },
            value: this.props.isBuy,
            circleStyles: { diameter: 16, onColor: 'grey', offColor: 'grey' },
            labels: { on: 'Spend', off: 'Sell' },
            onChange: function onChange(event) {
              return _this2.props.toggleBuy();
            }
          }),
          React.createElement(
            'label',
            { className: this.props.isBuy ? "--bondedToken-eth" : "--bondedToken-token" },
            React.createElement('input', {
              type: 'number',
              max: this.props.isBuy ? this.props.address ? this.props.walletBalance : this.props.bigMax : this.props.address ? this.props.tokenBalance : this.props.totalSupply,
              value: this.props.amount,
              onChange: function onChange(event) {
                if (event.target.value && new _bignumber2.default(event.target.value).gte(event.target.max)) {
                  event.target.value = event.target.max;
                } else if (!event.target.value || new _bignumber2.default(event.target.value).lte('0')) {
                  event.target.value = 0;
                }
                _this2.props.onChange(event, 'amount');
              } })
          )
        ),
        React.createElement(
          'div',
          { className: '--bondedToken-flex --bondedTokenTransact' },
          React.createElement(
            'div',
            null,
            'For'
          ),
          React.createElement(
            'label',
            { className: this.props.isBuy ? "--bondedToken-token" : "--bondedToken-eth" },
            React.createElement(
              'div',
              null,
              this.props.isBuy ? this.props.calculatePurchaseReturn() : this.props.calculateSaleReturn()
            )
          )
        ),
        this.props.address && React.createElement(
          'div',
          { className: '--bondedToken-submit-container' },
          React.createElement(
            'button',
            {
              value: 'submit',
              className: '--bondedToken-submit',
              onClick: function onClick(event) {
                return _this2.props.submit();
              } },
            'submit'
          )
        )
      );
    }
  }]);

  return BondedTokenTransact;
}(React.Component);

;

exports.default = BondedTokenTransact;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RelevantCoinArtifacts = __webpack_require__(17);

var Web3 = __webpack_require__(3);
var BN = __webpack_require__(1);
// const MicroEvent = require("microevent");

var RelevantCoin = function () {
  function RelevantCoin(options) {
    _classCallCheck(this, RelevantCoin);

    this.relevantCoin = null;

    this.pollingInterval = null;
    this.account = null;
    this.unlocked = false;
    this.balanceWei = 0;
    this.balance = 0;

    this.genesisBlock = 0;
    this.loading = false;
    this.options = {
      address: 'REPLACE_WITH_CONTRACT_ADDRESS',
      readonlyRpcURL: 'https://mainnet.infura.io',
      autoInit: true,
      getPastEvents: false,
      watchFutureEvents: false,
      connectionRetries: 3
    };
    Object.assign(this.options, options);
  }

  // hello world : )


  _createClass(RelevantCoin, [{
    key: 'helloWorld',
    value: function helloWorld() {
      console.log('hello world!');
    }

    /*
     * Connect
     */

  }, {
    key: 'deployContract',
    value: function deployContract(address) {
      if (!address) return new Error('Please provide a contract address');
      this.relevantCoin = new global.web3.eth.Contract(RelevantCoinArtifacts.abi, address);
    }

    /*
     * Not Yet Implemented vvvv
     */

  }, {
    key: 'getGenesisBlock',
    value: function getGenesisBlock() {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    }
  }, {
    key: 'getPastEvents',
    value: function getPastEvents() {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    }
  }, {
    key: 'watchFutureEvents',
    value: function watchFutureEvents() {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    }

    /*
     *
     * Constant Functions
     *
     */

  }, {
    key: 'name',
    value: function name() {
      return this.relevantCoin.methods.name().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'inflationSupply',
    value: function inflationSupply() {
      return this.relevantCoin.methods.inflationSupply().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'reserveRatio',
    value: function reserveRatio() {
      return this.relevantCoin.methods.reserveRatio().call().then(function (resp) {
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'totalSupply',
    value: function totalSupply() {
      return this.relevantCoin.methods.totalSupply().call().then(function (resp) {
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'INITAL_BALANCE',
    value: function INITAL_BALANCE() {
      return this.relevantCoin.methods.INITAL_BALANCE().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'virtualSupply',
    value: function virtualSupply() {
      return this.relevantCoin.methods.virtualSupply().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'calculatePurchaseReturn',
    value: function calculatePurchaseReturn(_supply, _connectorBalance, _connectorWeight, _depositAmount) {
      return this.relevantCoin.methods.calculatePurchaseReturn(new BN(_supply, 10), new BN(_connectorBalance, 10), new BN(_connectorWeight, 10), new BN(_depositAmount, 10)).call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'INITIAL_SUPPLY',
    value: function INITIAL_SUPPLY() {
      return this.relevantCoin.methods.INITIAL_SUPPLY().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'decimals',
    value: function decimals() {
      return this.relevantCoin.methods.decimals().call().then(function (resp) {
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'calculateSaleReturn',
    value: function calculateSaleReturn(_supply, _connectorBalance, _connectorWeight, _sellAmount) {
      return this.relevantCoin.methods.calculateSaleReturn(new BN(_supply, 10), new BN(_connectorBalance, 10), new BN(_connectorWeight, 10), new BN(_sellAmount, 10)).call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'version',
    value: function version() {
      return this.relevantCoin.methods.version().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'rewardPool',
    value: function rewardPool() {
      return this.relevantCoin.methods.rewardPool().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'intervalsSinceLastInflationUpdate',
    value: function intervalsSinceLastInflationUpdate() {
      return this.relevantCoin.methods.intervalsSinceLastInflationUpdate().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'balanceOf',
    value: function balanceOf(_owner) {
      return this.relevantCoin.methods.balanceOf(_owner).call().then(function (resp) {
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'INITIAL_PRICE',
    value: function INITIAL_PRICE() {
      return this.relevantCoin.methods.INITIAL_PRICE().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'owner',
    value: function owner() {
      return this.relevantCoin.methods.owner().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'timeInterval',
    value: function timeInterval() {
      return this.relevantCoin.methods.timeInterval().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'symbol',
    value: function symbol() {
      return this.relevantCoin.methods.symbol().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'poolBalance',
    value: function poolBalance() {
      return this.relevantCoin.methods.poolBalance().call().then(function (resp) {
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'HOURLY_INFLATION',
    value: function HOURLY_INFLATION() {
      return this.relevantCoin.methods.HOURLY_INFLATION().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'inflationRatePerInterval',
    value: function inflationRatePerInterval() {
      return this.relevantCoin.methods.inflationRatePerInterval().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'CURVE_RATIO',
    value: function CURVE_RATIO() {
      return this.relevantCoin.methods.CURVE_RATIO().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'virtualBalance',
    value: function virtualBalance() {
      return this.relevantCoin.methods.virtualBalance().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'allowance',
    value: function allowance(_owner, _spender) {
      return this.relevantCoin.methods.allowance(_owner, _spender).call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'TIME_INTERVAL',
    value: function TIME_INTERVAL() {
      return this.relevantCoin.methods.TIME_INTERVAL().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'gasPrice',
    value: function gasPrice() {
      return this.relevantCoin.methods.gasPrice().call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'getBalanceInEth',
    value: function getBalanceInEth(addr) {
      return this.relevantCoin.methods.getBalanceInEth(addr).call().then(function (resp) {
        console.log(resp);
        return resp;
      }).catch(function (err) {
        console.error(err);
      });
    }

    /*
     *
     * Transaction Functions
     *
     */

  }, {
    key: 'approve',
    value: function approve(_spender, _value) {
      var _this = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.approve(_spender, new BN(_value, 10)).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this.loading = true;
      }).then(function (resp) {
        _this.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'transferFrom',
    value: function transferFrom(_from, _to, _value) {
      var _this2 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.transferFrom(_from, _to, new BN(_value, 10)).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this2.loading = true;
      }).then(function (resp) {
        _this2.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this2.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'computeInflation',
    value: function computeInflation() {
      var _this3 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.computeInflation().send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this3.loading = true;
      }).then(function (resp) {
        _this3.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this3.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'decreaseApproval',
    value: function decreaseApproval(_spender, _subtractedValue) {
      var _this4 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.decreaseApproval(_spender, new BN(_subtractedValue, 10)).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this4.loading = true;
      }).then(function (resp) {
        _this4.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this4.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'transfer',
    value: function transfer(_to, _value) {
      var _this5 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.transfer(_to, new BN(_value, 10)).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this5.loading = true;
      }).then(function (resp) {
        _this5.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this5.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'mintTokens',
    value: function mintTokens(_to) {
      var _this6 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.mintTokens(_to).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this6.loading = true;
      }).then(function (resp) {
        _this6.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this6.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'setGasPrice',
    value: function setGasPrice(_gasPrice) {
      var _this7 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.setGasPrice(new BN(_gasPrice, 10)).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this7.loading = true;
      }).then(function (resp) {
        _this7.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this7.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'increaseApproval',
    value: function increaseApproval(_spender, _addedValue) {
      var _this8 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.increaseApproval(_spender, new BN(_addedValue, 10)).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this8.loading = true;
      }).then(function (resp) {
        _this8.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this8.loading = false;
        console.error(err);
      });
    }
  }, {
    key: 'buy',
    value: function buy(buyAmount, account) {
      if (!account) return Promise.reject(new Error('Unlock Account'));
      buyAmount = Web3.utils.toWei(buyAmount);

      return this.relevantCoin.methods.buy().send({ from: account, value: new BN(buyAmount, 10).toString(10) });
    }
  }, {
    key: 'sell',
    value: function sell(sellAmount, account) {
      if (!account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.sell(new BN(sellAmount, 10)).send({ from: account });
    }
  }, {
    key: 'transferOwnership',
    value: function transferOwnership(newOwner) {
      var _this9 = this;

      if (!this.account) return Promise.reject(new Error('Unlock Account'));
      return this.relevantCoin.methods.transferOwnership(newOwner).send({ from: this.account }).on('transactionHash', function (hash) {
        console.log(hash);
        _this9.loading = true;
      }).then(function (resp) {
        _this9.loading = false;
        console.log(resp);
        return resp;
      }).catch(function (err) {
        _this9.loading = false;
        console.error(err);
      });
    }

    /*
     *
     * Events
     *
     */

  }]);

  return RelevantCoin;
}();
// MicroEvent.mixin(RelevantCoin);

module.exports = RelevantCoin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./BondedToken.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./BondedToken.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recharts = __webpack_require__(18);
var Area = Recharts.Area,
    XAxis = Recharts.XAxis,
    YAxis = Recharts.YAxis,
    CartesianGrid = Recharts.CartesianGrid,
    Tooltip = Recharts.Tooltip,
    ReferenceDot = Recharts.ReferenceDot,
    ComposedChart = Recharts.ComposedChart;

var CurveChart = function (_React$Component) {
  _inherits(CurveChart, _React$Component);

  function CurveChart() {
    _classCallCheck(this, CurveChart);

    return _possibleConstructorReturn(this, (CurveChart.__proto__ || Object.getPrototypeOf(CurveChart)).apply(this, arguments));
  }

  _createClass(CurveChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.chartData) return;
      if (!this.props.documentReady) return;
      var _props$chartData = this.props.chartData,
          data = _props$chartData.data,
          currentPrice = _props$chartData.currentPrice;

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
            alwaysShow: true
            // label={'current price'}
            , x: currentPrice.supply,
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

exports.default = CurveChart;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(9);

var _BondedTokenHeader = __webpack_require__(6);

var _BondedTokenHeader2 = _interopRequireDefault(_BondedTokenHeader);

var _BondedTokenTransact = __webpack_require__(7);

var _BondedTokenTransact2 = _interopRequireDefault(_BondedTokenTransact);

var _BondedTokenAdvanced = __webpack_require__(5);

var _BondedTokenAdvanced2 = _interopRequireDefault(_BondedTokenAdvanced);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BigNumber = __webpack_require__(1);
var Web3 = __webpack_require__(3);
var utils = __webpack_require__(10);
// TODO do we need this ?
// const ZeroClientProvider = require('web3-provider-engine/zero.js')

var BondedToken = function (_React$Component) {
  _inherits(BondedToken, _React$Component);

  _createClass(BondedToken, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: '--bondedToken' },
        this.state.loading && _react2.default.createElement(
          'div',
          null,
          this.state.loading
        ),
        this.state.account && _react2.default.createElement(_BondedTokenHeader2.default, {
          account: this.state.account,
          walletBalance: this.state.walletBalance,
          tokenBalance: this.state.tokenBalance,
          onChange: this.onChange
        }),
        _react2.default.createElement(_BondedTokenTransact2.default, {
          submit: this.submit,
          calculateSaleReturn: this.calculateSaleReturn,
          calculatePurchaseReturn: this.calculatePurchaseReturn,
          onChange: this.onChange,
          amount: this.state.amount,
          bigMax: this.bigMax,
          totalSupply: this.state.totalSupply,
          tokenBalance: this.state.tokenBalance,
          walletBalance: this.state.walletBalance,
          address: this.state.address,
          toggleBuy: this.toggleBuy,
          isBuy: this.state.isBuy }),
        _react2.default.createElement(_BondedTokenAdvanced2.default, {
          documentReady: this.documentReady,
          chartData: this.chartData,
          bigMax: this.bigMax,
          onChange: this.onChange,
          balance: this.state.balance,
          ratio: this.state.ratio,
          totalSupply: this.state.totalSupply,
          address: this.state.address,
          advanced: this.state.advanced,
          toggleAdvanced: this.toggleAdvanced })
      );
    }
  }]);

  function BondedToken(props) {
    _classCallCheck(this, BondedToken);

    var _this = _possibleConstructorReturn(this, (BondedToken.__proto__ || Object.getPrototypeOf(BondedToken)).call(this, props));

    _this.addresses = {
      5777: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
      99: '0x1daa59378d955a19cb30701b07eac7b2f048e736',
      4: '0x5df73d8fd2d8e6c6de24b731bdc295b2d915d0e9'
    };

    _this.toggleAdvanced = _this.toggleAdvanced.bind(_this);
    _this.toggleBuy = _this.toggleBuy.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.calculateSaleReturn = _this.calculateSaleReturn.bind(_this);
    _this.calculatePurchaseReturn = _this.calculatePurchaseReturn.bind(_this);

    _this.bigMax = 1000000;
    _this.state = {
      advanced: false,
      address: _this.props.address || '',
      loading: false,
      walletBalance: 0,
      walletBalanceWei: 0,
      tokenBalance: 0,
      tokenBalanceWei: 0,
      unlocked: false,
      account: null,
      network: null,
      balance: 4000000,
      balanceWei: 0,
      totalSupply: 1000000,
      totalSupplyWei: 0,
      ratio: 0.2,
      isBuy: true,
      amount: 0,
      readOnly: false
    };
    _this.getChartData = _this.getChartData.bind(_this);
    _this.documentReady = false;
    _this.chartData = {};
    return _this;
  }

  _createClass(BondedToken, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.relevantCoin = new _index2.default();
      this.initWeb3().catch(function (error) {
        console.log(error);
      });

      this.documentReady = true;
      this.getChartData(this.state);
      this.forceUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.pollingInterval);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(newProps, newState) {
      var _state = this.state,
          totalSupply = _state.totalSupply,
          ratio = _state.ratio,
          balance = _state.balance;
      var totalSupplyN = newState.totalSupplyN,
          ratioN = newState.ratioN,
          balanceN = newState.balanceN;

      if (totalSupply !== totalSupplyN || ratio !== ratioN || balance !== balanceN) {
        this.getChartData(newState);
      }
    }
    // events

  }, {
    key: 'toggleBuy',
    value: function toggleBuy() {
      if (this.state.loading) return;
      this.setState({
        amount: 0,
        isBuy: !this.state.isBuy
      });
    }
  }, {
    key: 'toggleAdvanced',
    value: function toggleAdvanced() {
      this.setState({
        advanced: !this.state.advanced
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(event, type) {
      if (type === 'address') {
        if (event.target.value && !utils.isAddress(event.target.value)) {
          return;
        } else if (event.target.value) {
          this.relevantCoin.deployContract(event.target.value);
        }
      }
      if (this.state.loading) return;
      var foo = {};
      foo[type] = event.target ? event.target.value : event;
      foo[type + 'Wei'] = '0';
      this.setState(foo);
    }
  }, {
    key: 'submit',
    value: function submit() {
      var _this2 = this;

      if (this.state.amount <= 0 || this.state.loading) return;
      console.log('submit');
      this.setState({ loading: 'Please Review & Sign Transaction' });
      if (this.state.isBuy) {
        this.relevantCoin.buy(this.state.amount, this.state.account).on('transactionHash', function (hash) {
          console.log('transactionHash', hash);
          _this2.setState({ loading: 'Transaction is waiting for confirmation' });
        }).then(function (confirm) {
          console.log('confirm', confirm);
          _this2.setState({
            amount: 0,
            loading: 'Transaction confirmed'
          });
          _this2.check();
          setTimeout(function () {
            _this2.setState({ loading: false });
          }, 1000);
          return confirm;
        }).catch(function (err) {
          _this2.setState({ loading: false });
          console.error(err);
        });
      } else {
        return this.relevantCoin.decimals().then(function (decimals) {
          decimals = utils.padRight('10', parseInt(decimals, 10));
          return _this2.relevantCoin.sell(new BigNumber(_this2.state.amount).times(decimals).toString(), _this2.state.account).on('transactionHash', function (hash) {
            console.log('transactionHash', hash);
            _this2.setState({ loading: 'Transaction is waiting for confirmation' });
          }).then(function (confirm) {
            console.log('confirm', confirm);
            _this2.setState({
              amount: 0,
              loading: 'Transaction confirmed'
            });
            _this2.check();
            setTimeout(function () {
              _this2.setState({ loading: false });
            }, 1000);
            return confirm;
          }).catch(function (err) {
            _this2.setState({ loading: false });
            console.error(err);
          });
        });
      }
    }
  }, {
    key: 'getChartData',
    value: function getChartData(props) {
      // if (this.data) return this.data;
      var data = [];
      var totalSupply = props.totalSupply,
          ratio = props.ratio,
          balance = props.balance;

      var step = Math.round(totalSupply / 100);
      var price = balance / (ratio * totalSupply);
      var currentPrice = { supply: totalSupply, value: price };

      for (var i = step; i < totalSupply * 1.5; i += step) {
        if (i < totalSupply) {
          totalSupply = new BigNumber(totalSupply);
          var eth = 1 * this.calculateSaleReturn(_extends({}, props, { amount: totalSupply.minus(i).toString(10) }));
          var _price = (parseFloat(balance, 10) - eth) / (ratio * i);
          data.push({ supply: i, sell: _price, value: _price });
        } else if (i > totalSupply) {
          var _eth = 1 * this.calculateBuyPrice(_extends({}, props, { amount: i - totalSupply }));
          var _price2 = (_eth + parseFloat(balance, 10)) / (ratio * i);
          data.push({ supply: 1 * i, buy: _price2, value: 1 * _price2 });
        }
      }
      this.chartData = { data: data, currentPrice: currentPrice };
      return data;
    }

    // methods

    // calculateSaleReturn
    // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))

  }, {
    key: 'calculateSaleReturn',
    value: function calculateSaleReturn(props) {
      var _ref = props || this.state,
          totalSupply = _ref.totalSupply,
          balance = _ref.balance,
          ratio = _ref.ratio,
          amount = _ref.amount;

      if (!totalSupply || !balance || !ratio || !amount) return '0';

      var _supply = parseInt(totalSupply, 10);
      var _connectorBalance = parseInt(balance, 10);
      var _connectorWeight = parseFloat(ratio, 10);
      var _sellAmount = parseInt(amount, 10);
      if (_supply === 0 || _connectorBalance === 0 || _connectorWeight === 0) return '0';
      if (_sellAmount === 0) return '0';
      if (_sellAmount === _supply) return _connectorBalance.toString();
      if (_connectorWeight === 1) return _connectorBalance.toString();
      // console.log(Math.pow((1 - (_sellAmount / _supply)) , (1 / _connectorWeight)))

      // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
      var foo = _connectorBalance * (1 - Math.pow(1 - _sellAmount / _supply, 1 / _connectorWeight));
      return Math.round(foo * 10000) / 10000;
    }
  }, {
    key: 'calculateBuyPrice',
    value: function calculateBuyPrice(props) {
      var _ref2 = props || this.state,
          totalSupply = _ref2.totalSupply,
          balance = _ref2.balance,
          ratio = _ref2.ratio,
          amount = _ref2.amount;

      if (!totalSupply || !balance || !ratio || !amount) return '0';
      var _supply = parseInt(totalSupply, 10);
      var _connectorBalance = parseInt(balance, 10);
      var _connectorWeight = parseFloat(ratio, 10);
      var _buyAmount = parseInt(amount, 10);
      if (_supply === 0 || _connectorBalance === 0 || _connectorWeight === 0) return '0';
      if (_buyAmount === 0) return '0';
      var foo = _connectorBalance * (Math.pow(1 + _buyAmount / _supply, 1 / _connectorWeight) - 1);
      return Math.round(foo * 10000) / 10000;
    }

    // calculatePurchaseReturn
    // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)

  }, {
    key: 'calculatePurchaseReturn',
    value: function calculatePurchaseReturn(props) {
      var _ref3 = props || this.state,
          totalSupply = _ref3.totalSupply,
          balance = _ref3.balance,
          ratio = _ref3.ratio,
          amount = _ref3.amount;

      if (!totalSupply || !balance || !ratio || !amount) return '0';
      var _supply = parseInt(totalSupply, 10);
      var _connectorBalance = parseInt(balance, 10);
      var _connectorWeight = parseFloat(ratio, 10);
      var _depositAmount = parseInt(this.state.amount, 10);
      if (_supply === 0 || _connectorBalance === 0 || _connectorWeight === 0 || _depositAmount === 0) return '0';

      // special case if the weight = 100%
      if (_connectorWeight === 1) return _supply * (_depositAmount / _connectorBalance);

      // console.log(Math.pow((1 + _depositAmount / _connectorBalance) , (_connectorWeight)))
      //Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
      var foo = _supply * (Math.pow(1 + _depositAmount / _connectorBalance, _connectorWeight) - 1);
      return Math.round(foo * 10000) / 10000;
      // let goo = _depositAmount
      //   .div(_connectorBalance)
      //   .plus('1')

      // let foo = new Decimal(
      //   goo.toString()
      // ).pow(_connectorWeight)
      // BigNumber.config({ DECIMAL_PLACES: 4 });

      // return _supply.times(
      //   (
      //     foo
      //   ).minus('1')
      // ).toString(10)
    }

    // Web3

  }, {
    key: 'initWeb3',
    value: function initWeb3() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {

        var web3Provider = false;

        // check for metamask
        if (global.web3) {
          web3Provider = global.web3.currentProvider;
          // attempt to try again if no web3Provider
        } else {
            // this.setState({ readOnly: true})
            // web3Provider = ZeroClientProvider({
            //   getAccounts: function(){},
            //   rpcUrl: 'https://rinkeby.infura.io'
            // })
          }

        if (web3Provider) {
          global.web3 = new Web3(web3Provider);
          _this3.startChecking();
        } else {
          reject();
        }
      });
    }

    /*
     * Check every second for switching network or switching wallet
     */

  }, {
    key: 'startChecking',
    value: function startChecking() {
      if (this.pollingInterval) clearInterval(this.pollingInterval);
      this.pollingInterval = setInterval(this.check.bind(this), 1000);
    }
  }, {
    key: 'stopChecking',
    value: function stopChecking() {
      if (this.pollingInterval) clearInterval(this.pollingInterval);
    }
  }, {
    key: 'check',
    value: function check() {
      return this.checkNetwork().then(this.checkAccount.bind(this)).then(this.checkEth.bind(this)).then(this.checkBalances.bind(this)).catch(function (error) {
        console.error(error);
        throw new Error(error);
      });
    }
  }, {
    key: 'checkNetwork',
    value: function checkNetwork() {
      var _this4 = this;

      return global.web3.eth.net.getId(function (err, netId) {
        if (err) console.log(err);
        if (!err && _this4.state.network !== netId && _this4.relevantCoin) {
          var address = _this4.props.relevant ? _this4.addresses[netId] : null;
          _this4.setState({
            address: address,
            network: netId
          });
          address && _this4.relevantCoin.deployContract(address);
        }
      });
    }
  }, {
    key: 'checkAccount',
    value: function checkAccount() {
      var _this5 = this;

      return global.web3.eth.getAccounts(function (error, accounts) {
        if (error) throw new Error(error);
        if (accounts.length && _this5.state.account !== accounts[0]) {
          _this5.setState({
            unlocked: true,
            account: accounts[0]
          });
        } else if (!accounts.length) {
          _this5.setState({
            unlocked: false,
            account: null
          });
        }
      });
    }
  }, {
    key: 'checkBalances',
    value: function checkBalances() {
      if (!this.state.address) return Promise.resolve();
      return this.checkToken().then(this.checkPool.bind(this)).then(this.checkSupply.bind(this)).then(this.checkRatio.bind(this)).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'checkEth',
    value: function checkEth() {
      var _this6 = this;

      if (!this.state.account) return;
      return global.web3.eth.getBalance(this.state.account, function (error, balance) {
        if (error) throw new Error(error);
        if (_this6.state.walletBalanceWei !== balance) {
          BigNumber.config({ DECIMAL_PLACES: 4 });
          _this6.setState({
            walletBalanceWei: balance,
            walletBalance: new BigNumber(utils.fromWei(balance)).toString(10)
          });
        }
      });
    }
  }, {
    key: 'checkToken',
    value: function checkToken() {
      var _this7 = this;

      return this.relevantCoin.balanceOf(this.state.account).then(function (balance) {
        if (_this7.state.tokenBalanceWei !== balance) {
          return _this7.relevantCoin.decimals().then(function (decimals) {
            decimals = utils.padRight('10', parseInt(decimals, 10));
            BigNumber.config({ DECIMAL_PLACES: 4 });
            _this7.setState({
              tokenBalanceWei: balance,
              tokenBalance: new BigNumber(balance).div(decimals).toString(10)
            });
          });
        }
      });
    }
  }, {
    key: 'checkPool',
    value: function checkPool() {
      var _this8 = this;

      return this.relevantCoin.poolBalance().then(function (balance) {
        if (_this8.state.balanceWei !== balance) {
          BigNumber.config({ DECIMAL_PLACES: 4 });
          _this8.setState({
            balanceWei: balance,
            balance: new BigNumber(utils.fromWei(balance)).toString(10)
          });
        }
      });
    }
  }, {
    key: 'checkSupply',
    value: function checkSupply() {
      var _this9 = this;

      return this.relevantCoin.totalSupply().then(function (totalSupply) {
        if (_this9.state.totalSupplyWei !== totalSupply) {
          return _this9.relevantCoin.decimals().then(function (decimals) {
            decimals = utils.padRight('10', parseInt(decimals, 10));
            _this9.setState({
              totalSupplyWei: totalSupply,
              totalSupply: new BigNumber(totalSupply).div(decimals).toString()
            });
          });
        }
      });
    }
  }, {
    key: 'checkRatio',
    value: function checkRatio() {
      var _this10 = this;

      return this.relevantCoin.reserveRatio().then(function (reserveRatio) {
        reserveRatio = new BigNumber(reserveRatio).div('1000000');
        if (_this10.state.ratio !== reserveRatio.toString()) {
          _this10.setState({
            ratio: reserveRatio.toString()
          });
        }
      });
    }
  }]);

  return BondedToken;
}(_react2.default.Component);

exports.default = BondedToken;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".\\--bondedToken {\n  font-family: Arial;\n  font-size:16px;\n  line-height:1.2em;\n  border: 1px solid black;\n}\n.\\--bondedToken a,\n.\\--bondedToken a:active,\n.\\--bondedToken a:visited,\n.\\--bondedToken a:hover {\n  color: lightgrey;\n  text-decoration: none;\n}\n.\\--bondedToken .\\--bondedToken-pointer {\n  cursor: pointer;\n}\n.\\--bondedToken input:focus,\n.\\--bondedToken button:focus{\n    outline: none;\n}\n.\\--bondedToken label {\n  display: block;\n  border-bottom:1px solid grey;\n}\n.\\--bondedToken label:not(.\\--bondedToken-ratio) input[type=\"number\"],\n.\\--bondedToken label:not(.\\--bondedToken-ratio) > div {\n  width:calc(100% - 60px);\n  max-width: calc(50vw - 2em);\n  display: inline;\n}\n.\\--bondedToken input[type=\"range\"] {\n  width:100%;\n}\n.\\--bondedToken input[type=\"text\"],\n.\\--bondedToken input[type=\"number\"] {\n  display: inline;\n  border: none;\n  text-align:right;\n  font-size: 1rem;\n  width:100%;\n  background-color: transparent;\n}\n.\\--bondedToken-flex {\n  display: flex;\n  justify-content: space-between;\n}\n.\\--bondedToken-flex-center {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*.--bondedToken-flex > div {\n  flex-grow: 1\n}*/\n\n\n.\\--bondedToken-mx-auto {\n  margin-right:auto;\n  margin-left:auto;\n}\n.\\--bondedToken-eth::after {\n  content: ' Ether';\n  display:inline;\n}\n.\\--bondedToken-token::after {\n  content: ' Tokens';\n  display:inline;\n}\n\n.\\--bondedTokenHeader {\n  background-color: grey;\n  border-bottom: 1px solid black;\n  color: lightgray;\n  padding:1em;\n  font-size: 0.9em;\n\n}\n.\\--bondedTokenAddress {\n  /*font-size: 3.8vw;\n  line-height: 3.8vw; */\n  padding: 0em 0px 1em 0;\n}\n\n\n/* --bondedTokenTransact */\n.\\--bondedTokenTransact {\n  padding:1em;\n}\n\n\n/* BondedTokenAdvanced */\n.\\--BondedTokenAdvanced {\n  border-top:1px solid black;\n  padding:1em;\n  background-color: lightgrey;\n}\n.\\--BondedTokenAdvanced-open {\n}\n.\\--bondedToken-submit-container {\n  padding:1em;\n}\n.\\--bondedToken-submit {\n  box-sizing: border-box;\n  width:100%;\n  border:1px solid #4600FF;\n  background-color: #4600FF;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  padding:1em;\n  border-radius: 5px;\n  transition: transform 100ms ease;\n  cursor: pointer;\n  display: block;\n  position: relative;\n  transform: translate(0px, 0px);\n}\n\n.\\--bondedToken-submit:hover:not(:active){\n  transform: translate(-3px, -3px);\n  box-shadow: 3px 3px 1px rgba(0,0,0,0.1);\n}\n\n.\\--bondedToken-submit:active {\n    transform: translate(0px, 0px) !important;\n}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"contractName":"RelevantCoin","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"inflationSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveRatio","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITAL_BALANCE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"virtualSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_supply","type":"uint256"},{"name":"_connectorBalance","type":"uint256"},{"name":"_connectorWeight","type":"uint32"},{"name":"_depositAmount","type":"uint256"}],"name":"calculatePurchaseReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_supply","type":"uint256"},{"name":"_connectorBalance","type":"uint256"},{"name":"_connectorWeight","type":"uint32"},{"name":"_sellAmount","type":"uint256"}],"name":"calculateSaleReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardPool","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"intervalsSinceLastInflationUpdate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timeInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"poolBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"HOURLY_INFLATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"inflationRatePerInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CURVE_RATIO","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"mintTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"setGasPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"virtualBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sellAmount","type":"uint256"}],"name":"sell","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TIME_INTERVAL","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenSupply","type":"uint256"}],"name":"computeInflation","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"logString","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"logString","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"LogInflation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountMinted","type":"uint256"},{"indexed":false,"name":"totalCost","type":"uint256"}],"name":"LogMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountWithdrawn","type":"uint256"},{"indexed":false,"name":"reward","type":"uint256"}],"name":"LogWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"logString","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"LogBondingCurve","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x60606040526040805190810160405280600381526020017f302e3300000000000000000000000000000000000000000000000000000000008152506003908051906020019062000051929190620010e0565b5060006087556000608e5534156200006857600080fd5b701c35fedd14ffffffffffffffffffffffff600460206080811015156200008b57fe5b0181905550701b0ce43b323fffffffffffffffffffffff60046021608081101515620000b357fe5b01819055507019f0028ec1ffffffffffffffffffffffff60046022608081101515620000db57fe5b01819055507018ded91f0e7fffffffffffffffffffffff600460236080811015156200010357fe5b01819055507017d8ec7f0417ffffffffffffffffffffff600460246080811015156200012b57fe5b01819055507016ddc6556cdbffffffffffffffffffffff600460256080811015156200015357fe5b01819055507015ecf52776a1ffffffffffffffffffffff600460266080811015156200017b57fe5b01819055507015060c256cb2ffffffffffffffffffffff60046027608081101515620001a357fe5b0181905550701428a2f98d72ffffffffffffffffffffff60046028608081101515620001cb57fe5b01819055507013545598e5c23fffffffffffffffffffff60046029608081101515620001f357fe5b0181905550701288c4161ce1dfffffffffffffffffffff6004602a6080811015156200021b57fe5b01819055507011c592761c666fffffffffffffffffffff6004602b6080811015156200024357fe5b018190555070110a688680a757ffffffffffffffffffff6004602c6080811015156200026b57fe5b0181905550701056f1b5bedf77ffffffffffffffffffff6004602d6080811015156200029357fe5b0181905550700faadceceeff8bffffffffffffffffffff6004602e608081101515620002bb57fe5b0181905550700f05dc6b27edadffffffffffffffffffff6004602f608081101515620002e357fe5b0181905550700e67a5a25da4107fffffffffffffffffff600460306080811015156200030b57fe5b0181905550700dcff115b14eedffffffffffffffffffff600460316080811015156200033357fe5b0181905550700d3e7a392431239fffffffffffffffffff600460326080811015156200035b57fe5b0181905550700cb2ff529eb71e4fffffffffffffffffff600460336080811015156200038357fe5b0181905550700c2d415c3db974afffffffffffffffffff60046034608081101515620003ab57fe5b0181905550700bad03e7d883f69bffffffffffffffffff60046035608081101515620003d357fe5b0181905550700b320d03b2c343d5ffffffffffffffffff60046036608081101515620003fb57fe5b0181905550700abc25204e02828dffffffffffffffffff600460376080811015156200042357fe5b0181905550700a4b16f74ee4bb207fffffffffffffffff600460386080811015156200044b57fe5b01819055507009deaf736ac1f569ffffffffffffffffff600460396080811015156200047357fe5b0181905550700976bd9952c7aa957fffffffffffffffff6004603a6080811015156200049b57fe5b01819055507009131271922eaa606fffffffffffffffff6004603b608081101515620004c357fe5b01819055507008b380f3558668c46fffffffffffffffff6004603c608081101515620004eb57fe5b0181905550700857ddf0117efa215bffffffffffffffff6004603d6080811015156200051357fe5b01819055507007ffffffffffffffffffffffffffffffff6004603e6080811015156200053b57fe5b01819055507007abbf6f6abb9d087fffffffffffffffff6004603f6080811015156200056357fe5b018190555070075af62cbac95f7dfa7fffffffffffffff600460406080811015156200058b57fe5b018190555070070d7fb7452e187ac13fffffffffffffff60046041608081101515620005b357fe5b01819055507006c3390ecc8af379295fffffffffffffff60046042608081101515620005db57fe5b018190555070067c00a3b07ffc01fd6fffffffffffffff600460436080811015156200060357fe5b0181905550700637b647c39cbb9d3d27ffffffffffffff600460446080811015156200062b57fe5b01819055507005f63b1fc104dbd39587ffffffffffffff600460456080811015156200065357fe5b01819055507005b771955b36e12f7235ffffffffffffff600460466080811015156200067b57fe5b018190555070057b3d49dda84556d6f6ffffffffffffff60046047608081101515620006a357fe5b018190555070054183095b2c8ececf30ffffffffffffff60046048608081101515620006cb57fe5b018190555070050a28be635ca2b888f77fffffffffffff60046049608081101515620006f357fe5b01819055507004d5156639708c9db33c3fffffffffffff6004604a6080811015156200071b57fe5b01819055507004a23105873875bd52dfdfffffffffffff6004604b6080811015156200074357fe5b0181905550700471649d87199aa990756fffffffffffff6004604c6080811015156200076b57fe5b01819055507004429a21a029d4c1457cfbffffffffffff6004604d6080811015156200079357fe5b0181905550700415bc6d6fb7dd71af2cb3ffffffffffff6004604e608081101515620007bb57fe5b01819055507003eab73b3bbfe282243ce1ffffffffffff6004604f608081101515620007e357fe5b01819055507003c1771ac9fb6b4c18e229ffffffffffff600460506080811015156200080b57fe5b0181905550700399e96897690418f785257fffffffffff600460516080811015156200083357fe5b0181905550700373fc456c53bb779bf0ea9fffffffffff600460526080811015156200085b57fe5b018190555070034f9e8e490c48e67e6ab8bfffffffffff600460536080811015156200088357fe5b018190555070032cbfd4a7adc790560b3337ffffffffff60046054608081101515620008ab57fe5b018190555070030b50570f6e5d2acca94613ffffffffff60046055608081101515620008d357fe5b01819055507002eb40f9f620fda6b56c2861ffffffffff60046056608081101515620008fb57fe5b01819055507002cc8340ecb0d0f520a6af58ffffffffff600460576080811015156200092357fe5b01819055507002af09481380a0a35cf1ba02ffffffffff600460586080811015156200094b57fe5b0181905550700292c5bdd3b92ec810287b1b3fffffffff600460596080811015156200097357fe5b0181905550700277abdcdab07d5a77ac6d6b9fffffffff6004605a6080811015156200099b57fe5b018190555070025daf6654b1eaa55fd64df5efffffffff6004605b608081101515620009c357fe5b0181905550700244c49c648baa98192dce88b7ffffffff6004605c608081101515620009eb57fe5b018190555070022ce03cd5619a311b2471268bffffffff6004605d60808110151562000a1357fe5b0181905550700215f77c045fbe885654a44a0fffffffff6004605e60808110151562000a3b57fe5b01819055507001ffffffffffffffffffffffffffffffff6004605f60808110151562000a6357fe5b01819055507001eaefdbdaaee7421fc4d3ede5ffffffff6004606060808110151562000a8b57fe5b01819055507001d6bd8b2eb257df7e8ca57b09bfffffff6004606160808110151562000ab357fe5b01819055507001c35fedd14b861eb0443f7f133fffffff6004606260808110151562000adb57fe5b01819055507001b0ce43b322bcde4a56e8ada5afffffff6004606360808110151562000b0357fe5b018190555070019f0028ec1fff007f5a195a39dfffffff6004606460808110151562000b2b57fe5b018190555070018ded91f0e72ee74f49b15ba527ffffff6004606560808110151562000b5357fe5b018190555070017d8ec7f04136f4e5615fd41a63ffffff6004606660808110151562000b7b57fe5b018190555070016ddc6556cdb84bdc8d12d22e6fffffff6004606760808110151562000ba357fe5b018190555070015ecf52776a1155b5bd8395814f7fffff6004606860808110151562000bcb57fe5b018190555070015060c256cb23b3b3cc3754cf40ffffff6004606960808110151562000bf357fe5b01819055507001428a2f98d728ae223ddab715be3fffff6004606a60808110151562000c1b57fe5b018190555070013545598e5c23276ccf0ede68034fffff6004606b60808110151562000c4357fe5b01819055507001288c4161ce1d6f54b7f61081194fffff6004606c60808110151562000c6b57fe5b018190555070011c592761c666aa641d5a01a40f17ffff6004606d60808110151562000c9357fe5b0181905550700110a688680a7530515f3e6e6cfdcdffff6004606e60808110151562000cbb57fe5b01819055507001056f1b5bedf75c6bcb2ce8aed428ffff6004606f60808110151562000ce357fe5b01819055506ffaadceceeff8a0890f3875f008277fff6004607060808110151562000d0a57fe5b01819055506ff05dc6b27edad306388a600f6ba0bfff6004607160808110151562000d3157fe5b01819055506fe67a5a25da41063de1495d5b18cdbfff6004607260808110151562000d5857fe5b01819055506fdcff115b14eedde6fc3aa5353f2e4fff6004607360808110151562000d7f57fe5b01819055506fd3e7a3924312399f9aae2e0f868f8fff6004607460808110151562000da657fe5b01819055506fcb2ff529eb71e41582cccd5a1ee26fff6004607560808110151562000dcd57fe5b01819055506fc2d415c3db974ab32a51840c0b67edff6004607660808110151562000df457fe5b01819055506fbad03e7d883f69ad5b0a186184e06bff6004607760808110151562000e1b57fe5b01819055506fb320d03b2c343d4829abd6075f0cc5ff6004607860808110151562000e4257fe5b01819055506fabc25204e02828d73c6e80bcdb1a95bf6004607960808110151562000e6957fe5b01819055506fa4b16f74ee4bb2040a1ec6c15fbbf2df6004607a60808110151562000e9057fe5b01819055506f9deaf736ac1f569deb1b5ae3f36c130f6004607b60808110151562000eb757fe5b01819055506f976bd9952c7aa957f5937d790ef650376004607c60808110151562000ede57fe5b01819055506f9131271922eaa6064b73a22d0bd4f2bf6004607d60808110151562000f0557fe5b01819055506f8b380f3558668c46c91c49a2f8e967b96004607e60808110151562000f2c57fe5b01819055506f857ddf0117efa215952912839f6473e66004607f60808110151562000f5357fe5b018190555033608460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033608460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042608881905550670de0c098e6d79910608981905550610e10608a81905550620249f0608660006101000a81548163ffffffff021916908363ffffffff16021790555069d3c21bcecceda100000060018190555069d3c21bcecceda1000000608b8190555069d3c21bcecceda100000066470de4df82000069d3c21bcecceda1000000620249f063ffffffff1602028115156200107357fe5b0460858190555069d3c21bcecceda100000066470de4df82000069d3c21bcecceda1000000620249f063ffffffff160202811515620010ae57fe5b04608c819055506000608d8190555064060db8840060878190555069d3c21bcecceda10000006001819055506200118f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200112357805160ff191683800117855562001154565b8280016001018555821562001154579182015b828111156200115357825182559160200191906001019062001136565b5b50905062001163919062001167565b5090565b6200118c91905b80821115620011885760008160009055506001016200116e565b5090565b90565b612cd9806200119f6000396000f3006060604052600436106101d8576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101e3578063095ea7b3146102715780630ab07e88146102cb5780630c7d5cd8146102f457806318160ddd1461032957806323b872dd14610352578063269e3592146103cb578063277b2f97146103f457806329a00e7c1461041d5780632ff2e9dc14610475578063313ce5671461049e57806349f9b0f7146104cd57806354fd4d501461052557806366188463146105b357806366666aa91461060d5780636cc8063e1461063657806370a082311461065f5780637bd703e8146106ac5780637c5e2795146106f95780638da5cb5b146107225780638f5164381461077757806395d89b41146107a057806396365d441461082e578063a6f2ae3a14610857578063a9059cbb14610879578063aa311dc8146108d3578063b03f4d4f146108fc578063b1741fb214610925578063bcfaa79d1461095a578063bf1fe420146109ab578063d73dd623146109ce578063dcd2af1714610a28578063dd62ed3e14610a51578063e4849b3214610abd578063e9bb37a014610af8578063f2fde38b14610b21578063fd748c3a14610b5a578063fe173b9714610b91575b6101e0610bba565b50005b34156101ee57600080fd5b6101f6610d0e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023657808201518184015260208101905061021b565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027c57600080fd5b6102b1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d47565b604051808215151515815260200191505060405180910390f35b34156102d657600080fd5b6102de610e39565b6040518082815260200191505060405180910390f35b34156102ff57600080fd5b610307610e3f565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561033457600080fd5b61033c610e55565b6040518082815260200191505060405180910390f35b341561035d57600080fd5b6103b1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e5f565b604051808215151515815260200191505060405180910390f35b34156103d657600080fd5b6103de611219565b6040518082815260200191505060405180910390f35b34156103ff57600080fd5b610407611250565b6040518082815260200191505060405180910390f35b341561042857600080fd5b61045f600480803590602001909190803590602001909190803563ffffffff16906020019091908035906020019091905050611256565b6040518082815260200191505060405180910390f35b341561048057600080fd5b610488611335565b6040518082815260200191505060405180910390f35b34156104a957600080fd5b6104b1611343565b604051808260ff1660ff16815260200191505060405180910390f35b34156104d857600080fd5b61050f600480803590602001909190803590602001909190803563ffffffff16906020019091908035906020019091905050611348565b6040518082815260200191505060405180910390f35b341561053057600080fd5b61053861144c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561057857808201518184015260208101905061055d565b50505050905090810190601f1680156105a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105be57600080fd5b6105f3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506114ea565b604051808215151515815260200191505060405180910390f35b341561061857600080fd5b61062061177b565b6040518082815260200191505060405180910390f35b341561064157600080fd5b610649611781565b6040518082815260200191505060405180910390f35b341561066a57600080fd5b610696600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117aa565b6040518082815260200191505060405180910390f35b34156106b757600080fd5b6106e3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f2565b6040518082815260200191505060405180910390f35b341561070457600080fd5b61070c61189a565b6040518082815260200191505060405180910390f35b341561072d57600080fd5b6107356118a5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561078257600080fd5b61078a6118cb565b6040518082815260200191505060405180910390f35b34156107ab57600080fd5b6107b36118d1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f35780820151818401526020810190506107d8565b50505050905090810190601f1680156108205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561083957600080fd5b61084161190a565b6040518082815260200191505060405180910390f35b61085f610bba565b604051808215151515815260200191505060405180910390f35b341561088457600080fd5b6108b9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611910565b604051808215151515815260200191505060405180910390f35b34156108de57600080fd5b6108e6611b2f565b6040518082815260200191505060405180910390f35b341561090757600080fd5b61090f611b3b565b6040518082815260200191505060405180910390f35b341561093057600080fd5b610938611b41565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561096557600080fd5b610991600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b48565b604051808215151515815260200191505060405180910390f35b34156109b657600080fd5b6109cc6004808035906020019091905050611c99565b005b34156109d957600080fd5b610a0e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611d0e565b604051808215151515815260200191505060405180910390f35b3415610a3357600080fd5b610a3b611f0a565b6040518082815260200191505060405180910390f35b3415610a5c57600080fd5b610aa7600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611f10565b6040518082815260200191505060405180910390f35b3415610ac857600080fd5b610ade6004808035906020019091905050611f97565b604051808215151515815260200191505060405180910390f35b3415610b0357600080fd5b610b0b6121ed565b6040518082815260200191505060405180910390f35b3415610b2c57600080fd5b610b58600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506121f3565b005b3415610b6557600080fd5b610b7b600480803590602001909190505061234b565b6040518082815260200191505060405180910390f35b3415610b9c57600080fd5b610ba4612495565b6040518082815260200191505060405180910390f35b6000806087543a11151515610bcb57fe5b600034111515610bda57600080fd5b610bfc600154608554608660009054906101000a900463ffffffff1634611256565b9050610c138160015461249b90919063ffffffff16565b600181905550610c6a816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cc13460855461249b90919063ffffffff16565b6085819055507fe7360c0fa1984a85874443100f5b25dd4f84192659660eb199f6c96e11defbcb8134604051808381526020018281526020019250505060405180910390a1600191505090565b6040805190810160405280600d81526020017f52656c6576616e74546f6b656e0000000000000000000000000000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b608d5481565b608660009054906101000a900463ffffffff1681565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e9c57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610ee957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610f7457600080fd5b610fc5826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611058826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061112982600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b69d3c21bcecceda100000066470de4df82000069d3c21bcecceda1000000620249f063ffffffff16020281151561124c57fe5b0481565b608b5481565b6000806000806000808911801561126d5750600088115b801561127f575060008763ffffffff16115b801561129a5750620f424063ffffffff168763ffffffff1611155b15156112a557600080fd5b60008614156112b75760009450611329565b620f424063ffffffff168763ffffffff1614156112ea57876112d98a886124d2565b8115156112e257fe5b049450611329565b6112f48689612505565b9150611305828989620f4240612523565b80945081955050508260ff1661131b8a866124d2565b9060020a9004905088810394505b50505050949350505050565b69d3c21bcecceda100000081565b601281565b60008060008060008060008a1180156113615750600089115b8015611373575060008863ffffffff16115b801561138e5750620f424063ffffffff168863ffffffff1611155b801561139a5750898711155b15156113a557600080fd5b60008714156113b7576000955061143f565b898714156113c75788955061143f565b620f424063ffffffff168863ffffffff1614156113fa57896113e98a896124d2565b8115156113f257fe5b04955061143f565b868a03925061140e8a84620f42408b612523565b809550819650505061142089866124d2565b91508360ff16899060020a0290508481830381151561143b57fe5b0495505b5050505050949350505050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114e25780601f106114b7576101008083540402835291602001916114e2565b820191906000526020600020905b8154815290600101906020018083116114c557829003601f168201915b505050505081565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808311156115fb576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061168f565b61160e83826124b990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b608e5481565b600080608a5490508060885481151561179657fe5b0481428115156117a257fe5b040391505090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073__ConvertLib____________________________6396e4ee3d611817846117aa565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b151561187857600080fd5b6102c65a03f4151561188957600080fd5b505050604051805190509050919050565b66470de4df82000081565b608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b608a5481565b6040805190810160405280600381526020017f52454c000000000000000000000000000000000000000000000000000000000081525081565b60855481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561194d57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561199a57600080fd5b6119eb826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611a7e826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b670de0c098e6d7991081565b60895481565b620249f081565b600080600080608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611baa57600080fd5b611bc1608b546001546124b990919063ffffffff16565b9250611bcc8361234b565b9150608a549050808142811515611bdf57fe5b04026088819055507fc5afe0d1e3743306067bb00d0a7c1f30b9ac58f3775a0f12a25f3cfb35c406ce826040518080602001838152602001828103825260098152602001807f6e6577546f6b656e7300000000000000000000000000000000000000000000008152506020019250505060405180910390a1611c6c82608d5461249b90919063ffffffff16565b608d81905550611c8782608e5461249b90919063ffffffff16565b608e8190555060019350505050919050565b608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611cf557600080fd5b600081111515611d0457600080fd5b8060878190555050565b6000611d9f82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b608c5481565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008060008060006087543a11151515611fad57fe5b600086118015611ffb5750856000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b151561200657600080fd5b6001549350612020608c54856124b990919063ffffffff16565b861115151561202e57600080fd5b608d54840184608660009054906101000a900463ffffffff1663ffffffff160281151561205757fe5b049250608660009054906101000a900463ffffffff1663ffffffff168363ffffffff166085540281151561208757fe5b04915061209684838589611348565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156120d857600080fd5b6120ed816085546124b990919063ffffffff16565b608581905550612144866000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061219b866001546124b990919063ffffffff16565b6001819055507f210405eb88ac7589aa9de0a6e36b9c9d3cd6e4061b74363d250a77afe3c6efb78682604051808381526020018281526020019250505060405180910390a16001945050505050919050565b610e1081565b608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561224f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561228b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380608460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000806000806000806089549650608a5495504294508560885481151561237157fe5b04868681151561237d57fe5b0403935060008411151561239057600080fd5b869250600191505b838210156123d557670de0b6b3a76400006123bc888561258090919063ffffffff16565b8115156123c557fe5b0492508180600101925050612398565b7fc5afe0d1e3743306067bb00d0a7c1f30b9ac58f3775a0f12a25f3cfb35c406ce836040518080602001838152602001828103825260048152602001807f72617465000000000000000000000000000000000000000000000000000000008152506020019250505060405180910390a188905061248781612479670de0b6b3a764000061246b878e61258090919063ffffffff16565b6125bb90919063ffffffff16565b6124b990919063ffffffff16565b975050505050505050919050565b60875481565b60008082840190508381101515156124af57fe5b8091505092915050565b60008282111515156124c757fe5b818303905092915050565b600080828402905060008414806124f357508284828115156124f057fe5b04145b15156124fb57fe5b8091505092915050565b600080828401905083811015151561251957fe5b8091505092915050565b6000806000808463ffffffff168663ffffffff166125418a8a6125d6565b0281151561254b57fe5b0491506125578261273d565b905061257081607f0360ff16839060020a9004826127fd565b8193509350505094509492505050565b600080600084141561259557600091506125b4565b82840290508284828115156125a657fe5b041415156125b057fe5b8091505b5092915050565b60008082848115156125c957fe5b0490508091505092915050565b60008060008060007001ffffffffffffffffffffffffffffffff87111515156125fb57fe5b60009350856f80000000000000000000000000000000880281151561261c57fe5b049250700100000000000000000000000000000000831015156126855761265d6f800000000000000000000000000000008481151561265757fe5b04612c21565b91508160ff16839060020a900492506f800000000000000000000000000000008260ff160293505b6f8000000000000000000000000000000083111561271357607f90505b60008160ff161115612712576f800000000000000000000000000000008384028115156126cb57fe5b04925070010000000000000000000000000000000083101515612706576001839060020a900492506001810360ff1660019060020a02840193505b806001900390506126a2565b5b607a60ff166f02c5c85fdf473de6af278ece600fcbda85029060020a900494505050505092915050565b60008060008060209250607f91505b8160ff166001840160ff16101561279e57600282840160ff1681151561276e57fe5b0490508460048260ff1660808110151561278457fe5b015410151561279557809250612799565b8091505b61274c565b8460048360ff166080811015156127b157fe5b01541015156127c2578193506127f5565b8460048460ff166080811015156127d557fe5b01541015156127e6578293506127f5565b600015156127f057fe5b600093505b505050919050565b6000806000849150600090508360ff168583029060020a900491506f03442c4e6074a82f1797f72ac00000008202810190508360ff168583029060020a900491506f0116b96f757c380fb287fd0e400000008202810190508360ff168583029060020a900491506e45ae5bdd5f0e03eca1ff43900000008202810190508360ff168583029060020a900491506e0defabf91302cd95b9ffda500000008202810190508360ff168583029060020a900491506e02529ca9832b22439efff9b80000008202810190508360ff168583029060020a900491506d54f1cf12bd04e516b6da880000008202810190508360ff168583029060020a900491506d0a9e39e257a09ca2d6db510000008202810190508360ff168583029060020a900491506d012e066e7b839fa050c3090000008202810190508360ff168583029060020a900491506c1e33d7d926c329a1ad1a8000008202810190508360ff168583029060020a900491506c02bee513bdb4a6b19b5f8000008202810190508360ff168583029060020a900491506b3a9316fa79b88eccf2a000008202810190508360ff168583029060020a900491506b048177ebe1fa8123752000008202810190508360ff168583029060020a900491506a5263fe90242dcbacf000008202810190508360ff168583029060020a900491506a057e22099c030d941000008202810190508360ff168583029060020a900491506957e22099c030d94100008202810190508360ff168583029060020a9004915069052b6b545699763100008202810190508360ff168583029060020a90049150684985f67696bf7480008202810190508360ff168583029060020a900491506803dea12ea99e4980008202810190508360ff168583029060020a900491506731880f2214b6e0008202810190508360ff168583029060020a9004915067025bcff56eb360008202810190508360ff168583029060020a90049150661b722e10ab10008202810190508360ff168583029060020a900491506601317c700770008202810190508360ff168583029060020a90049150650cba84aafa008202810190508360ff168583029060020a900491506482573a0a008202810190508360ff168583029060020a900491506405035ad9008202810190508360ff168583029060020a90049150632f881b008202810190508360ff168583029060020a900491506301b293408202810190508360ff168583029060020a90049150620efc408202810190508360ff168583029060020a90049150617fe08202810190508360ff168583029060020a900491506104208202810190508360ff168583029060020a9004915060218202810190508360ff168583029060020a9004915060018202810190508360ff1660019060020a02856f0688589cc0e9505e2f2fee558000000083811515612c1457fe5b0401019250505092915050565b6000806000809150610100841015612c58575b6001841115612c53576001849060020a90049350600182019150612c34565b612ca3565b608090505b60008160ff161115612ca2578060ff1660019060020a0284101515612c8f578060ff16849060020a9004935080821791505b60018160ff169060020a90049050612c5d565b5b81925050509190505600a165627a7a7230582004d07ded80db54494d93592c429eae52606965881ac9c5b3a771375b6c4f8da30029","deployedBytecode":"0x6060604052600436106101d8576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101e3578063095ea7b3146102715780630ab07e88146102cb5780630c7d5cd8146102f457806318160ddd1461032957806323b872dd14610352578063269e3592146103cb578063277b2f97146103f457806329a00e7c1461041d5780632ff2e9dc14610475578063313ce5671461049e57806349f9b0f7146104cd57806354fd4d501461052557806366188463146105b357806366666aa91461060d5780636cc8063e1461063657806370a082311461065f5780637bd703e8146106ac5780637c5e2795146106f95780638da5cb5b146107225780638f5164381461077757806395d89b41146107a057806396365d441461082e578063a6f2ae3a14610857578063a9059cbb14610879578063aa311dc8146108d3578063b03f4d4f146108fc578063b1741fb214610925578063bcfaa79d1461095a578063bf1fe420146109ab578063d73dd623146109ce578063dcd2af1714610a28578063dd62ed3e14610a51578063e4849b3214610abd578063e9bb37a014610af8578063f2fde38b14610b21578063fd748c3a14610b5a578063fe173b9714610b91575b6101e0610bba565b50005b34156101ee57600080fd5b6101f6610d0e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023657808201518184015260208101905061021b565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027c57600080fd5b6102b1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d47565b604051808215151515815260200191505060405180910390f35b34156102d657600080fd5b6102de610e39565b6040518082815260200191505060405180910390f35b34156102ff57600080fd5b610307610e3f565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561033457600080fd5b61033c610e55565b6040518082815260200191505060405180910390f35b341561035d57600080fd5b6103b1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e5f565b604051808215151515815260200191505060405180910390f35b34156103d657600080fd5b6103de611219565b6040518082815260200191505060405180910390f35b34156103ff57600080fd5b610407611250565b6040518082815260200191505060405180910390f35b341561042857600080fd5b61045f600480803590602001909190803590602001909190803563ffffffff16906020019091908035906020019091905050611256565b6040518082815260200191505060405180910390f35b341561048057600080fd5b610488611335565b6040518082815260200191505060405180910390f35b34156104a957600080fd5b6104b1611343565b604051808260ff1660ff16815260200191505060405180910390f35b34156104d857600080fd5b61050f600480803590602001909190803590602001909190803563ffffffff16906020019091908035906020019091905050611348565b6040518082815260200191505060405180910390f35b341561053057600080fd5b61053861144c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561057857808201518184015260208101905061055d565b50505050905090810190601f1680156105a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105be57600080fd5b6105f3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506114ea565b604051808215151515815260200191505060405180910390f35b341561061857600080fd5b61062061177b565b6040518082815260200191505060405180910390f35b341561064157600080fd5b610649611781565b6040518082815260200191505060405180910390f35b341561066a57600080fd5b610696600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117aa565b6040518082815260200191505060405180910390f35b34156106b757600080fd5b6106e3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f2565b6040518082815260200191505060405180910390f35b341561070457600080fd5b61070c61189a565b6040518082815260200191505060405180910390f35b341561072d57600080fd5b6107356118a5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561078257600080fd5b61078a6118cb565b6040518082815260200191505060405180910390f35b34156107ab57600080fd5b6107b36118d1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f35780820151818401526020810190506107d8565b50505050905090810190601f1680156108205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561083957600080fd5b61084161190a565b6040518082815260200191505060405180910390f35b61085f610bba565b604051808215151515815260200191505060405180910390f35b341561088457600080fd5b6108b9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611910565b604051808215151515815260200191505060405180910390f35b34156108de57600080fd5b6108e6611b2f565b6040518082815260200191505060405180910390f35b341561090757600080fd5b61090f611b3b565b6040518082815260200191505060405180910390f35b341561093057600080fd5b610938611b41565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561096557600080fd5b610991600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b48565b604051808215151515815260200191505060405180910390f35b34156109b657600080fd5b6109cc6004808035906020019091905050611c99565b005b34156109d957600080fd5b610a0e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611d0e565b604051808215151515815260200191505060405180910390f35b3415610a3357600080fd5b610a3b611f0a565b6040518082815260200191505060405180910390f35b3415610a5c57600080fd5b610aa7600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611f10565b6040518082815260200191505060405180910390f35b3415610ac857600080fd5b610ade6004808035906020019091905050611f97565b604051808215151515815260200191505060405180910390f35b3415610b0357600080fd5b610b0b6121ed565b6040518082815260200191505060405180910390f35b3415610b2c57600080fd5b610b58600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506121f3565b005b3415610b6557600080fd5b610b7b600480803590602001909190505061234b565b6040518082815260200191505060405180910390f35b3415610b9c57600080fd5b610ba4612495565b6040518082815260200191505060405180910390f35b6000806087543a11151515610bcb57fe5b600034111515610bda57600080fd5b610bfc600154608554608660009054906101000a900463ffffffff1634611256565b9050610c138160015461249b90919063ffffffff16565b600181905550610c6a816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cc13460855461249b90919063ffffffff16565b6085819055507fe7360c0fa1984a85874443100f5b25dd4f84192659660eb199f6c96e11defbcb8134604051808381526020018281526020019250505060405180910390a1600191505090565b6040805190810160405280600d81526020017f52656c6576616e74546f6b656e0000000000000000000000000000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b608d5481565b608660009054906101000a900463ffffffff1681565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e9c57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610ee957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610f7457600080fd5b610fc5826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611058826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061112982600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b69d3c21bcecceda100000066470de4df82000069d3c21bcecceda1000000620249f063ffffffff16020281151561124c57fe5b0481565b608b5481565b6000806000806000808911801561126d5750600088115b801561127f575060008763ffffffff16115b801561129a5750620f424063ffffffff168763ffffffff1611155b15156112a557600080fd5b60008614156112b75760009450611329565b620f424063ffffffff168763ffffffff1614156112ea57876112d98a886124d2565b8115156112e257fe5b049450611329565b6112f48689612505565b9150611305828989620f4240612523565b80945081955050508260ff1661131b8a866124d2565b9060020a9004905088810394505b50505050949350505050565b69d3c21bcecceda100000081565b601281565b60008060008060008060008a1180156113615750600089115b8015611373575060008863ffffffff16115b801561138e5750620f424063ffffffff168863ffffffff1611155b801561139a5750898711155b15156113a557600080fd5b60008714156113b7576000955061143f565b898714156113c75788955061143f565b620f424063ffffffff168863ffffffff1614156113fa57896113e98a896124d2565b8115156113f257fe5b04955061143f565b868a03925061140e8a84620f42408b612523565b809550819650505061142089866124d2565b91508360ff16899060020a0290508481830381151561143b57fe5b0495505b5050505050949350505050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114e25780601f106114b7576101008083540402835291602001916114e2565b820191906000526020600020905b8154815290600101906020018083116114c557829003601f168201915b505050505081565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808311156115fb576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061168f565b61160e83826124b990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b608e5481565b600080608a5490508060885481151561179657fe5b0481428115156117a257fe5b040391505090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073__ConvertLib____________________________6396e4ee3d611817846117aa565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b151561187857600080fd5b6102c65a03f4151561188957600080fd5b505050604051805190509050919050565b66470de4df82000081565b608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b608a5481565b6040805190810160405280600381526020017f52454c000000000000000000000000000000000000000000000000000000000081525081565b60855481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561194d57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561199a57600080fd5b6119eb826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611a7e826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b670de0c098e6d7991081565b60895481565b620249f081565b600080600080608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611baa57600080fd5b611bc1608b546001546124b990919063ffffffff16565b9250611bcc8361234b565b9150608a549050808142811515611bdf57fe5b04026088819055507fc5afe0d1e3743306067bb00d0a7c1f30b9ac58f3775a0f12a25f3cfb35c406ce826040518080602001838152602001828103825260098152602001807f6e6577546f6b656e7300000000000000000000000000000000000000000000008152506020019250505060405180910390a1611c6c82608d5461249b90919063ffffffff16565b608d81905550611c8782608e5461249b90919063ffffffff16565b608e8190555060019350505050919050565b608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611cf557600080fd5b600081111515611d0457600080fd5b8060878190555050565b6000611d9f82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461249b90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b608c5481565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008060008060006087543a11151515611fad57fe5b600086118015611ffb5750856000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b151561200657600080fd5b6001549350612020608c54856124b990919063ffffffff16565b861115151561202e57600080fd5b608d54840184608660009054906101000a900463ffffffff1663ffffffff160281151561205757fe5b049250608660009054906101000a900463ffffffff1663ffffffff168363ffffffff166085540281151561208757fe5b04915061209684838589611348565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156120d857600080fd5b6120ed816085546124b990919063ffffffff16565b608581905550612144866000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546124b990919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061219b866001546124b990919063ffffffff16565b6001819055507f210405eb88ac7589aa9de0a6e36b9c9d3cd6e4061b74363d250a77afe3c6efb78682604051808381526020018281526020019250505060405180910390a16001945050505050919050565b610e1081565b608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561224f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561228b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16608460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380608460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000806000806000806089549650608a5495504294508560885481151561237157fe5b04868681151561237d57fe5b0403935060008411151561239057600080fd5b869250600191505b838210156123d557670de0b6b3a76400006123bc888561258090919063ffffffff16565b8115156123c557fe5b0492508180600101925050612398565b7fc5afe0d1e3743306067bb00d0a7c1f30b9ac58f3775a0f12a25f3cfb35c406ce836040518080602001838152602001828103825260048152602001807f72617465000000000000000000000000000000000000000000000000000000008152506020019250505060405180910390a188905061248781612479670de0b6b3a764000061246b878e61258090919063ffffffff16565b6125bb90919063ffffffff16565b6124b990919063ffffffff16565b975050505050505050919050565b60875481565b60008082840190508381101515156124af57fe5b8091505092915050565b60008282111515156124c757fe5b818303905092915050565b600080828402905060008414806124f357508284828115156124f057fe5b04145b15156124fb57fe5b8091505092915050565b600080828401905083811015151561251957fe5b8091505092915050565b6000806000808463ffffffff168663ffffffff166125418a8a6125d6565b0281151561254b57fe5b0491506125578261273d565b905061257081607f0360ff16839060020a9004826127fd565b8193509350505094509492505050565b600080600084141561259557600091506125b4565b82840290508284828115156125a657fe5b041415156125b057fe5b8091505b5092915050565b60008082848115156125c957fe5b0490508091505092915050565b60008060008060007001ffffffffffffffffffffffffffffffff87111515156125fb57fe5b60009350856f80000000000000000000000000000000880281151561261c57fe5b049250700100000000000000000000000000000000831015156126855761265d6f800000000000000000000000000000008481151561265757fe5b04612c21565b91508160ff16839060020a900492506f800000000000000000000000000000008260ff160293505b6f8000000000000000000000000000000083111561271357607f90505b60008160ff161115612712576f800000000000000000000000000000008384028115156126cb57fe5b04925070010000000000000000000000000000000083101515612706576001839060020a900492506001810360ff1660019060020a02840193505b806001900390506126a2565b5b607a60ff166f02c5c85fdf473de6af278ece600fcbda85029060020a900494505050505092915050565b60008060008060209250607f91505b8160ff166001840160ff16101561279e57600282840160ff1681151561276e57fe5b0490508460048260ff1660808110151561278457fe5b015410151561279557809250612799565b8091505b61274c565b8460048360ff166080811015156127b157fe5b01541015156127c2578193506127f5565b8460048460ff166080811015156127d557fe5b01541015156127e6578293506127f5565b600015156127f057fe5b600093505b505050919050565b6000806000849150600090508360ff168583029060020a900491506f03442c4e6074a82f1797f72ac00000008202810190508360ff168583029060020a900491506f0116b96f757c380fb287fd0e400000008202810190508360ff168583029060020a900491506e45ae5bdd5f0e03eca1ff43900000008202810190508360ff168583029060020a900491506e0defabf91302cd95b9ffda500000008202810190508360ff168583029060020a900491506e02529ca9832b22439efff9b80000008202810190508360ff168583029060020a900491506d54f1cf12bd04e516b6da880000008202810190508360ff168583029060020a900491506d0a9e39e257a09ca2d6db510000008202810190508360ff168583029060020a900491506d012e066e7b839fa050c3090000008202810190508360ff168583029060020a900491506c1e33d7d926c329a1ad1a8000008202810190508360ff168583029060020a900491506c02bee513bdb4a6b19b5f8000008202810190508360ff168583029060020a900491506b3a9316fa79b88eccf2a000008202810190508360ff168583029060020a900491506b048177ebe1fa8123752000008202810190508360ff168583029060020a900491506a5263fe90242dcbacf000008202810190508360ff168583029060020a900491506a057e22099c030d941000008202810190508360ff168583029060020a900491506957e22099c030d94100008202810190508360ff168583029060020a9004915069052b6b545699763100008202810190508360ff168583029060020a90049150684985f67696bf7480008202810190508360ff168583029060020a900491506803dea12ea99e4980008202810190508360ff168583029060020a900491506731880f2214b6e0008202810190508360ff168583029060020a9004915067025bcff56eb360008202810190508360ff168583029060020a90049150661b722e10ab10008202810190508360ff168583029060020a900491506601317c700770008202810190508360ff168583029060020a90049150650cba84aafa008202810190508360ff168583029060020a900491506482573a0a008202810190508360ff168583029060020a900491506405035ad9008202810190508360ff168583029060020a90049150632f881b008202810190508360ff168583029060020a900491506301b293408202810190508360ff168583029060020a90049150620efc408202810190508360ff168583029060020a90049150617fe08202810190508360ff168583029060020a900491506104208202810190508360ff168583029060020a9004915060218202810190508360ff168583029060020a9004915060018202810190508360ff1660019060020a02856f0688589cc0e9505e2f2fee558000000083811515612c1457fe5b0401019250505092915050565b6000806000809150610100841015612c58575b6001841115612c53576001849060020a90049350600182019150612c34565b612ca3565b608090505b60008160ff161115612ca2578060ff1660019060020a0284101515612c8f578060ff16849060020a9004935080821791505b60018160ff169060020a90049050612c5d565b5b81925050509190505600a165627a7a7230582004d07ded80db54494d93592c429eae52606965881ac9c5b3a771375b6c4f8da30029","sourceMap":"219:1735:6:-;;;227:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1374:5:1;1348:31;;797:1:5;769:29;;1353:598:6;;;;;;;;3604:36:0;3585:11;3598:2;3585:16;;;;;;;;;;:55;;;;3669:36;3650:11;3663:2;3650:16;;;;;;;;;;:55;;;;3734:36;3715:11;3728:2;3715:16;;;;;;;;;;:55;;;;3799:36;3780:11;3793:2;3780:16;;;;;;;;;;:55;;;;3864:36;3845:11;3858:2;3845:16;;;;;;;;;;:55;;;;3929:36;3910:11;3923:2;3910:16;;;;;;;;;;:55;;;;3994:36;3975:11;3988:2;3975:16;;;;;;;;;;:55;;;;4059:36;4040:11;4053:2;4040:16;;;;;;;;;;:55;;;;4124:36;4105:11;4118:2;4105:16;;;;;;;;;;:55;;;;4189:36;4170:11;4183:2;4170:16;;;;;;;;;;:55;;;;4254:36;4235:11;4248:2;4235:16;;;;;;;;;;:55;;;;4319:36;4300:11;4313:2;4300:16;;;;;;;;;;:55;;;;4384:36;4365:11;4378:2;4365:16;;;;;;;;;;:55;;;;4449:36;4430:11;4443:2;4430:16;;;;;;;;;;:55;;;;4514:36;4495:11;4508:2;4495:16;;;;;;;;;;:55;;;;4579:36;4560:11;4573:2;4560:16;;;;;;;;;;:55;;;;4644:36;4625:11;4638:2;4625:16;;;;;;;;;;:55;;;;4709:36;4690:11;4703:2;4690:16;;;;;;;;;;:55;;;;4774:36;4755:11;4768:2;4755:16;;;;;;;;;;:55;;;;4839:36;4820:11;4833:2;4820:16;;;;;;;;;;:55;;;;4904:36;4885:11;4898:2;4885:16;;;;;;;;;;:55;;;;4969:36;4950:11;4963:2;4950:16;;;;;;;;;;:55;;;;5034:36;5015:11;5028:2;5015:16;;;;;;;;;;:55;;;;5099:36;5080:11;5093:2;5080:16;;;;;;;;;;:55;;;;5164:36;5145:11;5158:2;5145:16;;;;;;;;;;:55;;;;5229:36;5210:11;5223:2;5210:16;;;;;;;;;;:55;;;;5294:36;5275:11;5288:2;5275:16;;;;;;;;;;:55;;;;5359:36;5340:11;5353:2;5340:16;;;;;;;;;;:55;;;;5424:36;5405:11;5418:2;5405:16;;;;;;;;;;:55;;;;5489:36;5470:11;5483:2;5470:16;;;;;;;;;;:55;;;;5554:36;5535:11;5548:2;5535:16;;;;;;;;;;:55;;;;5619:36;5600:11;5613:2;5600:16;;;;;;;;;;:55;;;;5684:36;5665:11;5678:2;5665:16;;;;;;;;;;:55;;;;5749:36;5730:11;5743:2;5730:16;;;;;;;;;;:55;;;;5814:36;5795:11;5808:2;5795:16;;;;;;;;;;:55;;;;5879:36;5860:11;5873:2;5860:16;;;;;;;;;;:55;;;;5944:36;5925:11;5938:2;5925:16;;;;;;;;;;:55;;;;6009:36;5990:11;6003:2;5990:16;;;;;;;;;;:55;;;;6074:36;6055:11;6068:2;6055:16;;;;;;;;;;:55;;;;6139:36;6120:11;6133:2;6120:16;;;;;;;;;;:55;;;;6204:36;6185:11;6198:2;6185:16;;;;;;;;;;:55;;;;6269:36;6250:11;6263:2;6250:16;;;;;;;;;;:55;;;;6334:36;6315:11;6328:2;6315:16;;;;;;;;;;:55;;;;6399:36;6380:11;6393:2;6380:16;;;;;;;;;;:55;;;;6464:36;6445:11;6458:2;6445:16;;;;;;;;;;:55;;;;6529:36;6510:11;6523:2;6510:16;;;;;;;;;;:55;;;;6594:36;6575:11;6588:2;6575:16;;;;;;;;;;:55;;;;6659:36;6640:11;6653:2;6640:16;;;;;;;;;;:55;;;;6724:36;6705:11;6718:2;6705:16;;;;;;;;;;:55;;;;6789:36;6770:11;6783:2;6770:16;;;;;;;;;;:55;;;;6854:36;6835:11;6848:2;6835:16;;;;;;;;;;:55;;;;6919:36;6900:11;6913:2;6900:16;;;;;;;;;;:55;;;;6984:36;6965:11;6978:2;6965:16;;;;;;;;;;:55;;;;7049:36;7030:11;7043:2;7030:16;;;;;;;;;;:55;;;;7114:36;7095:11;7108:2;7095:16;;;;;;;;;;:55;;;;7179:36;7160:11;7173:2;7160:16;;;;;;;;;;:55;;;;7244:36;7225:11;7238:2;7225:16;;;;;;;;;;:55;;;;7309:36;7290:11;7303:2;7290:16;;;;;;;;;;:55;;;;7374:36;7355:11;7368:2;7355:16;;;;;;;;;;:55;;;;7439:36;7420:11;7433:2;7420:16;;;;;;;;;;:55;;;;7504:36;7485:11;7498:2;7485:16;;;;;;;;;;:55;;;;7569:36;7550:11;7563:2;7550:16;;;;;;;;;;:55;;;;7634:36;7615:11;7628:2;7615:16;;;;;;;;;;:55;;;;7699:36;7680:11;7693:2;7680:16;;;;;;;;;;:55;;;;7764:36;7745:11;7758:2;7745:16;;;;;;;;;;:55;;;;7829:36;7810:11;7823:2;7810:16;;;;;;;;;;:55;;;;7894:36;7875:11;7888:2;7875:16;;;;;;;;;;:55;;;;7959:36;7940:11;7953:2;7940:16;;;;;;;;;;:55;;;;8024:36;8005:11;8017:3;8005:16;;;;;;;;;;:55;;;;8089:36;8070:11;8082:3;8070:16;;;;;;;;;;:55;;;;8154:36;8135:11;8147:3;8135:16;;;;;;;;;;:55;;;;8219:36;8200:11;8212:3;8200:16;;;;;;;;;;:55;;;;8284:36;8265:11;8277:3;8265:16;;;;;;;;;;:55;;;;8349:36;8330:11;8342:3;8330:16;;;;;;;;;;:55;;;;8414:36;8395:11;8407:3;8395:16;;;;;;;;;;:55;;;;8479:36;8460:11;8472:3;8460:16;;;;;;;;;;:55;;;;8544:36;8525:11;8537:3;8525:16;;;;;;;;;;:55;;;;8609:36;8590:11;8602:3;8590:16;;;;;;;;;;:55;;;;8674:36;8655:11;8667:3;8655:16;;;;;;;;;;:55;;;;8739:36;8720:11;8732:3;8720:16;;;;;;;;;;:55;;;;8804:36;8785:11;8797:3;8785:16;;;;;;;;;;:55;;;;8869:36;8850:11;8862:3;8850:16;;;;;;;;;;:55;;;;8934:36;8915:11;8927:3;8915:16;;;;;;;;;;:55;;;;8999:36;8980:11;8992:3;8980:16;;;;;;;;;;:55;;;;9064:36;9045:11;9057:3;9045:16;;;;;;;;;;:55;;;;9129:36;9110:11;9122:3;9110:16;;;;;;;;;;:55;;;;9194:36;9175:11;9187:3;9175:16;;;;;;;;;;:55;;;;9259:36;9240:11;9252:3;9240:16;;;;;;;;;;:55;;;;9324:36;9305:11;9317:3;9305:16;;;;;;;;;;:55;;;;9389:36;9370:11;9382:3;9370:16;;;;;;;;;;:55;;;;9454:36;9435:11;9447:3;9435:16;;;;;;;;;;:55;;;;9519:36;9500:11;9512:3;9500:16;;;;;;;;;;:55;;;;9584:36;9565:11;9577:3;9565:16;;;;;;;;;;:55;;;;9649:36;9630:11;9642:3;9630:16;;;;;;;;;;:55;;;;9714:36;9695:11;9707:3;9695:16;;;;;;;;;;:55;;;;9779:36;9760:11;9772:3;9760:16;;;;;;;;;;:55;;;;509:10:13;501:5;;:18;;;;;;;;;;;;;;;;;;1398:10:6;1390:5;;:18;;;;;;;;;;;;;;;;;;1459:3;1439:17;:23;;;;575:19;1468:24;:43;;;;521:7;1517:12;:28;;;;853:6;1580:12;;:26;;;;;;;;;;;;;;;;;;734:20;1612:12;:29;;;;734:20;1647:13;:30;;;;952:18;798:14;734:20;853:6;904:28;;;:44;:67;;;;;;;;1683:11;:28;;;;952:18;798:14;734:20;853:6;904:28;;;:44;:67;;;;;;;;1717:14;:31;;;;1772:1;1754:15;:19;;;;1790:14;1779:8;:25;;;;734:20;1831:12;:29;;;;219:1735;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"219:1735:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1590:5:1;:3;:5::i;:::-;;219:1735:6;351:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;735:30:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1017:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;863:108:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;670:28:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10458:875:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;693:61:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;441:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11964:1046:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;227:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;769:29:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;491:168:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1152:120:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;758:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;403:27:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;400:37:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;551:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1393:414:5;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;532:62:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;360:39:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;816:43:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;803:513:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2978:116:1;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;702:29:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2186:814:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;481:47:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;1254:930:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1348:31:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1393:414:5;1445:4;1485:20;2838:8:1;;2823:11;:23;;2816:31;;;;;;1477:1:5;1465:9;:13;1457:22;;;;;;;;1508:75;1532:12;;1546:11;;1559:12;;;;;;;;;;;1573:9;1508:23;:75::i;:::-;1485:98;;1604:30;1621:12;1604;;:16;;:30;;;;:::i;:::-;1589:12;:45;;;;1663:38;1688:12;1663:8;:20;1672:10;1663:20;;;;;;;;;;;;;;;;:24;;:38;;;;:::i;:::-;1640:8;:20;1649:10;1640:20;;;;;;;;;;;;;;;:61;;;;1721:26;1737:9;1721:11;;:15;;:26;;;;:::i;:::-;1707:11;:40;;;;1753:32;1761:12;1775:9;1753:32;;;;;;;;;;;;;;;;;;;;;;;;1798:4;1791:11;;1393:414;;:::o;351:45:6:-;;;;;;;;;;;;;;;;;;;;:::o;1798:183:17:-;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;735:30:5:-;;;;:::o;1017:26:1:-;;;;;;;;;;;;;:::o;371:83:14:-;415:7;437:12;;430:19;;371:83;:::o;736:439:17:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;863:108:6:-;952:18;798:14;734:20;853:6;904:28;;;:44;:67;;;;;;;;863:108;:::o;670:28:5:-;;;;:::o;10458:875:0:-;10609:7;11032:14;11056:15;11081:13;11242:12;10672:1;10662:7;:11;:36;;;;;10697:1;10677:17;:21;10662:36;:60;;;;;10721:1;10702:16;:20;;;10662:60;:94;;;;;338:7;10726:30;;:16;:30;;;;10662:94;10654:103;;;;;;;;10835:1;10817:14;:19;10813:45;;;10857:1;10850:8;;;;10813:45;338:7;10918:30;;:16;:30;;;10914:107;;;11004:17;10969:32;10977:7;10986:14;10969:7;:32::i;:::-;:52;;;;;;;;10962:59;;;;10914:107;11097:42;11105:14;11121:17;11097:7;:42::i;:::-;11081:58;;11171:61;11177:5;11184:17;11203:16;338:7;11171:5;:61::i;:::-;11149:83;;;;;;;;11285:9;11257:37;;:24;11265:7;11274:6;11257:7;:24::i;:::-;:37;;;;;11242:52;;11318:7;11311:4;:14;11304:21;;10458:875;;;;;;;;;;;:::o;693:61:6:-;734:20;693:61;:::o;441:35::-;474:2;441:35;:::o;11964:1046:0:-;12108:7;12677:14;12701:15;12726:13;12856;12916;12171:1;12161:7;:11;:36;;;;;12196:1;12176:17;:21;12161:36;:60;;;;;12220:1;12201:16;:20;;;12161:60;:94;;;;;338:7;12225:30;;:16;:30;;;;12161:94;:120;;;;;12274:7;12259:11;:22;;12161:120;12153:129;;;;;;;;12354:1;12339:11;:16;12335:42;;;12376:1;12369:8;;;;12335:42;12461:7;12446:11;:22;12442:64;;;12489:17;12482:24;;;;12442:64;338:7;12566:30;;:16;:30;;;12562:104;;;12659:7;12617:39;12625:17;12644:11;12617:7;:39::i;:::-;:49;;;;;;;;12610:56;;;;12562:104;12752:11;12742:7;:21;12726:37;;12795:51;12801:7;12810:5;338:7;12829:16;12795:5;:51::i;:::-;12773:73;;;;;;;;12872:34;12880:17;12899:6;12872:7;:34::i;:::-;12856:50;;12953:9;12932:30;;:17;:30;;;;12916:46;;12997:6;12988:5;12980;:13;12979:24;;;;;;;;12972:31;;11964:1046;;;;;;;;;;;;:::o;227:29::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3602:398:17:-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;769:29:5:-;;;;:::o;491:168:3:-;556:4;568:15;586:12;;568:30;;647:7;627:17;;:27;;;;;;;;617:7;611:3;:13;;;;;;;;:43;604:50;;491:168;;:::o;1189:107:14:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;1152:120:6:-;1211:4;1229:10;:18;1248:15;1258:4;1248:9;:15::i;:::-;1265:1;1229:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1222:45;;1152:120;;;:::o;758:54::-;798:14;758:54;:::o;238:20:13:-;;;;;;;;;;;;;:::o;403:27:3:-;;;;:::o;400:37:6:-;;;;;;;;;;;;;;;;;;;;:::o;551:26:1:-;;;;:::o;608:379:14:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;532:62:6:-;575:19;532:62;:::o;360:39:3:-;;;;:::o;816:43:6:-;853:6;816:43;:::o;803:513:5:-;862:4;874:20;934:17;990:15;653:5:13;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;897:31:5;914:13;;897:12;;:16;;:31;;;;:::i;:::-;874:54;;954:30;971:12;954:16;:30::i;:::-;934:50;;1008:12;;990:30;;1146:7;1135;1129:3;:13;;;;;;;;1128:25;1108:17;:45;;;;1160:36;1186:9;1160:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1220:30;1240:9;1220:15;;:19;;:30;;;;:::i;:::-;1202:15;:48;;;;1269:25;1284:9;1269:10;;:14;;:25;;;;:::i;:::-;1256:10;:38;;;;1307:4;1300:11;;803:513;;;;;;:::o;2978:116:1:-;653:5:13;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3061:1:1;3049:9;:13;3041:22;;;;;;;;3080:9;3069:8;:20;;;;2978:116;:::o;2883:257:17:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;702:29:5:-;;;;:::o;2300:126:17:-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;2186:814:5:-;2249:4;2328:19;2465:23;2565;2643:17;2838:8:1;;2823:11;:23;;2816:31;;;;;;2282:1:5;2269:10;:14;:52;;;;;2311:10;2287:8;:20;2296:10;2287:20;;;;;;;;;;;;;;;;:34;;2269:52;2261:61;;;;;;;;2350:12;;2328:34;;2391:31;2407:14;;2391:11;:15;;:31;;;;:::i;:::-;2377:10;:45;;2369:54;;;;;;;;2542:15;;2528:11;:29;2513:11;2498:12;;;;;;;;;;;:26;;;:60;;;;;;;;2465:94;;2624:12;;;;;;;;;;;2591:45;;2605:16;2591:30;;:11;;:30;:45;;;;;;;;2565:71;;2663:79;2683:11;2696:15;2713:16;2731:10;2663:19;:79::i;:::-;2643:99;;2748:10;:19;;:30;2768:9;2748:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2798:26;2814:9;2798:11;;:15;;:26;;;;:::i;:::-;2784:11;:40;;;;2853:36;2878:10;2853:8;:20;2862:10;2853:20;;;;;;;;;;;;;;;;:24;;:36;;;;:::i;:::-;2830:8;:20;2839:10;2830:20;;;;;;;;;;;;;;;:59;;;;2910:28;2927:10;2910:12;;:16;;:28;;;;:::i;:::-;2895:12;:43;;;;2944:34;2956:10;2968:9;2944:34;;;;;;;;;;;;;;;;;;;;;;;;2991:4;2984:11;;2186:814;;;;;;;:::o;481:47:6:-;521:7;481:47;:::o;832:169:13:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;1254:930:3:-;1318:7;1399:15;1447;1483:19;1611:30;1817:12;1908:9;2046:22;1417:24;;1399:42;;1465:12;;1447:30;;1505:3;1483:25;;1688:7;1668:17;;:27;;;;;;;;1658:7;1644:11;:21;;;;;;;;:51;1611:84;;1775:1;1750:22;:26;1742:35;;;;;;;;1832:7;1817:22;;1920:1;1908:13;;1903:105;1927:22;1923:1;:26;1903:105;;;1992:8;1971:17;1980:7;1971:4;:8;;:17;;;;:::i;:::-;:30;;;;;;;;1964:37;;1951:3;;;;;;;1903:105;;;2013:26;2034:4;2013:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2071:12;2046:37;;2123:56;2164:14;2123:36;2150:8;2123:22;2140:4;2123:12;:16;;:22;;;;:::i;:::-;:26;;:36;;;;:::i;:::-;:40;;:56;;;;:::i;:::-;2116:63;;1254:930;;;;;;;;;;:::o;1348:31:1:-;;;;:::o;1008:129:12:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;836:110::-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;1566:172:7:-;1634:7;1653:9;1670:2;1665;:7;1653:19;;1695:1;1689:2;:7;:23;;;;1710:2;1704;1700:1;:6;;;;;;;;:12;1689:23;1682:31;;;;;;1730:1;1723:8;;1566:172;;;;;:::o;859:156::-;927:7;946:9;963:2;958;:7;946:19;;987:2;982:1;:7;;975:15;;;;;;1007:1;1000:8;;859:156;;;;;:::o;14278:359:0:-;14380:7;14389:5;14406:22;14475:15;14460:5;14431:34;;14452:5;14431:26;;:18;14434:6;14442;14431:2;:18::i;:::-;:26;:34;;;;;;;;14406:59;;14493:41;14519:14;14493:25;:41::i;:::-;14475:59;;14552:66;14596:9;437:3;14580:25;14561:45;;:14;:45;;;;;14608:9;14552:8;:66::i;:::-;14620:9;14544:86;;;;14278:359;;;;;;;;;:::o;203:173:12:-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;15152:924:0:-;15233:7;15292:11;15317:9;15498:11;15755:7;830:35;15259:10;:21;;15252:29;;;;;;15306:1;15292:15;;15352:12;678:35;15329:10;:20;:35;;;;;;;;15317:47;;754:35;15470:1;:12;;15466:152;;;15512:22;678:35;15522:1;:11;;;;;;;;15512:9;:22::i;:::-;15498:36;;15554:5;15548:11;;;;;;;;;;678:35;15592:5;:15;;;15586:21;;15466:152;678:35;15723:1;:11;15719:297;;;437:3;15755:23;;15750:256;15784:1;15780;:5;;;15750:256;;;678:35;15819:1;15815;:5;15814:17;;;;;;;;15810:21;;754:35;15870:1;:12;;15866:126;;;15912:1;15906:7;;;;;;;;15971:1;15967;:5;15959:14;;294:1;15959:14;;;;15952:21;;;;15866:126;15787:3;;;;;;15750:256;;;15719:297;1187:3;16033:36;;1108:33;16034:3;:18;16033:36;;;;;16026:43;;15152:924;;;;;;;;:::o;17079:504::-;17153:5;17170:8;17204;17273:9;390:2;17170:24;;437:3;17204:24;;17239:179;17255:2;17246:11;;17251:1;17246:2;:6;:11;;;17239:179;;;17297:1;17291:2;17286;:7;17285:13;;;;;;;;;;17273:25;;17336:2;17316:11;17328:3;17316:16;;;;;;;;;;;;;:22;;17312:95;;;17361:3;17356:8;;17312:95;;;17404:3;17399:8;;17312:95;17239:179;;;17451:2;17432:11;17444:2;17432:15;;;;;;;;;;;;;:21;;17428:48;;;17474:2;17467:9;;;;17428:48;17509:2;17490:11;17502:2;17490:15;;;;;;;;;;;;;:21;;17486:48;;;17532:2;17525:9;;;;17486:48;17552:5;17545:13;;;;;;17575:1;17568:8;;17079:504;;;;;;;:::o;18139:4100::-;18214:7;18233:10;18258:11;18246:2;18233:15;;18272:1;18258:15;;18302:10;18289:23;;18295:2;18290;:7;18289:23;;;;;18284:28;;18334:34;18329:2;:39;18322:46;;;;18420:10;18407:23;;18413:2;18408;:7;18407:23;;;;;18402:28;;18452:34;18447:2;:39;18440:46;;;;18538:10;18525:23;;18531:2;18526;:7;18525:23;;;;;18520:28;;18570:34;18565:2;:39;18558:46;;;;18656:10;18643:23;;18649:2;18644;:7;18643:23;;;;;18638:28;;18688:34;18683:2;:39;18676:46;;;;18774:10;18761:23;;18767:2;18762;:7;18761:23;;;;;18756:28;;18806:34;18801:2;:39;18794:46;;;;18892:10;18879:23;;18885:2;18880;:7;18879:23;;;;;18874:28;;18924:34;18919:2;:39;18912:46;;;;19010:10;18997:23;;19003:2;18998;:7;18997:23;;;;;18992:28;;19042:34;19037:2;:39;19030:46;;;;19128:10;19115:23;;19121:2;19116;:7;19115:23;;;;;19110:28;;19160:34;19155:2;:39;19148:46;;;;19246:10;19233:23;;19239:2;19234;:7;19233:23;;;;;19228:28;;19278:34;19273:2;:39;19266:46;;;;19366:10;19353:23;;19359:2;19354;:7;19353:23;;;;;19348:28;;19398:34;19393:2;:39;19386:46;;;;19486:10;19473:23;;19479:2;19474;:7;19473:23;;;;;19468:28;;19518:34;19513:2;:39;19506:46;;;;19606:10;19593:23;;19599:2;19594;:7;19593:23;;;;;19588:28;;19638:34;19633:2;:39;19626:46;;;;19726:10;19713:23;;19719:2;19714;:7;19713:23;;;;;19708:28;;19758:34;19753:2;:39;19746:46;;;;19846:10;19833:23;;19839:2;19834;:7;19833:23;;;;;19828:28;;19878:34;19873:2;:39;19866:46;;;;19966:10;19953:23;;19959:2;19954;:7;19953:23;;;;;19948:28;;19998:34;19993:2;:39;19986:46;;;;20086:10;20073:23;;20079:2;20074;:7;20073:23;;;;;20068:28;;20118:34;20113:2;:39;20106:46;;;;20206:10;20193:23;;20199:2;20194;:7;20193:23;;;;;20188:28;;20238:34;20233:2;:39;20226:46;;;;20326:10;20313:23;;20319:2;20314;:7;20313:23;;;;;20308:28;;20358:34;20353:2;:39;20346:46;;;;20446:10;20433:23;;20439:2;20434;:7;20433:23;;;;;20428:28;;20478:34;20473:2;:39;20466:46;;;;20566:10;20553:23;;20559:2;20554;:7;20553:23;;;;;20548:28;;20598:34;20593:2;:39;20586:46;;;;20686:10;20673:23;;20679:2;20674;:7;20673:23;;;;;20668:28;;20718:34;20713:2;:39;20706:46;;;;20806:10;20793:23;;20799:2;20794;:7;20793:23;;;;;20788:28;;20838:34;20833:2;:39;20826:46;;;;20926:10;20913:23;;20919:2;20914;:7;20913:23;;;;;20908:28;;20958:34;20953:2;:39;20946:46;;;;21046:10;21033:23;;21039:2;21034;:7;21033:23;;;;;21028:28;;21078:34;21073:2;:39;21066:46;;;;21166:10;21153:23;;21159:2;21154;:7;21153:23;;;;;21148:28;;21198:34;21193:2;:39;21186:46;;;;21286:10;21273:23;;21279:2;21274;:7;21273:23;;;;;21268:28;;21318:34;21313:2;:39;21306:46;;;;21406:10;21393:23;;21399:2;21394;:7;21393:23;;;;;21388:28;;21438:34;21433:2;:39;21426:46;;;;21526:10;21513:23;;21519:2;21514;:7;21513:23;;;;;21508:28;;21558:34;21553:2;:39;21546:46;;;;21646:10;21633:23;;21639:2;21634;:7;21633:23;;;;;21628:28;;21678:34;21673:2;:39;21666:46;;;;21766:10;21753:23;;21759:2;21754;:7;21753:23;;;;;21748:28;;21798:34;21793:2;:39;21786:46;;;;21886:10;21873:23;;21879:2;21874;:7;21873:23;;;;;21868:28;;21918:34;21913:2;:39;21906:46;;;;22006:10;21993:23;;21999:2;21994;:7;21993:23;;;;;21988:28;;22038:34;22033:2;:39;22026:46;;;;22171:10;22164:17;;294:1;22164:17;;;;22158:2;22122:33;22116:3;:39;;;;;;;;:44;:66;22109:73;;18139:4100;;;;;;:::o;16193:525::-;16251:5;16268:9;16517:7;16280:1;16268:13;;16301:3;16296:2;:8;16292:399;;;16356:82;16368:1;16363:2;:6;16356:82;;;16396:1;16389:8;;;;;;;;16422:1;16415:8;;;;16356:82;;;16292:399;;;16527:3;16517:13;;16512:169;16536:1;16532;:5;;;16512:169;;;16584:1;16577:8;;294:1;16577:8;;;;16570:2;:16;;16566:101;;;16617:1;16610:8;;;;;;;;;;16647:1;16640:8;;;;16566:101;16545:1;16539:7;;;;;;;;;;16512:169;;;16292:399;16708:3;16701:10;;16193:525;;;;;:::o","source":"pragma solidity ^0.4.18;\n\nimport \"./ConvertLib.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./RelevantBondingCurve.sol\";\n\ncontract RelevantCoin is RelevantBondingCurve {\n  using ConvertLib for uint;\n\n  // uint public constant MAX_UINT = (2**256) - 1;\n\n  string public constant name = \"RelevantToken\";\n  string public constant symbol = \"REL\";\n  uint8 public constant decimals = 18;\n\n  uint256 public constant TIME_INTERVAL = 1 hours;\n  uint256 public constant HOURLY_INFLATION = 1000010880216701200; // 10% annual\n  // uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));\n  uint256 public constant INITIAL_SUPPLY = 1000000 * (10 ** 18);\n  uint256 public constant INITIAL_PRICE = 2 * (10 ** 16);\n  uint32 public constant CURVE_RATIO = 150000;\n  uint256 public constant INITAL_BALANCE = CURVE_RATIO * INITIAL_SUPPLY * INITIAL_PRICE / (1000000 * 10 ** 18);\n\n  event Log(string logString, uint value);\n\n  /**\n   * @dev Not needed right now\n   * @param addr that for which to check the balance\n   * @return {uint} banace in Ether\n   */\n  function getBalanceInEth(address addr) public view returns(uint){\n    return ConvertLib.convert(balanceOf(addr), 2);\n  }\n\n\t/**\n\t * @dev Constructor that gives msg.sender all of existing tokens.\n\t */\n  function RelevantCoin() public {\n    owner = msg.sender;\n\n    // inflation params\n    lastInflationCalc = now;\n    inflationRatePerInterval = HOURLY_INFLATION;\n    timeInterval = TIME_INTERVAL;\n\n    // bonding curve params\n    reserveRatio = CURVE_RATIO;\n    totalSupply_ = INITIAL_SUPPLY;\n    virtualSupply = INITIAL_SUPPLY;\n    poolBalance = INITAL_BALANCE;\n    virtualBalance = INITAL_BALANCE;\n    inflationSupply = 0;\n    gasPrice = 26 * (10 ** 9);\n\n    // token params\n    totalSupply_ = INITIAL_SUPPLY;\n    // balances[owner] = INITIAL_SUPPLY;\n    // Transfer(0x0, owner, INITIAL_SUPPLY);\n  }\n\n}\n","sourcePath":"/Users/billy/react/bonding-token-ui/src/relevant-contracts/contracts/RelevantCoin.sol","ast":{"attributes":{"absolutePath":"/Users/billy/react/bonding-token-ui/src/relevant-contracts/contracts/RelevantCoin.sol","exportedSymbols":{"RelevantCoin":[2449]}},"children":[{"attributes":{"literals":["solidity","^","0.4",".18"]},"id":2311,"name":"PragmaDirective","src":"0:24:6"},{"attributes":{"SourceUnit":1822,"absolutePath":"/Users/billy/react/bonding-token-ui/src/relevant-contracts/contracts/ConvertLib.sol","file":"./ConvertLib.sol","scope":2450,"symbolAliases":[null],"unitAlias":""},"id":2312,"name":"ImportDirective","src":"26:26:6"},{"attributes":{"SourceUnit":3317,"absolutePath":"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol","file":"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol","scope":2450,"symbolAliases":[null],"unitAlias":""},"id":2313,"name":"ImportDirective","src":"53:67:6"},{"attributes":{"SourceUnit":2900,"absolutePath":"zeppelin-solidity/contracts/ownership/Ownable.sol","file":"zeppelin-solidity/contracts/ownership/Ownable.sol","scope":2450,"symbolAliases":[null],"unitAlias":""},"id":2314,"name":"ImportDirective","src":"121:59:6"},{"attributes":{"SourceUnit":2310,"absolutePath":"/Users/billy/react/bonding-token-ui/src/relevant-contracts/contracts/RelevantBondingCurve.sol","file":"./RelevantBondingCurve.sol","scope":2450,"symbolAliases":[null],"unitAlias":""},"id":2315,"name":"ImportDirective","src":"181:36:6"},{"attributes":{"contractDependencies":[1596,1804,2005,2309,2568,2597,2899,2995,3038,3070,3316],"contractKind":"contract","documentation":null,"fullyImplemented":true,"linearizedBaseContracts":[2449,2309,2005,1804,2899,1596,2568,2597,3316,2995,3038,3070],"name":"RelevantCoin","scope":2450},"children":[{"attributes":{"arguments":[null]},"children":[{"attributes":{"contractScope":null,"name":"RelevantBondingCurve","referencedDeclaration":2309,"type":"contract RelevantBondingCurve"},"id":2316,"name":"UserDefinedTypeName","src":"244:20:6"}],"id":2317,"name":"InheritanceSpecifier","src":"244:20:6"},{"children":[{"attributes":{"contractScope":null,"name":"ConvertLib","referencedDeclaration":1821,"type":"library ConvertLib"},"id":2318,"name":"UserDefinedTypeName","src":"275:10:6"},{"attributes":{"name":"uint","type":"uint256"},"id":2319,"name":"ElementaryTypeName","src":"290:4:6"}],"id":2320,"name":"UsingForDirective","src":"269:26:6"},{"attributes":{"constant":true,"name":"name","scope":2449,"stateVariable":true,"storageLocation":"default","type":"string memory","visibility":"public"},"children":[{"attributes":{"name":"string","type":"string storage pointer"},"id":2321,"name":"ElementaryTypeName","src":"351:6:6"},{"attributes":{"argumentTypes":null,"hexvalue":"52656c6576616e74546f6b656e","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"string","type":"literal_string \"RelevantToken\"","value":"RelevantToken"},"id":2322,"name":"Literal","src":"381:15:6"}],"id":2323,"name":"VariableDeclaration","src":"351:45:6"},{"attributes":{"constant":true,"name":"symbol","scope":2449,"stateVariable":true,"storageLocation":"default","type":"string memory","visibility":"public"},"children":[{"attributes":{"name":"string","type":"string storage pointer"},"id":2324,"name":"ElementaryTypeName","src":"400:6:6"},{"attributes":{"argumentTypes":null,"hexvalue":"52454c","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"string","type":"literal_string \"REL\"","value":"REL"},"id":2325,"name":"Literal","src":"432:5:6"}],"id":2326,"name":"VariableDeclaration","src":"400:37:6"},{"attributes":{"constant":true,"name":"decimals","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint8","visibility":"public"},"children":[{"attributes":{"name":"uint8","type":"uint8"},"id":2327,"name":"ElementaryTypeName","src":"441:5:6"},{"attributes":{"argumentTypes":null,"hexvalue":"3138","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 18","value":"18"},"id":2328,"name":"Literal","src":"474:2:6"}],"id":2329,"name":"VariableDeclaration","src":"441:35:6"},{"attributes":{"constant":true,"name":"TIME_INTERVAL","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint256","visibility":"public"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":2330,"name":"ElementaryTypeName","src":"481:7:6"},{"attributes":{"argumentTypes":null,"hexvalue":"31","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":"hours","token":"number","type":"int_const 3600","value":"1"},"id":2331,"name":"Literal","src":"521:7:6"}],"id":2332,"name":"VariableDeclaration","src":"481:47:6"},{"attributes":{"constant":true,"name":"HOURLY_INFLATION","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint256","visibility":"public"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":2333,"name":"ElementaryTypeName","src":"532:7:6"},{"attributes":{"argumentTypes":null,"hexvalue":"31303030303130383830323136373031323030","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 1000010880216701200","value":"1000010880216701200"},"id":2334,"name":"Literal","src":"575:19:6"}],"id":2335,"name":"VariableDeclaration","src":"532:62:6"},{"attributes":{"constant":true,"name":"INITIAL_SUPPLY","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint256","visibility":"public"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":2336,"name":"ElementaryTypeName","src":"693:7:6"},{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_1000000000000000000000000_by_1","typeString":"int_const 1000000000000000000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"*","type":"int_const 1000000000000000000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"31303030303030","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 1000000","value":"1000000"},"id":2337,"name":"Literal","src":"734:7:6"},{"attributes":{"argumentTypes":null,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":true,"lValueRequested":false,"type":"int_const 1000000000000000000"},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_1000000000000000000_by_1","typeString":"int_const 1000000000000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"**","type":"int_const 1000000000000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"3130","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 10","value":"10"},"id":2338,"name":"Literal","src":"745:2:6"},{"attributes":{"argumentTypes":null,"hexvalue":"3138","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 18","value":"18"},"id":2339,"name":"Literal","src":"751:2:6"}],"id":2340,"name":"BinaryOperation","src":"745:8:6"}],"id":2341,"name":"TupleExpression","src":"744:10:6"}],"id":2342,"name":"BinaryOperation","src":"734:20:6"}],"id":2343,"name":"VariableDeclaration","src":"693:61:6"},{"attributes":{"constant":true,"name":"INITIAL_PRICE","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint256","visibility":"public"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":2344,"name":"ElementaryTypeName","src":"758:7:6"},{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_20000000000000000_by_1","typeString":"int_const 20000000000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"*","type":"int_const 20000000000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"32","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 2","value":"2"},"id":2345,"name":"Literal","src":"798:1:6"},{"attributes":{"argumentTypes":null,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":true,"lValueRequested":false,"type":"int_const 10000000000000000"},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_10000000000000000_by_1","typeString":"int_const 10000000000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"**","type":"int_const 10000000000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"3130","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 10","value":"10"},"id":2346,"name":"Literal","src":"803:2:6"},{"attributes":{"argumentTypes":null,"hexvalue":"3136","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 16","value":"16"},"id":2347,"name":"Literal","src":"809:2:6"}],"id":2348,"name":"BinaryOperation","src":"803:8:6"}],"id":2349,"name":"TupleExpression","src":"802:10:6"}],"id":2350,"name":"BinaryOperation","src":"798:14:6"}],"id":2351,"name":"VariableDeclaration","src":"758:54:6"},{"attributes":{"constant":true,"name":"CURVE_RATIO","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint32","visibility":"public"},"children":[{"attributes":{"name":"uint32","type":"uint32"},"id":2352,"name":"ElementaryTypeName","src":"816:6:6"},{"attributes":{"argumentTypes":null,"hexvalue":"313530303030","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 150000","value":"150000"},"id":2353,"name":"Literal","src":"853:6:6"}],"id":2354,"name":"VariableDeclaration","src":"816:43:6"},{"attributes":{"constant":true,"name":"INITAL_BALANCE","scope":2449,"stateVariable":true,"storageLocation":"default","type":"uint256","visibility":"public"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":2355,"name":"ElementaryTypeName","src":"863:7:6"},{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"/","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"*","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"*","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2354,"type":"uint32","value":"CURVE_RATIO"},"id":2356,"name":"Identifier","src":"904:11:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2343,"type":"uint256","value":"INITIAL_SUPPLY"},"id":2357,"name":"Identifier","src":"918:14:6"}],"id":2358,"name":"BinaryOperation","src":"904:28:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2351,"type":"uint256","value":"INITIAL_PRICE"},"id":2359,"name":"Identifier","src":"935:13:6"}],"id":2360,"name":"BinaryOperation","src":"904:44:6"},{"attributes":{"argumentTypes":null,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":true,"lValueRequested":false,"type":"int_const 1000000000000000000000000"},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_1000000000000000000000000_by_1","typeString":"int_const 1000000000000000000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"*","type":"int_const 1000000000000000000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"31303030303030","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 1000000","value":"1000000"},"id":2361,"name":"Literal","src":"952:7:6"},{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_1000000000000000000_by_1","typeString":"int_const 1000000000000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"**","type":"int_const 1000000000000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"3130","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 10","value":"10"},"id":2362,"name":"Literal","src":"962:2:6"},{"attributes":{"argumentTypes":null,"hexvalue":"3138","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 18","value":"18"},"id":2363,"name":"Literal","src":"968:2:6"}],"id":2364,"name":"BinaryOperation","src":"962:8:6"}],"id":2365,"name":"BinaryOperation","src":"952:18:6"}],"id":2366,"name":"TupleExpression","src":"951:20:6"}],"id":2367,"name":"BinaryOperation","src":"904:67:6"}],"id":2368,"name":"VariableDeclaration","src":"863:108:6"},{"attributes":{"anonymous":false,"name":"Log"},"children":[{"children":[{"attributes":{"constant":false,"indexed":false,"name":"logString","scope":2374,"stateVariable":false,"storageLocation":"default","type":"string memory","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"string","type":"string storage pointer"},"id":2369,"name":"ElementaryTypeName","src":"986:6:6"}],"id":2370,"name":"VariableDeclaration","src":"986:16:6"},{"attributes":{"constant":false,"indexed":false,"name":"value","scope":2374,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":2371,"name":"ElementaryTypeName","src":"1004:4:6"}],"id":2372,"name":"VariableDeclaration","src":"1004:10:6"}],"id":2373,"name":"ParameterList","src":"985:30:6"}],"id":2374,"name":"EventDefinition","src":"976:40:6"},{"attributes":{"constant":true,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"getBalanceInEth","payable":false,"scope":2449,"stateMutability":"view","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"addr","scope":2390,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":2375,"name":"ElementaryTypeName","src":"1177:7:6"}],"id":2376,"name":"VariableDeclaration","src":"1177:12:6"}],"id":2377,"name":"ParameterList","src":"1176:14:6"},{"children":[{"attributes":{"constant":false,"name":"","scope":2390,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":2378,"name":"ElementaryTypeName","src":"1211:4:6"}],"id":2379,"name":"VariableDeclaration","src":"1211:4:6"}],"id":2380,"name":"ParameterList","src":"1210:6:6"},{"children":[{"attributes":{"functionReturnParameters":2380},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"uint256","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"convert","referencedDeclaration":1820,"type":"function (uint256,uint256) pure returns (uint256)"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1821,"type":"type(library ConvertLib)","value":"ConvertLib"},"id":2381,"name":"Identifier","src":"1229:10:6"}],"id":2382,"name":"MemberAccess","src":"1229:18:6"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"uint256","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"overloadedDeclarations":[2994],"referencedDeclaration":2994,"type":"function (address) view returns (uint256)","value":"balanceOf"},"id":2383,"name":"Identifier","src":"1248:9:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2376,"type":"address","value":"addr"},"id":2384,"name":"Identifier","src":"1258:4:6"}],"id":2385,"name":"FunctionCall","src":"1248:15:6"},{"attributes":{"argumentTypes":null,"hexvalue":"32","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 2","value":"2"},"id":2386,"name":"Literal","src":"1265:1:6"}],"id":2387,"name":"FunctionCall","src":"1229:38:6"}],"id":2388,"name":"Return","src":"1222:45:6"}],"id":2389,"name":"Block","src":"1216:56:6"}],"id":2390,"name":"FunctionDefinition","src":"1152:120:6"},{"attributes":{"constant":false,"implemented":true,"isConstructor":true,"modifiers":[null],"name":"RelevantCoin","payable":false,"scope":2449,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"attributes":{"parameters":[null]},"children":[],"id":2391,"name":"ParameterList","src":"1374:2:6"},{"attributes":{"parameters":[null]},"children":[],"id":2392,"name":"ParameterList","src":"1384:0:6"},{"children":[{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2847,"type":"address","value":"owner"},"id":2393,"name":"Identifier","src":"1390:5:6"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":3328,"type":"msg","value":"msg"},"id":2394,"name":"Identifier","src":"1398:3:6"}],"id":2395,"name":"MemberAccess","src":"1398:10:6"}],"id":2396,"name":"Assignment","src":"1390:18:6"}],"id":2397,"name":"ExpressionStatement","src":"1390:18:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1831,"type":"uint256","value":"lastInflationCalc"},"id":2398,"name":"Identifier","src":"1439:17:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":3330,"type":"uint256","value":"now"},"id":2399,"name":"Identifier","src":"1459:3:6"}],"id":2400,"name":"Assignment","src":"1439:23:6"}],"id":2401,"name":"ExpressionStatement","src":"1439:23:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1833,"type":"uint256","value":"inflationRatePerInterval"},"id":2402,"name":"Identifier","src":"1468:24:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2335,"type":"uint256","value":"HOURLY_INFLATION"},"id":2403,"name":"Identifier","src":"1495:16:6"}],"id":2404,"name":"Assignment","src":"1468:43:6"}],"id":2405,"name":"ExpressionStatement","src":"1468:43:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1835,"type":"uint256","value":"timeInterval"},"id":2406,"name":"Identifier","src":"1517:12:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2332,"type":"uint256","value":"TIME_INTERVAL"},"id":2407,"name":"Identifier","src":"1532:13:6"}],"id":2408,"name":"Assignment","src":"1517:28:6"}],"id":2409,"name":"ExpressionStatement","src":"1517:28:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint32"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1611,"type":"uint32","value":"reserveRatio"},"id":2410,"name":"Identifier","src":"1580:12:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2354,"type":"uint32","value":"CURVE_RATIO"},"id":2411,"name":"Identifier","src":"1595:11:6"}],"id":2412,"name":"Assignment","src":"1580:26:6"}],"id":2413,"name":"ExpressionStatement","src":"1580:26:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2914,"type":"uint256","value":"totalSupply_"},"id":2414,"name":"Identifier","src":"1612:12:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2343,"type":"uint256","value":"INITIAL_SUPPLY"},"id":2415,"name":"Identifier","src":"1627:14:6"}],"id":2416,"name":"Assignment","src":"1612:29:6"}],"id":2417,"name":"ExpressionStatement","src":"1612:29:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2075,"type":"uint256","value":"virtualSupply"},"id":2418,"name":"Identifier","src":"1647:13:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2343,"type":"uint256","value":"INITIAL_SUPPLY"},"id":2419,"name":"Identifier","src":"1663:14:6"}],"id":2420,"name":"Assignment","src":"1647:30:6"}],"id":2421,"name":"ExpressionStatement","src":"1647:30:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1609,"type":"uint256","value":"poolBalance"},"id":2422,"name":"Identifier","src":"1683:11:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2368,"type":"uint256","value":"INITAL_BALANCE"},"id":2423,"name":"Identifier","src":"1697:14:6"}],"id":2424,"name":"Assignment","src":"1683:28:6"}],"id":2425,"name":"ExpressionStatement","src":"1683:28:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2077,"type":"uint256","value":"virtualBalance"},"id":2426,"name":"Identifier","src":"1717:14:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2368,"type":"uint256","value":"INITAL_BALANCE"},"id":2427,"name":"Identifier","src":"1734:14:6"}],"id":2428,"name":"Assignment","src":"1717:31:6"}],"id":2429,"name":"ExpressionStatement","src":"1717:31:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2079,"type":"uint256","value":"inflationSupply"},"id":2430,"name":"Identifier","src":"1754:15:6"},{"attributes":{"argumentTypes":null,"hexvalue":"30","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 0","value":"0"},"id":2431,"name":"Literal","src":"1772:1:6"}],"id":2432,"name":"Assignment","src":"1754:19:6"}],"id":2433,"name":"ExpressionStatement","src":"1754:19:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":1614,"type":"uint256","value":"gasPrice"},"id":2434,"name":"Identifier","src":"1779:8:6"},{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_26000000000_by_1","typeString":"int_const 26000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"*","type":"int_const 26000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"3236","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 26","value":"26"},"id":2435,"name":"Literal","src":"1790:2:6"},{"attributes":{"argumentTypes":null,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":true,"lValueRequested":false,"type":"int_const 1000000000"},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_rational_1000000000_by_1","typeString":"int_const 1000000000"},"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"operator":"**","type":"int_const 1000000000"},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"3130","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 10","value":"10"},"id":2436,"name":"Literal","src":"1796:2:6"},{"attributes":{"argumentTypes":null,"hexvalue":"39","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 9","value":"9"},"id":2437,"name":"Literal","src":"1802:1:6"}],"id":2438,"name":"BinaryOperation","src":"1796:7:6"}],"id":2439,"name":"TupleExpression","src":"1795:9:6"}],"id":2440,"name":"BinaryOperation","src":"1790:14:6"}],"id":2441,"name":"Assignment","src":"1779:25:6"}],"id":2442,"name":"ExpressionStatement","src":"1779:25:6"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2914,"type":"uint256","value":"totalSupply_"},"id":2443,"name":"Identifier","src":"1831:12:6"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":2343,"type":"uint256","value":"INITIAL_SUPPLY"},"id":2444,"name":"Identifier","src":"1846:14:6"}],"id":2445,"name":"Assignment","src":"1831:29:6"}],"id":2446,"name":"ExpressionStatement","src":"1831:29:6"}],"id":2447,"name":"Block","src":"1384:567:6"}],"id":2448,"name":"FunctionDefinition","src":"1353:598:6"}],"id":2449,"name":"ContractDefinition","src":"219:1735:6"}],"id":2450,"name":"SourceUnit","src":"0:1955:6"},"compiler":{"name":"solc","version":"0.4.19+commit.c4cbbb05.Emscripten.clang"},"networks":{"4":{"events":{},"links":{"ConvertLib":"0x92e3269ff8888f6a563ecb3e6e8f946f4d832409"},"address":"0x5df73d8fd2d8e6c6de24b731bdc295b2d915d0e9"},"99":{"events":{},"links":{"ConvertLib":"0xbd5a977bf56f1f88e1b585976655a78f582573f9"},"address":"0x1daa59378d955a19cb30701b07eac7b2f048e736"},"5777":{"events":{},"links":{"ConvertLib":"0x345ca3e014aaf5dca488057592ee47305d9b3e10"},"address":"0xf25186b5081ff5ce73482ad761db0eb0d25abfbf"}},"schemaVersion":"1.0.1","updatedAt":"2018-02-18T05:58:02.827Z"}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })
/******/ ]);