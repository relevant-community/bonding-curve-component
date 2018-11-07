import React from 'react';
import Switch from 'react-flexible-switch';
import PropTypes from 'prop-types';
import BondingCurveContext from './BondingCurveContext';
import { toFixed } from './utils';

class BondedTokenAdvanced extends React.Component {
  static contextType = BondingCurveContext;

  static propTypes = {
    totalSupply: PropTypes.number,
    reserveRatio: PropTypes.number,
    poolBalance: PropTypes.number,
    onChange: PropTypes.func,
    address: PropTypes.string,
    children: PropTypes.element
  }

  constructor(props, context) {
    super(props);
    this.state = {
      advanced: false,
      custom: false,
      tokenBalance: 0,
      poolBalance: 4000000,
      totalSupply: 1000000,
      reserveRatio: 0.2,
      bigMax: context.contractParams.bigMax
    };
    this.toggleAdvanced = this.toggleAdvanced.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, type) {
    let { setCustomCurve } = this.context.contractActions;
    let value = event.target ? event.target.value : null;
    value = parseFloat(value, 10);
    this.setState({ [type]: value });
    setCustomCurve({ ...this.state, [type]: value });
  }


  toggleAdvanced() {
    this.setState({
      advanced: !this.state.advanced
    });
  }

  render() {
    let { custom } = this.state;

    let { onChange } = this.context.contractActions;
    let {
      poolBalance,
      totalSupply,
      reserveRatio,
      address,
      bigMax,
      contract
    } = custom ? this.state : this.context.contractParams;

    if (!custom && !contract) return null;
    let color = this.props.accentColor || 'blue';

    return (
      <div className=" --BondedTokenAdvanced">
        <div className=" --bondedToken-flex-center">
          <Switch
          switchStyles={{ width: 110, color }}
          value={this.state.advanced}
          circleStyles={{ diameter: 16, onColor: color, offColor: 'lightgrey' }}
          labels={{ on: 'Advanced', off: 'Advanced' }}
          onChange={this.toggleAdvanced} />
        </div>
        {this.state.advanced && (
        <div className=" --BondedTokenAdvanced-open">

        <Switch
          switchStyles={{ width: 110, color }}
          value={custom}
          circleStyles={{ diameter: 16, onColor: color, offColor: 'lightgrey' }}
          labels={{ on: 'Custom', off: 'Custom' }}
          onChange={() => {
            this.setState({ custom: !custom });
            this.context.contractActions.setCustomCurve({ ...this.state, custom: !custom });
          }}
        />

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Token Address</div>
            <div>
              <label className="">
                <input
                  type="text"
                  value={address}
                  name={'address'}
                  onChange={event => onChange(event, 'address')} />
              </label>
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Pool Balance</div>
            <div>
              <label className="--bondedToken-eth">
                <input
                  readOnly={!custom}
                  type="number"
                  value={toFixed(poolBalance, 2)}
                  max={bigMax}
                  name={'poolBalance'}
                  onChange={event => this.onChange(event, 'poolBalance')} />
              </label>
              {custom && (
              <input
                type="range"
                value={toFixed(poolBalance, 2)}
                max={bigMax}
                name={'poolBalance'}
                onChange={event => this.onChange(event, 'poolBalance')} />)}
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Ratio</div>
            <div>
              <label className="--bondedToken-ratio">
                <input
                  readOnly={!custom}
                  type="number"
                  step="0.01"
                  max="1"
                  min="0"
                  value={toFixed(reserveRatio, 2)}
                  name={'reserveRatio'}
                  onChange={event => this.onChange(event, 'reserveRatio')} />
              </label>
              {custom && (
              <input
                type="range"
                value={toFixed(reserveRatio, 2)}
                max="1"
                step="0.01"
                name={'reserveRatio'}
                onChange={event => this.onChange(event, 'reserveRatio')} />)}
            </div>
          </div>

          <div className="--bondedToken-flex --bondedTokenTransact">
            <div>Total Supply</div>
            <div>
              <label className="--bondedToken-token">
                 <input
                    readOnly={!custom}
                    type="number"
                    value={toFixed(totalSupply, 2)}
                    max={bigMax}
                    name={'totalSupply'}
                    onChange={event => this.onChange(event, 'totalSupply')} />
              </label>
              {custom && (
              <input
                type="range"
                value={toFixed(totalSupply, 2)}
                max={bigMax}
                name={'totalSupply'}
                onChange={event => this.onChange(event, 'totalSupply')} />)}
            </div>
          </div>
          {this.props.children}
        </div>
        )}
      </div>
    );
  }
}

export default BondedTokenAdvanced;
