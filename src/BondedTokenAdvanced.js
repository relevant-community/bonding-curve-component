import React from 'react';
import Switch from 'react-flexible-switch';
import PropTypes from 'prop-types';

class BondedTokenAdvanced extends React.Component {
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
    let { poolBalance, totalSupply, reserveRatio } = this.props;

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
                  value={this.props.address}
                  onChange={event => this.props.onChange(event, 'address')} />
              </label>
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Pool Balance</div>
            <div>
              <label className="--bondedToken-eth">
                <input
                  readOnly={!!this.props.address}
                  type="number"
                  value={poolBalance.toFixed(2)}
                  max={this.props.bigMax}
                  onChange={event => this.props.onChange(event, 'poolBalance')} />
              </label>
              {!this.props.address && (
              <input
                type="range"
                value={poolBalance.toFixed(2)}
                max={this.props.bigMax}
                onChange={event => this.props.onChange(event, 'poolBalance')} />)}
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Ratio</div>
            <div>
              <label className="--bondedToken-ratio">
                <input
                  readOnly={!!this.props.address}
                  type="number"
                  step="0.01"
                  max="1"
                  min="0"
                  value={reserveRatio.toFixed(2)}
                  onChange={event => this.props.onChange(event, 'reserveRatio')} />
              </label>
              {!this.props.address && (
              <input
                type="range"
                value={reserveRatio.toFixed(2)}
                max="1"
                step="0.01"
                onChange={event => this.props.onChange(event, 'reserveRatio')} />)}
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Total Supply</div>
            <div>
              <label className="--bondedToken-token">
                 <input
                    readOnly={!!this.props.address}
                    type="number"
                    value={totalSupply.toFixed(2)}
                    max={this.props.bigMax}
                    onChange={event => this.props.onChange(event, 'totalSupply')} />
              </label>
              {!this.props.address && (
              <input
                type="range"
                value={totalSupply.toFixed(2)}
                max={this.props.bigMax}
                onChange={event => this.props.onChange(event, 'totalSupply')} />)}
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
