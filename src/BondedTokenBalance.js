import React from 'react';
import PropTypes from 'prop-types';

class BondedTokenBalance extends React.Component {
  static contextTypes = {
    accountInfo: PropTypes.object,
    contractParams: PropTypes.object,
    bondingCurveState: PropTypes.object
  }

  render() {
    let { account } = this.context.accountInfo;
    let { web3State } = this.context.bondingCurveState;
    let { tokenBalance, symbol, priceDollar } = this.context.contractParams;
    if (web3State.status !== 'initialized') return null;

    return (
      <div>
        <div className="--bondedTokenBalance">
          {tokenBalance ? tokenBalance.toFixed(2) : tokenBalance} {symbol}
          {' '}(${(priceDollar * tokenBalance).toFixed(2)})
        </div>
{/*        <div className="--bondedTokenHeaderBody">
          <div className="--bondedTokenAddress">
            address: <a
            target="_blank"
            href={`https://${network}etherscan.io/address/${account}`}
            >
              {account}
            </a>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default BondedTokenBalance;
