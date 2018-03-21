import React from 'react';
import ProtTypes from 'prop-types';
import BondedTokenHeader from './BondedTokenHeader';
import BondedTokenTransact from './BondedTokenTransact';
import BondedTokenAdvanced from './BondedTokenAdvanced';
import CurveChart from './Chart';
import contractUtils from './contractUtils';
import './css/BondedToken.css';

const utils = require('web3-utils');
// TODO do we need this ?
// const ZeroClientProvider = require('web3-provider-engine/zero.js')

class BondedToken extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.calculateSaleReturn = this.calculateSaleReturn.bind(this);
    this.calculatePurchaseReturn = this.calculatePurchaseReturn.bind(this);

    this.bigMax = 1000000;
    this.state = {
      address: '',
      relevant: this.props.relevant,
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
      amount: 0,
      readOnly: false,
    };
    this.documentReady = false;
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
    contractUtils.init(this.state, this.setState.bind(this));
    contractUtils.initWeb3()
      .catch((error) => {
        console.log(error);
      });

    this.documentReady = true;
    this.forceUpdate();
  }

  componentWillUnmount() {
    contractUtils.stopChecking();
  }

  onChange(event, type) {
    let value = event.target ? event.target.value : null;
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
    let foo = {};
    foo[type] = event.target ? value : event;
    foo[type + 'Wei'] = '0';
    this.setState(foo);
  }

  submit() {
    if (this.state.amount <= 0 || this.state.loading) return;
    this.setState({ loading: 'Please Review & Sign Transaction' });
    if (this.state.isBuy) {
      contractUtils.buy(this.state.amount);
    } else {
      contractUtils.sell(this.state.amount);
    }
  }

  // methods

  /* calculateSaleReturn
    Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
  */
  calculateSaleReturn(props) {
    let { totalSupply, balance, ratio, amount } = props || this.state;
    if (!totalSupply || !balance || !ratio || !amount) return '0';

    if (totalSupply === 0 || ratio === 0 || balance === 0 || amount === 0) return '0';
    if (amount === totalSupply) return balance;
    if (ratio === 1) return balance;

    // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
    let result = balance * (1 - (1 - (amount / totalSupply)) ** (1 / ratio));
    return Math.round(result * 10000) / 10000;
  }

  calculateBuyPrice(props) {
    let { totalSupply, balance, ratio, amount } = props || this.state;
    if (!totalSupply || !balance || !ratio || !amount) return '0';
    if (totalSupply === 0 || ratio === 0 || balance === 0 || amount === 0) return '0';
    let foo = balance * ((1 + (amount / totalSupply)) ** (1 / ratio) - 1);
    return Math.round(foo * 10000) / 10000;
  }

  // calculatePurchaseReturn
  // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
  calculatePurchaseReturn(props) {
    let { totalSupply, balance, ratio, amount } = props || this.state;
    if (!totalSupply || !balance || !ratio || !amount) return '0';
    // special case if the weight = 100%
    if (ratio === 1) {
      return totalSupply * (amount / balance);
    }

    // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
    let foo = totalSupply * ((1 + amount / balance) ** ratio - 1);
    return Math.round(foo * 10000) / 10000;
  }

  render() {
    let { totalSupply, ratio, balance } = this.state;
    let curveParams = { totalSupply, ratio, balance };
    if (this.props.children) return this.props.children;
    return (
      <div className="--bondedToken">
        {this.state.loading && (
          <div>{this.state.loading}</div>
        )}

        <BondedTokenHeader
          account={this.state.account}
          walletBalance={this.state.walletBalance}
          tokenBalance={this.state.tokenBalance}
          onChange={this.onChange}
        />

        <BondedTokenTransact
          submit={this.submit}
          calculateSaleReturn={this.calculateSaleReturn}
          calculatePurchaseReturn={this.calculatePurchaseReturn}
          onChange={this.onChange}
          amount={this.state.amount}
          bigMax={this.bigMax}
          totalSupply={this.state.totalSupply}
          tokenBalance={this.state.tokenBalance}
          walletBalance={this.state.walletBalance}
          address={this.state.address}
          loading={this.state.loading}
          {...curveParams}
        />

        <BondedTokenAdvanced
          bigMax={this.bigMax}
          onChange={this.onChange}
          address={this.state.address}
          {...curveParams}
        >
          <CurveChart
            documentReady={this.documentReady}
            calculateBuyPrice={this.calculateBuyPrice}
            calculateSaleReturn={this.calculateSaleReturn}
            {...curveParams}
          />
        </BondedTokenAdvanced>
      </div>
    );
  }
}

export default BondedToken;
