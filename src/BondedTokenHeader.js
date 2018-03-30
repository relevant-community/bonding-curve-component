import React from 'react';
import PropTypes from 'prop-types';
import * as relevantCoinHelper from './relevantCoinHelper';

class BondedTokenHeader extends React.Component {
  static contextTypes = {
    accountInfo: PropTypes.object,
    contractParams: PropTypes.object,
    bondingCurveState: PropTypes.object
  }

  render() {
    let { walletBalance, account } = this.context.accountInfo;
    let { transaction, web3State } = this.context.bondingCurveState;
    let { tokenBalance, symbol } = this.context.contractParams;
    let network = relevantCoinHelper.getNetwork(web3State);
    network = network === 'main' ? '' : network + '.';
    let { props } = this;
    let title = props.title || 'Bonded Token';
    return (
      <div>
        <div
          className="--bondedTokenHeader"
          style={{ background: props.accentColor }}
        >
          <h3 style={{ textAlign: 'center' }}>{title}</h3>
        </div>
        <div className="--bondedTokenHeaderBody">
          <div className="--bondedTokenAddress">
            {transaction.status && transaction.status === 'pending' ? (
              <div
                style={{
                  // maxWidth: '75%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                pending tx:{' '}
                <a
                target="_blank"

                href={`https://${network}etherscan.io/tx/${transaction.tx}`}>
                {transaction.tx}
                </a>
              </div>
            ) : null}
            address: <a
            target="_blank"
            href={`https://${network}etherscan.io/address/${account}`}
            >
              {account}
            </a>
          </div>
          <div className="--bondedToken-flex">
            <div
              className="--bondedToken-pointer"
            >
              {walletBalance.toFixed(2)} ETH
            </div>
            <div
              className="--bondedToken-pointer"
            >
              {tokenBalance ? tokenBalance.toFixed(2) : tokenBalance} {symbol}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BondedTokenHeader;
