import RelevantCoin from './dapp-module/RelevantCoin';

const BigNumber = require('bignumber.js');
const Web3 = require('web3');
const utils = require('web3-utils');

// Web3
class ContractUtils {
  constructor() {
    this.pollingInterval = false;
    this.setState = null;
    this.state = {};
    this.relevantCoin = new RelevantCoin();

    this.addresses = {
      5777: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
      99: '0x1daa59378d955a19cb30701b07eac7b2f048e736',
      4: '0x5df73d8fd2d8e6c6de24b731bdc295b2d915d0e9'
    };

    this.check = this.check.bind(this);
    this.checkAccount = this.checkAccount.bind(this);
    this.checkPool = this.checkPool.bind(this);
    this.checkSupply = this.checkSupply.bind(this);
    this.checkRatio = this.checkRatio.bind(this);
    this.checkEth = this.checkEth.bind(this);
    this.checkNetwork = this.checkNetwork.bind(this);
    this.buy = this.buy.bind(this);
    this.updateContractAddress = this.updateContractAddress.bind(this);
  }

  init(_state, _setState) {
    this.state = _state;
    this.setState = state => {
      this.state = { ...this.state, ...state };
      _setState(state);
    };
  }

  initWeb3() {
    return new Promise((resolve, reject) => {
      let web3Provider;
      // check for metamask
      if (global.web3) {
        web3Provider = global.web3.currentProvider;
        // attempt to try again if no web3Provider
      } else {
        // this.setState({ readOnly: true})
        // web3Provider = ZeroClientProvider({
        //   getAccounts: function(){},
        //   rpcUrl: 'https://rinkeby.infura.io'
        // })
      }
      if (web3Provider) {
        global.web3 = new Web3(web3Provider);
        // this.startChecking();
      } else {
        reject();
      }
    });
  }

  updateContractAddress(address) {
    this.relevantCoin.deployContract(address);
  }

  async buy(amount) {
    try {
      let confirm = await this.relevantCoin.buy(amount, this.state.account)
        .on('transactionHash', (hash) => {
          console.log('transactionHash', hash);
          this.setState({ loading: 'Transaction is waiting for confirmation' });
        });
      console.log('confirm', confirm);
      this.setState({
        amount: 0,
        loading: 'Transaction confirmed'
      });
      this.check();
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    } catch (err) {
      this.setState({ loading: false });
      console.error(err);
    }
  }

  async sell(amount) {
    try {
      let decimals = await this.relevantCoin.decimals();
      let confirm = await this.relevantCoin
        .sell(new BigNumber(amount).times(10 ** decimals).toString(), this.state.account)
        .on('transactionHash', (hash) => {
          console.log('transactionHash', hash);
          this.setState({ loading: 'Transaction is waiting for confirmation' });
        });
      console.log('confirm', confirm);
      this.setState({
        amount: 0,
        loading: 'Transaction confirmed'
      });
      this.check();
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    } catch (err) {
      this.setState({ loading: false });
      console.error(err);
    }
  }


  async checkNetwork() {
    let netId = await global.web3.eth.net.getId();
    if (this.state.network !== netId && this.relevantCoin) {
      let address = this.state.relevant ? this.addresses[netId] : null;
      this.setState({
        address,
        network: netId
      });
      if (address) this.relevantCoin.deployContract(address);
    }
  }

  async checkAccount() {
    let accounts = await global.web3.eth.getAccounts();
    if (accounts.length && this.state.account !== accounts[0]) {
      this.setState({
        unlocked: true,
        account: accounts[0]
      });
    } else if (!accounts.length) {
      this.setState({
        unlocked: false,
        account: null
      });
    }
  }

  async checkEth() {
    if (!this.state.account) return;
    let balance = await global.web3.eth.getBalance(this.state.account);
    if (this.state.walletBalanceWei !== balance) {
      BigNumber.config({ DECIMAL_PLACES: 4 });
      this.setState({
        walletBalanceWei: balance,
        walletBalance: new BigNumber(utils.fromWei(balance)).toString(10)
      });
    }
  }

  async checkToken() {
    let balance = await this.relevantCoin.balanceOf(this.state.account);
    if (this.state.tokenBalanceWei !== balance) {
      let decimals = await this.relevantCoin.decimals();
      BigNumber.config({ DECIMAL_PLACES: 4 });
      this.setState({
        tokenBalanceWei: balance,
        tokenBalance: new BigNumber(balance).div(10 ** decimals).toString(10)
      });
    }
  }

  async checkPool() {
    let balance = await this.relevantCoin.poolBalance();
    if (this.state.balanceWei !== balance) {
      BigNumber.config({ DECIMAL_PLACES: 4 });
      this.setState({
        balanceWei: balance,
        balance: new BigNumber(utils.fromWei(balance)).toString(10)
      });
    }
  }

  async checkSupply() {
    let totalSupply = await this.relevantCoin.totalSupply();
    if (this.state.totalSupplyWei !== totalSupply) {
      let decimals = await this.relevantCoin.decimals();
      this.setState({
        totalSupplyWei: totalSupply,
        totalSupply: new BigNumber(totalSupply).div(10 ** decimals).toString()
      });
    }
  }

  async checkRatio() {
    let reserveRatio = await this.relevantCoin.reserveRatio();
    reserveRatio = new BigNumber(reserveRatio).div('1000000');
    if (this.state.ratio !== reserveRatio.toString()) {
      this.setState({
        ratio: reserveRatio.toString()
      });
    }
  }

  async check() {
    try {
      await this.checkNetwork();
      await this.checkAccount();
      await this.checkEth();

      if (!this.state.address) return;
      await this.checkToken();
      await this.checkPool();
      await this.checkSupply();
      await this.checkRatio();
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  /*
   * Check every second for switching network or switching wallet
   */
  startChecking() {
    if (this.pollingInterval) clearInterval(this.pollingInterval);
    this.pollingInterval = setInterval(this.check, 1000);
  }

  stopChecking() {
    if (this.pollingInterval) clearInterval(this.pollingInterval);
  }
}

export default new ContractUtils();

