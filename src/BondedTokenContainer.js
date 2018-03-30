import React from 'react';
import PropTypes from 'prop-types';
import * as contractHelper from './relevantCoinHelper';

const ethPrice = require('eth-price');
const utils = require('web3-utils');

class BondedTokenContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.calculateSaleReturn = this.calculateSaleReturn.bind(this);
    this.calculatePurchaseReturn = this.calculatePurchaseReturn.bind(this);
    this.calculateBuyPrice = this.calculateBuyPrice.bind(this);
    this.getChildContext = this.getChildContext.bind(this);
    this.initState = this.initState.bind(this);
    this.getContractParams = this.getContractParams.bind(this);

    this.state = {
      address: '',
      loading: false,
      account: null,

      walletBalance: 0,
      tokenBalance: 0,
      poolBalance: 4000000,
      totalSupply: 1000000,
      reserveRatio: 0.2,
      decimals: 18,
    };
    this.transaction = {};
    this.ETHUSD = 0;
  }

  // you must specify what you’re adding to the context
  static childContextTypes = {
    contractParams: PropTypes.object,
    accountInfo: PropTypes.object,
    contractActions: PropTypes.object,
    bondingCurveState: PropTypes.object
  }

  getChildContext() {
    return {
      ...this.contractParams
    };
  }

  getContractParams() {
    let state = this.props.drizzleStatus.initialized ?
      contractHelper.getAll(this.props.RelevantCoin) :
      this.state;
    let {
      poolBalance,
      totalSupply,
      reserveRatio,
      decimals,
      symbol,
    } = state;

    let walletBalance = contractHelper
      .getAccountBalance(this.props.accountBalances, this.account) ||
      this.state.walletBalance;

    let tokenBalance = this.account ?
      contractHelper.getValue(this.props.RelevantCoin, 'balanceOf', this.account) :
      0;

    let priceEth = this.calculatePrice(totalSupply, poolBalance, reserveRatio);

    let priceDollar = (priceEth * this.ETHUSD).toFixed(2);
    priceEth = priceEth.toFixed(2);

    let contractParams = {
      tokenBalance,
      poolBalance,
      totalSupply,
      reserveRatio,
      decimals,
      symbol,
      RelevantCoin: this.props.RelevantCoin,
      address: this.state.address,
      priceEth,
      priceDollar
    };

    let accountInfo = {
      account: this.props.accounts[0],
      walletBalance
    };

    let contractActions = {
      calculatePurchaseReturn: this.calculatePurchaseReturn,
      calculateSaleReturn: this.calculateSaleReturn,
      calculateBuyPrice: this.calculateBuyPrice,
      onChange: this.onChange,
    };

    let bondingCurveState = {
      loading: this.transaction.status === 'pending',
      transaction: this.transaction,
      web3State: this.props.drizzle.web3,
      drizzleStatus: this.props.drizzleStatus
    };

    this.contractParams = {
      contractParams,
      contractActions,
      accountInfo,
      bondingCurveState
    };
  }

  componentWillMount() {
    this.getContractParams();
  }

  componentDidMount() {
    ethPrice('usd')
      .then(ETHUSD => {
        ETHUSD = ETHUSD[0].replace('USD: ','');
        this.ETHUSD = parseFloat(ETHUSD);
        this.forceUpdate();
      })
      .catch(err => console.log(err));

    if (this.props.drizzleStatus.initialized) {
      this.initState(this.props);
    }
  }

  componentWillUpdate(nextProps) {
    let account = nextProps.accounts[0] || null;
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

    this.getContractParams();
  }

  initState(props) {
    let account = props.accounts[0] || null;
    if (account !== this.account) this.account = account;

    if (this.state.address !== props.RelevantCoin.address) {
      this.setState({ address: props.RelevantCoin.address });
    }

    let l = props.drizzle.transactionStack.length;
    if (l) {
      let recentTransaction = props.drizzle.transactionStack[l - 1];
      let latestStatus = props.drizzle.transactions[recentTransaction].status;
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

  onChange(event, type) {
    let value = event.target ? event.target.value : null;
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
    let state = {};
    state[type] = event.target ? value : event;
    this.setState(state);
  }

  calculatePrice(totalSupply, poolBalance, reserveRatio) {
    return poolBalance / (totalSupply * reserveRatio);
  }

  /* calculateSaleReturn
    Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
  */
  calculateSaleReturn(props) {
    let state = this.contractParams.contractParams || this.state;

    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';

    if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
    if (amount === totalSupply) return poolBalance;
    if (reserveRatio === 1) return poolBalance;

    // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
    let result = poolBalance * (1 - (1 - (amount / totalSupply)) ** (1 / reserveRatio));
    return Math.round(result * 10000) / 10000;
  }

  calculateBuyPrice(props) {
    let state = this.contractParams.contractParams || this.state;
    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
    if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
    let foo = poolBalance * ((1 + (amount / totalSupply)) ** (1 / reserveRatio) - 1);
    return Math.round(foo * 10000) / 10000;
  }

  // calculatePurchaseReturn
  // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
  calculatePurchaseReturn(props) {
    let state = this.contractParams.contractParams || this.state;
    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
    // special case if the weight = 100%
    if (reserveRatio === 1) {
      return totalSupply * (amount / poolBalance);
    }

    // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
    let foo = totalSupply * ((1 + amount / poolBalance) ** reserveRatio - 1);
    return Math.round(foo * 10000) / 10000;
  }

  render() {
    let color = this.props.themeColor || 'grey';
    return (
      <div
        className={'--bondedToken'}
        style={{ borderColor: color }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default BondedTokenContainer;

