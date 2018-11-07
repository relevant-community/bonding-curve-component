import React from 'react';
import Switch from 'react-flexible-switch';
// import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import { getNetwork, toFixed } from './utils';
import BondingCurveContext from './BondingCurveContext';

class BondedTokenTransact extends React.Component {
  static contextType = BondingCurveContext

  constructor(props) {
    super(props);

    this.state = {
      isBuy: true,
      amount: '',
    };

    this.toggleBuy = this.toggleBuy.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (!this.context.contractParams) return;
    if (this.context.contractParams.loading && !nextContext.contractParams.loading) {
      this.setState({
        amount: '',
      });
    }
  }

  toggleBuy() {
    let { loading } = this.context.contractParams;
    if (loading) return;
    this.setState({
      amount: '',
      isBuy: !this.state.isBuy
    });
  }

  submit() {
    let { decimals, contract, account, loading } = this.context.contractParams;
    if (this.state.amount <= 0 || loading) return;

    if (this.state.isBuy) {
      let amount = Web3.utils.toWei(this.state.amount.toString());
      amount = new BigNumber(amount.toString());
      contract.methods.buy.cacheSend({
        value: amount, from: account
      });
    } else {
      let amount = new BigNumber(this.state.amount.toString()).times(10 ** decimals);
      contract.methods.sell.cacheSend(amount, {
        from: account
      });
    }
  }

  render() {
    if (!this.context.contractParams) return null;

    let {
      calculatePurchaseReturn,
      calculateSaleReturn
    } = this.context.contractActions;

    let {
      walletBalance,
      account,
      tokenBalance,
      symbol,
      address,
      priceEth,
      priceDollar,
      web3State,
      bigMax,
      loading
    } = this.context.contractParams;


    let metamaskNetwork = getNetwork(web3State);

    let color = this.props.accentColor || 'blue';

    let button = (
      <button
        value="submit"
        className="--bondedToken-submit"
        onClick={() => this.submit()} >
        submit
      </button>
    );

    let submit = this.submit;

    if (this.props.children) {
      button = React.cloneElement(
        this.props.children,
        { ...this.props.children.props,
          onClick: submit }
      );
    }


    let desiredNetwork = this.props.network ? this.props.network.toLowerCase() : metamaskNetwork;

    if (!account || desiredNetwork !== metamaskNetwork) {
      let network = this.props.network || 'main';
      // let getTokens = (
      //   <p>
      //     You can get some free test network Ether here:{' '}
      //     <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>
      //     <br/>(pro-tip: use your GooglePlus account)
      //   </p>
      // );
      return (
        <div className="--bondedToken-not-connected">
          <p>
          Please enable your Metamask wallet and connect to the {network} network.
          </p>
          <p>
          Don't have Metamask? Download it here:{' '}
          <a href="https://metamask.io/">https://metamask.io/</a>
          </p>
{/*          {network !== 'main' ? getTokens : null}
*/}        </div>
      );
    }

    let action = 'Pay With';
    let available = <a
      onClick={() => this.setState({ amount: walletBalance })} >
        Available: {toFixed(walletBalance, 2)} ETH</a>;
    let placeholder = 'Enter amount... ';
    if (!this.state.isBuy) {
      // placeholder = 'Enter the amount of RNT you want to sell';
      available = <a onClick={() => this.setState({ amount: tokenBalance })}>
        Available: {toFixed(tokenBalance, 2)} {symbol}
      </a>;
      action = 'Sell';
    }

    return (
      <div >
        <div className="--bondedToken-flex --bondedTokenTransact">
          <Switch
            switchStyles={{
              width: 100,
              color,
              background: 'transparent',
              fontSize: '18px',
              borderColor: color
            }}
            value={this.state.isBuy}
            circleStyles={{
              diameter: 25,
              onColor: color,
              offColor: color,
              color,
            }}
            labels={{ on: 'Buy', off: 'Sell' }}
            onChange={() => this.toggleBuy()}
          />
        </div>

        <div
          className="--bondedTokenTransact"
        >

          <label className="--bondedToken-flex" style={{ borderBottomColor: color }}>
            {action}{': '}
            <input
              placeholder={placeholder}
              onFocus={e => {
                if (e.target.value === '0') this.setState({ amount: '' });
              }}
              type="text"
              max={this.state.isBuy ?
                (address ? toFixed(walletBalance, 4) : bigMax)
                : toFixed(tokenBalance, 4)}
              value={this.state.amount}
              onChange={event => {
                if (loading) return;
                if (event.target.value * 1 > event.target.max) {
                  event.target.value = event.target.max;
                } else if (!event.target.value || event.target.value * 1 < 0) {
                  event.target.value = '';
                }
                this.setState({ amount: event.target.value });
              }}
              />
              <div>{this.state.isBuy ? 'ETH' : symbol}</div>
          </label>
          <div className={'--bondedToken-available'}>
            {available}
          </div>
        </div>

        <div className="--bondedToken-flex --bondedTokenTransact">
          <div>Recieve:</div>
          <div>
            {this.state.isBuy ?
              calculatePurchaseReturn({ amount: this.state.amount }) :
              calculateSaleReturn({ amount: this.state.amount })}
            {' '}
            {!this.state.isBuy ? 'ETH' : symbol}
          </div>
        </div>

        <div className="--bondedToken-flex --bondedTokenTransact">
          <div>Rate:</div>
          <div>
            1 {symbol} = {priceEth} ETH (${priceDollar})
          </div>
        </div>

        {address && (
          <div className="--bondedToken-submit-container">
            {button}
          </div>
        )}
      </div>
    );
  }
}

export default BondedTokenTransact;
