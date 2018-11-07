import React, { Component } from 'react';
import { DrizzleProvider, drizzleConnect } from 'drizzle-react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import '../src/css/App.css';
import '../src/css/index.css';
import '../src/css/BondedToken.css';

import {
  BondedTokenBalance,
  BondedTokenContainer,
  BondedTokenHeader,
  BondedTokenTransact,
  BondedTokenAdvanced,
  Chart
} from '../src';

import store from './store';

import RelevantCoin from '../src/contracts/RelevantCoin.json';

const networkId = 4;

let options = {
  contracts: [
    RelevantCoin
  ],
  events: {},
  polls: {
    blocks: 300,
    accounts: 300,
  },
  networkId,
  web3: {
    ignoreMetamask: true,
    useMetamask: true,
    fallback: window.web3 ? null : {
      type: 'https',
      url: 'https://rinkeby.infura.io/' + 'eAeL7I8caPNjDe66XRTq',
      // type: 'ws',
      // url: 'ws://rinkeby.infura.io/_ws',
      networkId: 4,
    }
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>
          Welcome to the{' '}
          <a rel="noopener noreferrer" href="https://relevant.community" target="_blank">
            Relevant{' '}
          </a>
          Bonding Curve Token Contract</h3>
        <div style={{
          maxWidth: '480px',
          margin: '80px auto 80px auto',
        }}>
          <div className="App">
            <BondedTokenContainer {...this.props}>
              <BondedTokenHeader />
              <BondedTokenBalance />
              <BondedTokenTransact />
              <BondedTokenAdvanced>
                <Chart />
              </BondedTokenAdvanced>
            </BondedTokenContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drizzleStatus: state.drizzleStatus,
  contract: state.contracts.RelevantCoin,
  accounts: state.accounts,
  accountBalances: state.accountBalances,
  drizzle: state,
  contracts: state.contracts,
});


// use standard redux connect when using redux store
const AppComponent = connect(mapStateToProps, {})(App);

// use drizzleConnect for standalone apps
// export default drizzleConnect(BondedToken, mapStateToProps);
ReactDOM.render(
  (<Provider store={store}>
    <DrizzleProvider
      options={options}
      store={store} /* adding state prop tell DrizzleProvider to user existing redux store */
    >
      <AppComponent />
    </DrizzleProvider>
  </Provider>),
  document.body
);
