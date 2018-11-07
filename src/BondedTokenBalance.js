import React from 'react';
import PropTypes from 'prop-types';
import BondingCurveContext from './BondingCurveContext';

class BondedTokenBalance extends React.Component {
  static contextType = BondingCurveContext

  render() {
    let { tokenBalance, symbol, priceDollar, web3State } = this.context.contractParams;
    if (web3State.status !== 'initialized') return null;

    return (
      <div>
        <div className="--bondedTokenBalance">
          {tokenBalance ? tokenBalance.toFixed(2) : tokenBalance} {symbol}
          {' '}(${(priceDollar * tokenBalance).toFixed(2)})
        </div>
      </div>
    );
  }
}

export default BondedTokenBalance;
