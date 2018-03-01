import React from 'react';
import RelevantCoin from './dapp-module/RelevantCoin/index.js'
import './BondedToken.css';
import BondedTokenHeader  from './BondedTokenHeader';
import BondedTokenTransact  from './BondedTokenTransact.js';
import BondedTokenAdvanced  from './BondedTokenAdvanced.js';

var BigNumber = require('bignumber.js');
const Web3 = require('web3')
const utils = require('web3-utils')
// TODO do we need this ?
// const ZeroClientProvider = require('web3-provider-engine/zero.js')

class BondedToken extends React.Component {
  render() {

    return (
      <div className="--bondedToken">
        {this.state.loading && (
          <div>{this.state.loading}</div>
        )}

        {this.state.account && <BondedTokenHeader 
          account={this.state.account} 
          walletBalance={this.state.walletBalance}
          tokenBalance={this.state.tokenBalance}
          onChange={this.onChange}
          />}

        <BondedTokenTransact
          submit={this.submit}
          calculateSaleReturn={this.calculateSaleReturn}
          calculatePurchaseReturn={this.calculatePurchaseReturn}
          onChange={this.onChange}
          amount={this.state.amount}
          bigMax={this.bigMax}
          totalSupply={this.state.totalSupply}
          tokenBalance={this.state.tokenBalance}
          walletBalance={this.state.walletBalance}
          address={this.state.address}
          toggleBuy={this.toggleBuy}
          isBuy={this.state.isBuy} />

        <BondedTokenAdvanced
          documentReady={this.documentReady}
          chartData={this.chartData}
          bigMax={this.bigMax}
          onChange={this.onChange}
          balance={this.state.balance}
          ratio={this.state.ratio}
          totalSupply={this.state.totalSupply}
          address={this.state.address}
          advanced={this.state.advanced}
          toggleAdvanced={this.toggleAdvanced} />

  {/*      <pre style={{'textAlign':'left'}}>
        {JSON.stringify(this.state).split(',').join(',\n')}
        </pre>*/}
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.addresses = {
      5777: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
      99: '0x1daa59378d955a19cb30701b07eac7b2f048e736',
      4: '0x5df73d8fd2d8e6c6de24b731bdc295b2d915d0e9'
    }


    this.toggleAdvanced = this.toggleAdvanced.bind(this)
    this.toggleBuy = this.toggleBuy.bind(this)
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.calculateSaleReturn = this.calculateSaleReturn.bind(this)
    this.calculatePurchaseReturn = this.calculatePurchaseReturn.bind(this)

    this.bigMax = 1000000
    this.state = {
      advanced: false,
      address: this.props.address || '',
      loading: false,
      walletBalance: 0,
      walletBalanceWei: 0,
      tokenBalance: 0,
      tokenBalanceWei: 0,
      unlocked: false,
      account: null,
      network: null,
      balance: 4000000,
      balanceWei: 0,
      totalSupply: 1000000,
      totalSupplyWei: 0,
      ratio: 0.2,
      isBuy: true,
      amount: 0,
      readOnly: false,
    };
    this.getChartData = this.getChartData.bind(this);
    this.documentReady = false;
    this.chartData = {}
  }

  componentDidMount() {
    this.relevantCoin = new RelevantCoin()
    this.initWeb3().catch((error) => {
      console.log(error)
    })

    this.documentReady = true;
    this.getChartData(this.state);
    this.forceUpdate();

  }

  componentWillUnmount () {
    clearInterval(this.pollingInterval)
  }

  componentWillUpdate(newProps, newState) {
    let { totalSupply, ratio, balance } = this.state;
    let { totalSupplyN, ratioN, balanceN } = newState;
    if ( totalSupply !== totalSupplyN || ratio !== ratioN || balance !== balanceN) {
      this.getChartData(newState);
    }
  }
  // events

  toggleBuy () {
    if (this.state.loading) return
    this.setState({
      amount: 0,
      isBuy: !this.state.isBuy
    })
  }
  toggleAdvanced () {
    this.setState({ 
      advanced: !this.state.advanced
    })
  }
  onChange (event, type) {
    if (type === 'address') {
      if (event.target.value && !utils.isAddress(event.target.value)) {
        return
      } else if(event.target.value) {
        this.relevantCoin.deployContract(event.target.value)
      }
    }
    if (this.state.loading) return
    let foo = {}
    foo[type] = event.target ? event.target.value : event
    foo[type + 'Wei'] = '0'
    this.setState(foo)

  }
  submit () {
    if (this.state.amount <= 0 || this.state.loading) return
    console.log('submit')
    this.setState({loading: 'Please Review & Sign Transaction'})
    if (this.state.isBuy) {
      this.relevantCoin.buy(this.state.amount, this.state.account)
      .on('transactionHash', (hash) => {
        console.log('transactionHash', hash)
        this.setState({loading: 'Transaction is waiting for confirmation'})
      })
      .then((confirm) => {
        console.log('confirm', confirm)
        this.setState({
          amount: 0,
          loading: 'Transaction confirmed'
        })
        this.check()
        setTimeout(() => {
          this.setState({loading: false})
        }, 1000)
        return confirm
      }).catch((err) => {
        this.setState({loading: false})
        console.error(err)
      })
    } else {
      return this.relevantCoin.decimals().then((decimals) => {
        decimals = utils.padRight('10', parseInt(decimals, 10));
        return this.relevantCoin.sell(new BigNumber(this.state.amount).times(decimals).toString(), this.state.account)
        .on('transactionHash', (hash) => {
          console.log('transactionHash', hash)
          this.setState({loading: 'Transaction is waiting for confirmation'})
        })
        .then((confirm) => {
          console.log('confirm', confirm)
          this.setState({
            amount: 0,
            loading: 'Transaction confirmed'
          })
          this.check()
          setTimeout(() => {
            this.setState({loading: false})
          }, 1000)
          return confirm
        }).catch((err) => {
          this.setState({loading: false})
          console.error(err)
        })
      })

    }
  }

  getChartData (props) {
    // if (this.data) return this.data;
    let data = [];
    let { totalSupply, ratio, balance } = props;
    let step = Math.round(totalSupply / 100);
    let price = balance / ( ratio * totalSupply );
    let currentPrice = { supply: totalSupply, value: price };

    for(let i = step; i < totalSupply * 1.5; i += step) {
      if( i < totalSupply) {
        totalSupply = new BigNumber(totalSupply)
        let eth = 1 * this.calculateSaleReturn({ ...props, amount: totalSupply.minus(i).toString(10)});
        let price = (parseFloat(balance, 10) - eth) / ( ratio * i );
        data.push({ supply: i, sell: price, value: price});
      } else if (i > totalSupply) {
        let eth = 1 * this.calculateBuyPrice({ ...props, amount: i - totalSupply });
        let price = (eth + parseFloat(balance, 10)) / ( ratio * i );
        data.push({ supply: 1 * i, buy: price, value: 1 * price });
      }
    }
    this.chartData = { data, currentPrice };
    return data;
  }

  // methods

  // calculateSaleReturn
  // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
  calculateSaleReturn (props) {
    let { totalSupply, balance, ratio, amount } = props || this.state;
    if (!totalSupply || !balance || !ratio || !amount) return '0'

    let _supply = parseInt(totalSupply, 10)
    let _connectorBalance = parseInt(balance, 10)
    let _connectorWeight = parseFloat(ratio, 10)
    let _sellAmount = parseInt(amount, 10)
    if (_supply === 0 || _connectorBalance === 0 || _connectorWeight === 0) return '0'
    if (_sellAmount === 0)
      return '0';
    if (_sellAmount === _supply)
      return _connectorBalance.toString()
    if (_connectorWeight === 1)
      return _connectorBalance.toString()
    // console.log(Math.pow((1 - (_sellAmount / _supply)) , (1 / _connectorWeight)))

    // Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
    let foo = _connectorBalance * (1 - Math.pow((1 - (_sellAmount / _supply)) , (1 / _connectorWeight)))
    return Math.round(foo * 10000) / 10000

  }

  calculateBuyPrice(props) {
    let { totalSupply, balance, ratio, amount } = props || this.state;
    if (!totalSupply || !balance || !ratio || !amount) return '0'
    let _supply = parseInt(totalSupply, 10)
    let _connectorBalance = parseInt(balance, 10)
    let _connectorWeight = parseFloat(ratio, 10)
    let _buyAmount = parseInt(amount, 10)
    if (_supply === 0 || _connectorBalance === 0 || _connectorWeight === 0) return '0'
    if (_buyAmount === 0)
      return '0';
    let foo = _connectorBalance * (Math.pow((1 + (_buyAmount / _supply)), (1 / _connectorWeight)) - 1)
    return Math.round(foo * 10000) / 10000
  }

  // calculatePurchaseReturn
  // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
  calculatePurchaseReturn(props) {
    let { totalSupply, balance, ratio, amount } = props || this.state;
    if (!totalSupply || !balance || !ratio || !amount) return '0'
    let _supply = parseInt(totalSupply, 10)
    let _connectorBalance = parseInt(balance, 10)
    let _connectorWeight = parseFloat(ratio, 10)
    let _depositAmount = parseInt(this.state.amount, 10)
    if (_supply === 0 || _connectorBalance === 0 || _connectorWeight === 0 || _depositAmount === 0) return '0'

    // special case if the weight = 100%
    if (_connectorWeight === 1)
      return _supply * (_depositAmount / _connectorBalance)

    // console.log(Math.pow((1 + _depositAmount / _connectorBalance) , (_connectorWeight)))
    //Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
    let foo = _supply * (Math.pow((1 + _depositAmount / _connectorBalance) , (_connectorWeight)) - 1)
    return Math.round(foo * 10000) / 10000
    // let goo = _depositAmount
    //   .div(_connectorBalance)
    //   .plus('1')

    // let foo = new Decimal(
    //   goo.toString()
    // ).pow(_connectorWeight)
    // BigNumber.config({ DECIMAL_PLACES: 4 });

    // return _supply.times(
    //   (
    //     foo
    //   ).minus('1')
    // ).toString(10)
  }


  // Web3

  initWeb3 () {
    return new Promise((resolve, reject) => {

      let web3Provider = false

      // check for metamask
      if (global.web3) {
        web3Provider = global.web3.currentProvider
        // attempt to try again if no web3Provider
      } else {
        // this.setState({ readOnly: true})
        // web3Provider = ZeroClientProvider({
        //   getAccounts: function(){},
        //   rpcUrl: 'https://rinkeby.infura.io'
        // })
      }

      if (web3Provider) {
        global.web3 = new Web3(web3Provider)
        this.startChecking()
      } else {
        reject()
      }

    })
  }

  /*
   * Check every second for switching network or switching wallet
   */

  startChecking () {
    if (this.pollingInterval) clearInterval(this.pollingInterval)
    this.pollingInterval = setInterval(this.check.bind(this), 1000)
  }

  stopChecking () {
    if (this.pollingInterval) clearInterval(this.pollingInterval)
  }

  check () {
    return this.checkNetwork()
    .then(this.checkAccount.bind(this))
    .then(this.checkEth.bind(this))
    .then(this.checkBalances.bind(this))
    .catch((error) => {
      console.error(error)
      throw new Error(error)
    })
  }

  checkNetwork () {
      return global.web3.eth.net.getId((err, netId) => {
        if (err) console.log(err)
        if (!err && this.state.network !== netId && this.relevantCoin) {
          let address = this.props.relevant ? this.addresses[netId] : null
          this.setState({ 
            address,
            network: netId
          })
          address && this.relevantCoin.deployContract(address)
        }
    })
  }


  checkAccount () {
    return global.web3.eth.getAccounts((error, accounts) => {
      if (error) throw new Error(error)
      if (accounts.length && this.state.account !== accounts[0]) {
        this.setState({
          unlocked: true,
          account: accounts[0]
        })
      } else if (!accounts.length) {
        this.setState({
          unlocked: false,
          account: null
        })
      }
    })
  }


  checkBalances () {
    if (!this.state.address) return Promise.resolve()
    return this.checkToken()
    .then(this.checkPool.bind(this))
    .then(this.checkSupply.bind(this))
    .then(this.checkRatio.bind(this))
    .catch((error) => {
      console.log(error)
    })
  }

  checkEth () {
    if (!this.state.account) return
    return global.web3.eth.getBalance(this.state.account, (error, balance) => {
      if (error) throw new Error(error)
      if (this.state.walletBalanceWei !== balance) {
        BigNumber.config({ DECIMAL_PLACES: 4 });
        this.setState({
          walletBalanceWei: balance,
          walletBalance: new BigNumber(utils.fromWei(balance)).toString(10)
        })
      }
    })
  }
  checkToken () {
    return this.relevantCoin.balanceOf(this.state.account).then((balance) => {
      if (this.state.tokenBalanceWei !== balance) {
        return this.relevantCoin.decimals().then((decimals) => {
          decimals = utils.padRight('10', parseInt(decimals, 10));
          BigNumber.config({ DECIMAL_PLACES: 4 });
          this.setState({
            tokenBalanceWei: balance,
            tokenBalance: new BigNumber(balance).div(decimals).toString(10)
          })
        })
      }
    })
  }
  checkPool () {
    return this.relevantCoin.poolBalance().then((balance) => {
      if (this.state.balanceWei !== balance) {
        BigNumber.config({ DECIMAL_PLACES: 4 });
        this.setState({
          balanceWei: balance,
          balance: new BigNumber(utils.fromWei(balance)).toString(10)
        })
      }
    })
  }
  checkSupply () {
    return this.relevantCoin.totalSupply().then((totalSupply) => {
      if (this.state.totalSupplyWei !== totalSupply) {
        return this.relevantCoin.decimals().then((decimals) => {
          decimals = utils.padRight('10', parseInt(decimals, 10));
          this.setState({
            totalSupplyWei: totalSupply,
            totalSupply: new BigNumber(totalSupply).div(decimals).toString()
          })
        })
      }
    })
  }
  checkRatio () {
    return this.relevantCoin.reserveRatio().then((reserveRatio) => {
      reserveRatio = new BigNumber(reserveRatio).div('1000000')
      if (this.state.ratio !== reserveRatio.toString()) {
        this.setState({
          ratio: reserveRatio.toString()
        })
      }
    })
  }



}
export default BondedToken;
