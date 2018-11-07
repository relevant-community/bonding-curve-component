import React from 'react';
import PropTypes from 'prop-types';
import { toNumber } from './utils';
import BondingCurveContext from './BondingCurveContext';
import RelevantCoin from './contracts/RelevantCoin.json';

const ethPrice = require('eth-price');
const utils = require('web3-utils');

class BondedTokenContainer extends React.Component {
  static contextTypes = { drizzle: PropTypes.object };

  constructor(props, context) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.calculateSaleReturn = this.calculateSaleReturn.bind(this);
    this.calculatePurchaseReturn = this.calculatePurchaseReturn.bind(this);
    this.calculateBuyPrice = this.calculateBuyPrice.bind(this);
    // this.getChildContext = this.getChildContext.bind(this);
    this.queryParams = this.queryParams.bind(this);
    this.queryBalance = this.queryBalance.bind(this);
    this.setCustomCurve = this.setCustomCurve.bind(this);

    this.state = {
      address: '',
      loading: false,
      account: null,
      decimals: 18,
      transaction: {},
      ETHUSD: 0,
      web3State: { status: null },
      simulated: false,
      customCurve: {},
      bigMax: 100000000,
      // contract: props.contract,

      tokenBalance: 0,
      poolBalance: 0,
      totalSupply: 0,
      reserveRatio: 0.1,
      walletBalance: 0,
    };
  }

  queryParams() {
    let { contract } = this.props;
    if (this.state.customContract) {
      contract = this.props.contracts[this.state.customContract];
    }
    if (!contract) return;
    contract.methods.totalSupply.cacheCall();
    contract.methods.decimals.cacheCall();
    contract.methods.poolBalance.cacheCall();
    contract.methods.reserveRatio.cacheCall();
    contract.methods.rewardPool.cacheCall();
    contract.methods.distributedRewards.cacheCall();
    contract.methods.virtualSupply.cacheCall();
    contract.methods.virtualBalance.cacheCall();
    contract.methods.inflationSupply.cacheCall();
    contract.methods.symbol.cacheCall();
  }

  queryBalance() {
    let account = this.props.accounts[0];
    let { contract } = this.props;
    if (this.state.customContract) {
      contract = this.props.contracts[this.state.customContract];
    }
    if (account && contract) {
      contract.methods.balanceOf.cacheCall(account);
    }
  }

  static getDerivedStateFromProps(props, state) {
    let { contract, accounts, accountBalances } = props;
    // let { contract } = state;
    if (state.customContract) {
      contract = props.contracts[state.customContract];
    }

    if (!props.drizzleStatus.initialized || !contract) {
      return null;
    }

    let { address } = contract;

    let account = accounts[0];
    let walletBalance = toNumber(accountBalances[account], 18);

    let tokenBalance = 0;
    let decimals = toNumber(contract.methods.decimals.fromCache(), 0);
    if (account) {
      tokenBalance = toNumber(contract.methods.balanceOf.fromCache(account), decimals);
    }

    let updatedState = {
      decimals,
      symbol: (contract.methods.symbol.fromCache() || '').toUpperCase(),
      poolBalance: toNumber(contract.methods.poolBalance.fromCache(), decimals),
      totalSupply: toNumber(contract.methods.totalSupply.fromCache(), decimals),
      rewardPool: toNumber(contract.methods.rewardPool.fromCache(), decimals),
      distributedRewards: toNumber(contract.methods.distributedRewards.fromCache(), decimals),
      virtualSupply: toNumber(contract.methods.virtualSupply.fromCache(), decimals),
      virtualBalance: toNumber(contract.methods.virtualBalance.fromCache(), decimals),
      inflationSupply: toNumber(contract.methods.inflationSupply.fromCache(), decimals),
      reserveRatio: toNumber(contract.methods.reserveRatio.fromCache(), 6),
      tokenBalance,
      walletBalance,
      account,
      contract,
      address,
      web3State: props.drizzle.web3,
      drizzleStatus: props.drizzleStatus
    };

    let lastTx = props.drizzle.transactionStack.length;
    let transaction = {};
    if (lastTx) {
      let recentTransaction = props.drizzle.transactionStack[lastTx - 1];
      let latestStatus = props.drizzle.transactions[recentTransaction].status;
      if (latestStatus === 'success') {
        transaction = {};
      } else {
        transaction = {
          status: latestStatus,
          tx: recentTransaction
        };
      }
    }

    let priceEth = updatedState.poolBalance / (updatedState.totalSupply * updatedState.reserveRatio);

    let priceDollar = (priceEth * state.ETHUSD).toFixed(2);

    updatedState.priceEth = priceEth.toFixed(6);
    updatedState.priceDollar = priceDollar;
    updatedState.transaction = transaction;
    updatedState.loading = transaction.status === 'pending';

    return updatedState;
  }


  componentDidMount() {
    this.queryParams();
    this.queryBalance();

    ethPrice('usd')
      .then(ETHUSD => {
        ETHUSD = ETHUSD[0].replace('USD: ', '');
        this.setState({ ETHUSD: parseFloat(ETHUSD) });
        this.forceUpdate();
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.accounts[0] !== prevProps.accounts[0]) {
      this.queryBalance();
    }
    if (prevState.address !== this.state.address) {
      this.queryParams();
      this.queryBalance();
    }
    if (prevProps.drizzleStatus.initialized !== this.props.drizzleStatus.initialized &&
      this.props.drizzleStatus.initialized) {
      this.queryParams();
      this.queryBalance();
    }
  }

  onChange(event, type) {
    let value = event.target ? event.target.value : null;
    value = parseFloat(value, 10);
    if (type === 'address') {
      if (event.target.value && !utils.isAddress(event.target.value)) {
        return;
      } else if (event.target.value) {
        // TODO update contract
        let address = event.target.value;
        this.context.drizzle.addContract(RelevantCoin, {
          name: address,
          address,
          // events: [
          //   {
          //     eventName: 'StoreHash',
          //     eventOptions: {
          //       fromBlock: e.blockNumber
          //     }
          //   }
          // ]
        });
        this.setState({ customContract: address });
        return;
      }
    }

    if (this.transaction.status === 'pending') return;
    let state = {};
    state[type] = event.target ? value : event;
    this.setState(state);
  }

  calculatePrice(totalSupply, poolBalance, reserveRatio) {
    return poolBalance / (totalSupply * reserveRatio);
  }

  /* calculateSaleReturn
    Return = _connectorBalance * (1 - (1 - _sellAmount / _supply) ^ (1 / (_connectorWeight / 1000000)))
  */
  calculateSaleReturn(props) {
    let { state } = this;

    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';

    if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
    if (amount === totalSupply) return poolBalance;
    if (reserveRatio === 1) return poolBalance;

    let result = poolBalance * (1 - (1 - (amount / totalSupply)) ** (1 / reserveRatio));
    return result; //Math.round(result * 10000) / 10000;
  }

  calculateBuyPrice(props) {
    let { state } = this;
    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
    if (totalSupply === 0 || reserveRatio === 0 || poolBalance === 0 || amount === 0) return '0';
    let result = poolBalance * ((1 + (amount / totalSupply)) ** (1 / reserveRatio) - 1);
    return result; //Math.round(result * 10000) / 10000;
  }

  // calculatePurchaseReturn
  // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
  calculatePurchaseReturn(props) {
    let { state } = this;
    let { totalSupply, poolBalance, reserveRatio, amount } = { ...state, ...props };
    if (!totalSupply || !poolBalance || !reserveRatio || !amount) return '0';
    // special case if the weight = 100%
    if (reserveRatio === 1) {
      return totalSupply * (amount / poolBalance);
    }

    // Return = _supply * ((1 + _depositAmount / _connectorBalance) ^ (_connectorWeight / 1000000) - 1)
    let foo = totalSupply * ((1 + amount / poolBalance) ** reserveRatio - 1);
    return Math.round(foo * 10000) / 10000;
  }

  setCustomCurve(customCurve) {
    this.setState({ customCurve });
  }

  render() {
    let color = this.props.themeColor || 'grey';

    let contractActions = {
      calculatePurchaseReturn: this.calculatePurchaseReturn,
      calculateSaleReturn: this.calculateSaleReturn,
      calculateBuyPrice: this.calculateBuyPrice,
      onChange: this.onChange,
      setCustomCurve: this.setCustomCurve
    };

    let contractParams = {
      contractParams: this.state,
      contractActions,
    };

    return (
      <BondingCurveContext.Provider value={contractParams}>
        <div
          className={'--bondedToken'}
          style={{ borderColor: color }}
        >
          {this.props.children}
        </div>
      </BondingCurveContext.Provider>
    );
  }
}

export default BondedTokenContainer;

