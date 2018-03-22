import React from 'react';

class BondedTokenHeader extends React.Component {
  render() {
    if (!this.props.account) return null;

    let { tokenBalance } = this.props;

    return (
      <div className="--bondedTokenHeader">
        <div className="--bondedTokenAddress">
          <a
          target="_blank"
          href={'https://etherscan.io/address/' + this.props.account}>
          {this.props.account}
          </a>
        </div>
        <div className="--bondedToken-flex">
          <div
            className="--bondedToken-pointer"
          >
            {this.props.walletBalance.toFixed(2)} ETH
          </div>
          <div
            className="--bondedToken-pointer"
          >
            {tokenBalance  ? tokenBalance.toFixed(2) : tokenBalance} Tokens
          </div>
        </div>
      </div>
    );
  }
}

export default BondedTokenHeader;
