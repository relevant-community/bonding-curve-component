import React from 'react';
import Switch from 'react-flexible-switch';
import PropTypes from 'prop-types';

class BondedTokenAdvanced extends React.Component {
  static contextTypes = {
    contractParams: PropTypes.object,
    onChange: PropTypes.func,
    address: PropTypes.string,
    bigMax: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      advanced: false,
    };
    this.toggleAdvanced = this.toggleAdvanced.bind(this);
  }

  toggleAdvanced() {
    this.setState({
      advanced: !this.state.advanced
    });
  }

  render() {
    let { onChange, address, bigMax } = this.context;
    let { poolBalance, totalSupply, reserveRatio } = this.context.contractParams;

    return (
      <div className=" --BondedTokenAdvanced">
        <div className=" --bondedToken-flex-center">
          <Switch
          switchStyles={{ width: 110, color: 'grey' }}
          value={this.state.advanced}
          circleStyles={{ diameter: 16, onColor: 'grey', offColor: 'lightgrey' }}
          labels={{ on: 'Advanced', off: 'Advanced' }}
          onChange={this.toggleAdvanced} />
        </div>
        {this.state.advanced && (
        <div className=" --BondedTokenAdvanced-open">

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Token Address</div>
            <div>
              <label className="">
                <input
                  type="text"
                  value={address}
                  onChange={event => onChange(event, 'address')} />
              </label>
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Pool Balance</div>
            <div>
              <label className="--bondedToken-eth">
                <input
                  readOnly={!!address}
                  type="number"
                  value={poolBalance.toFixed(2)}
                  max={bigMax}
                  onChange={event => onChange(event, 'poolBalance')} />
              </label>
              {!address && (
              <input
                type="range"
                value={poolBalance.toFixed(2)}
                max={bigMax}
                onChange={event => onChange(event, 'poolBalance')} />)}
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Ratio</div>
            <div>
              <label className="--bondedToken-ratio">
                <input
                  readOnly={!!address}
                  type="number"
                  step="0.01"
                  max="1"
                  min="0"
                  value={reserveRatio.toFixed(2)}
                  onChange={event => onChange(event, 'reserveRatio')} />
              </label>
              {!address && (
              <input
                type="range"
                value={reserveRatio.toFixed(2)}
                max="1"
                step="0.01"
                onChange={event => onChange(event, 'reserveRatio')} />)}
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Total Supply</div>
            <div>
              <label className="--bondedToken-token">
                 <input
                    readOnly={!!address}
                    type="number"
                    value={totalSupply.toFixed(2)}
                    max={bigMax}
                    onChange={event => onChange(event, 'totalSupply')} />
              </label>
              {!address && (
              <input
                type="range"
                value={totalSupply.toFixed(2)}
                max={bigMax}
                onChange={event => onChange(event, 'totalSupply')} />)}
            </div>
          </div>
          {this.props.children}
        </div>
        )}
      </div>
    );
  }
}

BondedTokenAdvanced.propTypes = {
  totalSupply: PropTypes.number,
  reserveRatio: PropTypes.number,
  poolBalance: PropTypes.number,
  bigMax: PropTypes.number,
  onChange: PropTypes.func,
  address: PropTypes.string,
  children: PropTypes.element
};

export default BondedTokenAdvanced;
