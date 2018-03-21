import React from 'react';
import Switch from 'react-flexible-switch';
import BigNumber from 'bignumber.js';


class BondedTokenTransact extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBuy = this.toggleBuy.bind(this);
    this.state = {
      isBuy: true
    }
  }

  toggleBuy() {
    if (this.props.loading) return;
    this.setState({
      amount: 0,
      isBuy: !this.state.isBuy
    });
  }

  render() {
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
                (this.props.address ? this.props.walletBalance : this.props.bigMax)
                : (this.props.address ? this.props.tokenBalance : this.props.totalSupply)}
              value={this.props.amount}
              onChange={event => {
                if (event.target.value && new BigNumber(event.target.value).gte(event.target.max)) {
                  event.target.value = event.target.max;
                } else if (!event.target.value || new BigNumber(event.target.value).lte('0')) {
                  event.target.value = 0;
                }
                this.props.onChange(event, 'amount');
              }} />
          </label>
        </div>
        <div className="--bondedToken-flex --bondedTokenTransact">
          <div>For</div>
          <label className={this.state.isBuy ? '--bondedToken-token' : '--bondedToken-eth'}>
            <div>
              {this.state.isBuy ?
                this.props.calculatePurchaseReturn() :
                this.props.calculateSaleReturn()}
            </div>
          </label>
        </div>
        {this.props.address && (
        <div className="--bondedToken-submit-container">
            <button
              value="submit"
              className="--bondedToken-submit"
              onClick={() => this.props.submit()} >
              submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default BondedTokenTransact;
