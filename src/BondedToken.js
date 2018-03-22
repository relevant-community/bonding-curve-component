import React from 'react';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';

import BondedTokenHeader from './BondedTokenHeader';
import BondedTokenTransact from './BondedTokenTransact';
import BondedTokenAdvanced from './BondedTokenAdvanced';
import CurveChart from './Chart';
import contractUtils from './contractUtils';
import './css/BondedToken.css';
import * as contractHelper from './relevantCoinHelper';

const utils = require('web3-utils');
// TODO do we need this ?
// const ZeroClientProvider = require('web3-provider-engine/zero.js')

class BondedToken extends React.Component {
  static contextTypes = {
    drizzle: PropTypes.object,
  }

  constructor(props, context) {
    super(props);

    this.contracts = context.drizzle.contracts;
    console.log(context.drizzle);

    this.onChange = this.onChange.bind(this);
    this.calculateSaleReturn = this.calculateSaleReturn.bind(this);
    this.calculatePurchaseReturn = this.calculatePurchaseReturn.bind(this);
    this.calculateBuyPrice = this.calculateBuyPrice.bind(this);

    this.bigMax = 1000000;
    this.state = {
      address: '',
      loading: false,
      unlocked: false,
      account: null,
      network: null,

      walletBalance: 0,
      tokenBalance: 0,
      poolBalance: 4000000,
      totalSupply: 1000000,
      reserveRatio: 0.2,
      decimals: 18,
    };
  }

  // you must specify what you’re adding to the context
  // static childContextTypes = {
  //   contract: ProtTypes.object.isRequired,
  //   actions: ProtTypes.object.isRequired,
  // }

  // getChildContext() {
  //   return {
  //     contract: this.state,
  //     contractActions: {
  //       calculateSaleReturn: this.calculateSaleReturn,
  //       calculatePurchaseReturn: this.calculatePurchaseReturn,
  //       onChange: this.onChange,
  //       submit: this.sbmit,
  //     }
  //   };
  // }

  componentDidMount() {
    // contractUtils.init(this.state, this.setState.bind(this));
    contractUtils.initWeb3()
      .catch((error) => {
        console.log(error);
      });

    this.forceUpdate();
  }

  componentWillUpdate(next) {
    if (!this.props.drizzleStatus.initialized && next.drizzleStatus.initialized) {
      let options = {
        args: { tokenBalance: this.props.drizzle.accounts.ids[0] }
      };
      this.setState({
        account: this.props.drizzle.accounts.ids[0],
        address: this.contracts.RelevantCoin._address
      });
      contractHelper.initParams(this.contracts.RelevantCoin, options);
    }
  }

  componentWillUnmount() {
    contractUtils.stopChecking();
  }

  onChange(event, type) {
    let value = event.target ? event.target.value : null;
    value = parseFloat(value, 10);
    if (type === 'address') {
      if (event.target.value && !utils.isAddress(event.target.value)) {
        return;
      } else if (event.target.value) {
        // contractUtils.updateContractAddress(event.target.value);
      }
    }
    if (type === 'totalSupply') {
      value = Math.max(1000, event.target.value);
    }
    if (this.state.loading) return;
    let state = {};
    state[type] = event.target ? value : event;
    this.setState(state);
  }

  // methods

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
    // console.log(this.props.drizzle);
    let { tokenBalance, poolBalance, totalSupply, reserveRatio, decimals } = {};
    if (this.state.address) {
      ({ tokenBalance, poolBalance, totalSupply, reserveRatio, decimals } =
        contractHelper.getAll(this.props.RelevantCoin) || this.state);
    } else {
      ({ tokenBalance, poolBalance, totalSupply, reserveRatio, decimals } = this.state);
    }

    let walletBalance = contractHelper.getAccountBalance(this.props.drizzle, this.state.account) || this.state.walletBalance;

    let contractParams = { tokenBalance, poolBalance, totalSupply, reserveRatio, decimals };

    if (this.props.children) return this.props.children;
    return (
      <div className="--bondedToken">
        {this.state.loading && (
          <div>{this.state.loading}</div>
        )}

        <BondedTokenHeader
          account={this.state.account}
          walletBalance={walletBalance}
          {...contractParams}
        />

        <BondedTokenTransact
          calculateSaleReturn={this.calculateSaleReturn}
          calculatePurchaseReturn={this.calculatePurchaseReturn}
          bigMax={this.bigMax}
          loading={this.state.loading}
          address={this.state.address}
          account={this.state.account}
          walletBalance={walletBalance}
          {...contractParams}
        />

        <BondedTokenAdvanced
          bigMax={this.bigMax}
          onChange={this.onChange}
          address={this.state.address}
          {...contractParams}
        >
          <CurveChart
            calculateBuyPrice={this.calculateBuyPrice}
            calculateSaleReturn={this.calculateSaleReturn}
            {...contractParams}
          />
        </BondedTokenAdvanced>
      </div>
    );
  }
}

export default BondedToken;
