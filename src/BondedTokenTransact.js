import React from 'react';
import Switch from 'react-flexible-switch';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';

class BondedTokenTransact extends React.Component {
  static contextTypes = {
    drizzle: PropTypes.object,
  }

  constructor(props, context) {
    super(props);

    this.state = {
      isBuy: true,
      amount: 0,
    };

    this.toggleBuy = this.toggleBuy.bind(this);
    this.submit = this.submit.bind(this);

    this.contracts = context.drizzle.contracts;
  }

  toggleBuy() {
    if (this.props.loading) return;
    this.setState({
      amount: 0,
      isBuy: !this.state.isBuy
    });
  }

  submit() {
    if (this.props.amount <= 0 || this.props.loading) return;
    this.setState({ loading: 'Please Review & Sign Transaction' });
    if (this.state.isBuy) {
      let amount = Web3.utils.toWei(this.state.amount);
      amount = new BigNumber(amount, 10).toString(10);
      this.contracts.RelevantCoin.methods.buy.cacheSend({
        value: amount, from: this.props.account
      });
    } else {
      let { decimals } = this.props;
      let amount = new BigNumber(this.state.amount).times(10 ** decimals);

      this.contracts.RelevantCoin.methods.sell.cacheSend(amount, {
        from: this.props.account
      });
    }
    this.setState({
      amount: 0,
    });
  }

  render() {
    let { tokenBalance, walletBalance } = this.props;

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
                (this.props.address ? walletBalance.toFixed(4) : this.props.bigMax)
                : (this.props.address ? tokenBalance : tokenBalance.toFixed(4))}
              value={this.state.amount}
              onChange={event => {
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
                this.props.calculatePurchaseReturn({ amount: this.state.amount }) :
                this.props.calculateSaleReturn({ amount: this.state.amount })}
            </div>
          </label>
        </div>
        {this.props.address && (
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
