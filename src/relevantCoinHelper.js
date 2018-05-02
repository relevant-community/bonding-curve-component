
const utils = require('web3-utils');

let defaultConvert = {
  convert: true,
  decimals: 'decimals'
};

export const params = {
  totalSupply: defaultConvert,
  decimals: { convert: false },
  poolBalance: defaultConvert,
  reserveRatio: { convert: true, decimals: 6 },
  inflationSupply: defaultConvert,
  rewardPool: defaultConvert,
  distributedRewards: defaultConvert,
  virtualSupply: defaultConvert,
  virtualBalance: defaultConvert,
  symbol: { convert: false },
};


export function getAccountBalance(accountBalances, account) {
  if (!account) return 0;
  try {
    let balance = accountBalances[account];
    if (!balance) return null;
    return parseFloat(utils.fromWei(balance), 10);
  } catch (err) {
    return 0;
  }
}

export function formatParam(contract, value, param) {
  // if (!value) return null;
  let p = params[param] || defaultConvert;
  if (p.convert && p.decimals === 'decimals') {
    let decimals = getValue(contract, 'decimals');
    value /= (10 ** decimals);
  } else if (p.convert && p.decimals) {
    value /= (10 ** p.decimals);
  }
  if (p.string) value.soString();
  return value;
}

export function getValue(contract, method, args) {
  if (!contract || !contract.initialized) return null;
  let result;
  if (args) {
    result = contract.methods[method].cacheCall(args);
  } else {
    result = contract.methods[method].cacheCall();
  }
  return formatParam(contract, result, method);
}


export function initParams(contract) {
  if (!contract || !contract.initialized) return {};
  Object.keys(params).forEach(param => {
    getValue(contract, param);
  });
}

export function getAll(contract) {
  if (!contract || !contract.initialized) return {};
  let result = {};
  Object.keys(params).forEach(param => {
    result[param] = getValue(contract, param);
  });
  return result;
}

export function getNetwork(web3) {
  if (!web3) return null;
  let network = web3.networkId;
  switch (network) {
    case 1:
      return 'main';
    case 2:
      return 'morden';
    case 3:
      return 'ropsten';
    case 4:
      return 'rinkeby';
    case 42:
      return 'kovan';
    default:
      return 'unknown';
  }
}
