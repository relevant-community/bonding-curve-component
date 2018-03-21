import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BondedToken from '../src/BondedToken';
import '../src/css/App.css';
import '../src/css/index.css';
import Chart from '../src/Chart';

// import RelevantCoin from '../src/contracts/RelevantCoin.json';


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
            <BondedToken relevant={true} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
