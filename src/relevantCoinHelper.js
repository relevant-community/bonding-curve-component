
const utils = require('web3-utils');
const BigNumber = require('bignumber.js');

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
  tokenBalance: { ...defaultConvert, ...{ key: 'balanceOf' } },
};

let initialized = false;
let argumentLookup = {};

export function getAccountBalance(state, account) {
  if (!account) return 0;
  if (!initialized) return null;
  try {
    let balance = state.accountBalances[account];
    if (!balance) return null;
    return parseFloat(utils.fromWei(balance), 10);
  } catch (err) {
    return 0;
  }
}

export function initParams(contract, options) {
  Object.keys(params).forEach(param => {
    let key = params[param].key || param;
    let args = options.args[param] || null;
    let argumentHash = contract.methods[key].cacheCall(args);
    argumentLookup[key] = argumentHash;
  });
  initialized = true;
}

export function getValue(contract, param) {
  if (!initialized) return null;

  let value;
  try {
    let key = params[param].key || param;
    ({ value } = contract.state[key][argumentLookup[key]]);
  } catch (err) {
    return null;
  }

  let p = params[param];

  if (p.convert && p.decimals === 'decimals') {
    let decimals = getValue(contract, 'decimals');
    value /= (10 ** decimals);
  } else if (p.convert && p.decimals) {
    value /= (10 ** p.decimals);
  }

  if (p.string) value.soString();
  return value;
}

export function getAll(contract) {
  if (!initialized) return null;
  let result = {};
  Object.keys(params).forEach(param => {
    result[param] = getValue(contract, param);
  });
  return result;
}

export function getNetwork(web3) {
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
