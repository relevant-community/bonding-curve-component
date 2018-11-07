export function toNumber(num, dec) {
  if (num === undefined || dec === undefined) return null;
  return num / (10 ** dec);
}

export function toFixed(num, dec) {
  if (!num) return 0;
  return num.toFixed(dec);
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
