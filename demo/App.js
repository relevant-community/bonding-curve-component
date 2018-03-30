import React, { Component } from 'react';
import { DrizzleProvider, drizzleConnect } from 'drizzle-react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import '../src/css/App.css';
import '../src/css/index.css';
import './css/BondedToken.css';

import BondedTokenContainer from '../src/BondedTokenContainer';
import BondedTokenHeader from '../src/BondedTokenHeader';
import BondedTokenTransact from '../src/BondedTokenTransact';
import BondedTokenAdvanced from '../src/BondedTokenAdvanced';
import Chart from '../src/Chart';

import store from './store';

import RelevantCoin from '../src/contracts/RelevantCoin.json';

let options = {
  contracts: [
    RelevantCoin
  ],
  events: {},
  polls: {
    blocks: 300,
    accounts: 300,
  },
  web3: {
    // ignoreMetamask: true,
    useMetamask: true,
    block: false,
    fallback: {
      type: 'ws',
      url: 'wss://rinkeby.infura.io/_ws'
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
            <BondedToken {...this.props}>
              <BondedTokenHeader />
              <BondedTokenTransact />
              <BondedTokenAdvanced>
                <Chart />
              </BondedTokenAdvanced>
            </BondedToken>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    RelevantCoin: state.contracts.RelevantCoin,
    accounts: state.accounts,
    accountBalances: state.accountBalances
  };
};

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
