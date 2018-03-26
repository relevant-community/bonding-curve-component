import React from 'react';
import Switch from 'react-flexible-switch';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';

class BondedTokenTransact extends React.Component {
  static contextTypes = {
    walletBalance: PropTypes.number,
    account: PropTypes.string,
    calculatePurchaseReturn: PropTypes.func,
    calculateSaleReturn: PropTypes.func,
    address: PropTypes.string,
    loading: PropTypes.bool,
    contractParams: PropTypes.object,
    bigMax: PropTypes.number,
    RelevantCoin: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      isBuy: true,
      amount: 0,
    };

    this.toggleBuy = this.toggleBuy.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.context.loading && !nextContext.loading) {
      this.setState({
        amount: 0,
      });
    }
  }

  toggleBuy() {
    let { loading } = this.context;
    if (loading) return;
    this.setState({
      amount: 0,
      isBuy: !this.state.isBuy
    });
  }

  submit() {
    let { account, loading, RelevantCoin } = this.context;
    let { decimals } = this.context.contractParams;
    if (this.state.amount <= 0 || loading) return;
    this.setState({ loading: 'Please Review & Sign Transaction' });
    if (this.state.isBuy) {
      let amount = Web3.utils.toWei(this.state.amount);
      amount = new BigNumber(amount, 10).toString(10);
      RelevantCoin.methods.buy.cacheSend({
        value: amount, from: account
      });
    } else {
      let amount = new BigNumber(this.state.amount).times(10 ** decimals);
      RelevantCoin.methods.sell.cacheSend(amount, {
        from: account
      });
    }
  }

  render() {
    let {
      walletBalance,
      calculatePurchaseReturn,
      calculateSaleReturn,
      address,
      bigMax,
      loading
    } = this.context;
    let { tokenBalance } = this.context.contractParams;

    return (
      <div >
        <div className="--bondedToken-flex --bondedTokenTransact">
          <Switch
            switchStyles={{ width: 80 }}
            value={this.state.isBuy}
            circleStyles={{ diameter: 16, onColor: 'grey', offColor: 'grey' }}
            labels={{ on: 'Spend', off: 'Sell' }}
            onChange={() => this.toggleBuy()}
          />
          <label className={this.state.isBuy ? '--bondedToken-eth' : '--bondedToken-token'}>
            <input
              type="number"
              max={this.state.isBuy ?
                (address ? walletBalance.toFixed(4) : bigMax)
                : (address ? tokenBalance : tokenBalance.toFixed(4))}
              value={this.state.amount}
              onChange={event => {
                if (loading) return;
                if (event.target.value && new BigNumber(event.target.value).gte(event.target.max)) {
                  event.target.value = event.target.max;
                } else if (!event.target.value || new BigNumber(event.target.value).lt('0')) {
                  event.target.value = '';
                }
                this.setState({ amount: event.target.value });
              }} />
          </label>
        </div>
        <div className="--bondedToken-flex --bondedTokenTransact">
          <div>For</div>
          <label className={this.state.isBuy ? '--bondedToken-token' : '--bondedToken-eth'}>
            <div>
              {this.state.isBuy ?
                calculatePurchaseReturn({ amount: this.state.amount }) :
                calculateSaleReturn({ amount: this.state.amount })}
            </div>
          </label>
        </div>
        {address && (
        <div className="--bondedToken-submit-container">
            <button
              value="submit"
              className="--bondedToken-submit"
              onClick={() => this.submit()} >
              submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default BondedTokenTransact;
