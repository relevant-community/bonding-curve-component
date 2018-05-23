import React from 'react';
import Switch from 'react-flexible-switch';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import { getNetwork } from './relevantCoinHelper';

class BondedTokenTransact extends React.Component {
  static contextTypes = {
    contractParams: PropTypes.object,
    accountInfo: PropTypes.object,
    contractActions: PropTypes.object,
    bondingCurveState: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      isBuy: true,
      amount: '',
    };

    this.toggleBuy = this.toggleBuy.bind(this);
    this.submit = this.submit.bind(this);

    this.bigMax = 1000000;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.context.bondingCurveState.loading && !nextContext.bondingCurveState.loading) {
      this.setState({
        amount: '',
      });
    }
  }

  toggleBuy() {
    let { loading } = this.context.bondingCurveState;
    if (loading) return;
    this.setState({
      amount: '',
      isBuy: !this.state.isBuy
    });
  }

  submit() {
    let { loading } = this.context.bondingCurveState;
    let { account } = this.context.accountInfo;
    let { decimals, RelevantCoin } = this.context.contractParams;
    if (this.state.amount <= 0 || loading) return;

    // this.setState({ loading: 'Please Review & Sign Transaction' });

    if (this.state.isBuy) {
      let amount = Web3.utils.toWei(this.state.amount.toString());
      amount = new BigNumber(amount.toString());
      RelevantCoin.methods.buy.cacheSend({
        value: amount, from: account
      });
    } else {
      let amount = new BigNumber(this.state.amount.toString()).times(10 ** decimals);
      RelevantCoin.methods.sell.cacheSend(amount, {
        from: account
      });
    }
  }

  render() {
    let {
      calculatePurchaseReturn,
      calculateSaleReturn
    } = this.context.contractActions;
    let { loading, web3State } = this.context.bondingCurveState;
    let { walletBalance, account } = this.context.accountInfo;
    let { tokenBalance, symbol, address, priceEth, priceDollar } = this.context.contractParams;

    let metamaskNetwork = getNetwork(web3State);

    let color = this.props.accentColor || 'blue';
    let { bigMax } = this;

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

    // if (!drizzleStatus.initialized) {
    //   return (
    //     <p>
    //       Connecting to Metamask...
    //     </p>
    //   );
    // }

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
        Available: {walletBalance.toFixed(2)} ETH</a>;
    let placeholder = 'Enter amount... ';
    if (!this.state.isBuy) {
      // placeholder = 'Enter the amount of RNT you want to sell';
      available = <a onClick={() => this.setState({ amount: tokenBalance })}>
        Available: {tokenBalance.toFixed(2)} {symbol}
      </a>;
      action = 'Sell';
    }

    return (
      <div >
        <div className="--bondedToken-flex --bondedTokenTransact">
          <Switch
            switchStyles={{
              // fontWeight: 'bold',
              width: 100,
              color,
              background: 'transparent',
              // borderRadius: 0,
              fontSize: '18px',
              // border: '2px solid ' + color.
              borderColor: color
            }}
            value={this.state.isBuy}
            circleStyles={{
              diameter: 25,
              onColor: color,
              offColor: color,
              color,
              // borderRadius: 0
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
                (address ? walletBalance.toFixed(4) : bigMax)
                : tokenBalance.toFixed(4)}
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
