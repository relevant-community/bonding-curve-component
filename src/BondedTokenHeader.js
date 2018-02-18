import React from 'react';
// import Blockie from 'lib-blockies';
// console.log(Blockie)
// var foo = require('lib-blockies')
// console.log(foo)
class BondedTokenHeader extends React.Component {
  render() {
    return (
      <div className="--bondedTokenHeader">
{/*       <img alt="blockie" src={this.state.url} />*/}
        <div className="--bondedTokenAddress">
          <a 
          target="_blank"
          href={"https://etherscan.io/address/" + this.props.account}>
          {this.props.account}
          </a>
        </div>
        <div className="--bondedToken-flex">
          <div className="--bondedToken-pointer" onClick={event => this.props.onChange({target:{value:this.props.walletBalance}}, 'amount') }>
            {this.props.walletBalance} ETH
          </div>
          <div className="--bondedToken-pointer" onClick={event => this.props.onChange({target:{value:this.props.tokenBalance}}, 'amount') }>
            {this.props.tokenBalance} Tokens
          </div>
        </div>
      </div>
    )
  }

  // constructor(props) {
  //   super(props);
  //   // console.log(Blockie)
  //   // const identicon = new Blockie(this.props.address);
  //   // const canvas = identicon.createCanvas(8);

  //   // this.state = {
  //   //   url: canvas.toDataURL()
  //   // }
  // }

}
export default BondedTokenHeader;