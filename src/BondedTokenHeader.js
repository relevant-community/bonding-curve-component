import React from 'react';

class BondedTokenHeader extends React.Component {
  render() {
    if (!this.props.account) return null;
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
            onClick={() => this.props.onChange({ target: { value: this.props.walletBalance } }, 'amount') }>
            {this.props.walletBalance} ETH
          </div>
          <div
            className="--bondedToken-pointer"
            onClick={() => this.props.onChange({ target: { value: this.props.tokenBalance } }, 'amount') }>
            {this.props.tokenBalance} Tokens
          </div>
        </div>
      </div>
    );
  }
}

export default BondedTokenHeader;
