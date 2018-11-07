import React from 'react';
import PropTypes from 'prop-types';
import * as relevantCoinHelper from './relevantCoinHelper';
import BondingCurveContext from './BondingCurveContext';

class BondedTokenHeader extends React.Component {
  static contextType = BondingCurveContext

  render() {
    let {
      account,
      transaction,
      web3State
    } = this.context.contractParams;
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
            address: <a
            target="_blank"
            href={`https://${network}etherscan.io/address/${account}`}
            >
              {account}
            </a>
            {transaction.status && transaction.status === 'pending' ? (
              <div
                style={{
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
          </div>
        </div>
      </div>
    );
  }
}

export default BondedTokenHeader;
