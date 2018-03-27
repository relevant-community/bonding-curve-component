import React from 'react';
import PropTypes from 'prop-types';
import * as relevantCoinHelper from './relevantCoinHelper';

class BondedTokenHeader extends React.Component {
  static contextTypes = {
    walletBalance: PropTypes.number,
    account: PropTypes.string,
    contractParams: PropTypes.object,
    transaction: PropTypes.object,
    web3State: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    let { walletBalance, account, transaction, web3State } = this.context;
    let { tokenBalance } = this.context.contractParams;
    let network = relevantCoinHelper.getNetwork(web3State);
    network = network === 'main' ? '' : network + '.';

    return (
      <div className="--bondedTokenHeader">
        {transaction.status && transaction.status === 'pending' ? (
          <div>Pending tx:{' '}
            <a
            target="_blank"
            href={`https://${network}etherscan.io/tx/${transaction.tx}`}>
            {account}
            </a>
          </div>
        ) : null}
        <div className="--bondedTokenAddress">
          <a
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
            {tokenBalance ? tokenBalance.toFixed(2) : tokenBalance} Tokens
          </div>
        </div>
      </div>
    );
  }
}

export default BondedTokenHeader;
