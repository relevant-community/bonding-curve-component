import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleProvider, drizzleConnect } from 'drizzle-react';
import ReactDOM from 'react-dom';
import BondedToken from '../src/BondedToken';
import '../src/css/App.css';
import '../src/css/index.css';
import Chart from '../src/Chart';

import RelevantCoin from '../src/contracts/RelevantCoin.json';

let options = {
  contracts: [
    RelevantCoin
  ],
  events: {
  //   contractName: [
  //     eventName
  //   ]
  },
  web3: {
    ignoreMetamask: true,
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
          Welcome to{' '}
          <a rel="noopener noreferrer" href="https://relevant.community" target="_blank">
            Relevant
          </a>
          's Bonded Curve Token Contract</h3>
        <div style={{
          maxWidth: '480px',
          margin: '80px auto 80px auto',
        }}>
          <div className="App">
            <BondedToken {...this.props} relevant={true} />
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
    drizzle: state,
  };
};

const AppContainer = drizzleConnect(App, mapStateToProps);

ReactDOM.render((
  <DrizzleProvider options={options}>
    <AppContainer />
  </DrizzleProvider>), document.body
);
