# Bonded Token Buy/Sell/Paramaterize Component for React
Built on the occasion of ETHDenver Hackathon by Billy Rennekamp and Slava Balasanov

## Install
```npm install relevant-community/bonding-curve-component --save```

## Use
```

import BondedToken from 'bonded-token'

class App extends Component {
  render() {
    let contractAddress = '0xN07AR34LC0N7R4C74DDR355D0N0TU5E7H15H3110M0M' // optional
    return (<div>
      <BondedToken address={contractAddress} />
    </div>)
  }
}

export default App;
```