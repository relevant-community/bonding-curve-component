import React from 'react';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';
import './css/BondedToken.css';
import * as contractHelper from './relevantCoinHelper';
import { connect } from 'react-redux';

const Web3 = require('web3');
const utils = require('web3-utils');

class BondedToken extends React.Component {
  constructor(props, context) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.calculateSaleReturn = this.calculateSaleReturn.bind(this);
    this.calculatePurchaseReturn = this.calculatePurchaseReturn.bind(this);
    this.calculateBuyPrice = this.calculateBuyPrice.bind(this);
    this.getChildContext = this.getChildContext.bind(this);

    this.bigMax = 1000000;
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
  }

  // you must specify what you’re adding to the context
  static childContextTypes = {
    walletBalance: PropTypes.number,
    address: PropTypes.string,
    account: PropTypes.string,
    contractParams: PropTypes.object,
    calculatePurchaseReturn: PropTypes.func,
    calculateBuyPrice: PropTypes.func,
    calculateSaleReturn: PropTypes.func,
    bigMax: PropTypes.number,
    loading: PropTypes.bool,
    onChange: PropTypes.func,
    RelevantCoin: PropTypes.object,
    transaction: PropTypes.object,
  }

  getChildContext() {
    let { tokenBalance, poolBalance, totalSupply, reserveRatio, decimals } = {};
    if (this.state.address) {
      ({ tokenBalance, poolBalance, totalSupply, reserveRatio, decimals } =
        contractHelper.getAll(this.props.RelevantCoin) || this.state);
    } else {
      ({ tokenBalance, poolBalance, totalSupply, reserveRatio, decimals } = this.state);
    }
    let walletBalance = contractHelper.getAccountBalance(this.props.drizzle, this.state.account) || this.state.walletBalance;

    let contractParams = { tokenBalance, poolBalance, totalSupply, reserveRatio, decimals };

    return {
      walletBalance,
      contractParams,
      calculatePurchaseReturn: this.calculatePurchaseReturn,
      calculateSaleReturn: this.calculateSaleReturn,
      calculateBuyPrice: this.calculateBuyPrice,
      bigMax: this.bigMax,
      loading: this.transaction.status === "pending",
      address: this.state.address,
      account: this.state.account,
      onChange: this.onChange,
      RelevantCoin: this.props.RelevantCoin,
      transaction: this.transaction,
    };
  }

  componentWillUpdate(nextProps) {
    if (!this.props.drizzleStatus.initialized && nextProps.drizzleStatus.initialized) {
      let options = {
        args: { tokenBalance: nextProps.drizzle.accounts.ids[0] }
      };
      // console.log(nextProps.drizzle.contracts);
      this.setState({
        account: nextProps.drizzle.accounts.ids[0],
        address: nextProps.RelevantCoin.address
      });
      contractHelper.initParams(nextProps.RelevantCoin, options);
    }

    // in case we are switching accounts via metamask
    if (this.props.drizzle.accounts !== nextProps.drizzle.accounts && nextProps.drizzleStatus.initialized) {
      this.setState({
        account: nextProps.drizzle.accounts.ids[0],
      });
      let options = {
        args: { tokenBalance: nextProps.drizzle.accounts.ids[0] }
      };
      contractHelper.initParams(nextProps.RelevantCoin, options);
    }

    let l = nextProps.drizzle.transactionStack.length;
    if (l) {
      let recentTransaction = nextProps.drizzle.transactionStack[l-1];
      let latestStatus = nextProps.drizzle.transactions[recentTransaction].status;
      if (latestStatus === 'success') {
        this.transaction = {};
      } else {
        this.transaction = {
          status: latestStatus,
          tx: recentTransaction
        }
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
    if (this.transaction.status === "pending") return;
    let state = {};
    state[type] = event.target ? value : event;
    this.setState(state);
  }

  /* calculateSaleReturn
    Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
  */
  calculateSaleReturn(props) {
    let state = contractHelper.getAll(this.props.RelevantCoin) || this.state;

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
    let state = contractHelper.getAll(this.props.RelevantCoin) || this.state;
    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
    if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
    let foo = poolBalance * ((1 + (amount / totalSupply)) ** (1 / reserveRatio) - 1);
    return Math.round(foo * 10000) / 10000;
  }

  // calculatePurchaseReturn
  // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
  calculatePurchaseReturn(props) {
    let state = contractHelper.getAll(this.props.RelevantCoin) || this.state;
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
    console.log(this.props);
    return (
      <div className="--bondedToken">
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    RelevantCoin: state.contracts.RelevantCoin,
    drizzle: state,
  };
};

// export default connect(mapStateToProps, {})(BondedToken);
export default drizzleConnect(BondedToken, mapStateToProps);

// export default BondedToken;
