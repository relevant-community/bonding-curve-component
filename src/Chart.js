import React from 'react';
import BondingCurveContext from './BondingCurveContext';

const Recharts = require('recharts');

const {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ComposedChart
} = Recharts;

class CurveChart extends React.Component {
  static contextType = BondingCurveContext

  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }
  componentDidMount() {
    this.documentReady = true;
    this.forceUpdate();
  }

  getChartData() {
    let { calculateSaleReturn, calculateBuyPrice } = this.context.contractActions;
    let props = this.context.contractParams;
    let { custom } = props.customCurve;
    let { bigMax } = props;
    if (custom) {
      props = props.customCurve;
    }

    let { totalSupply, reserveRatio, poolBalance } = props;
    if (bigMax > totalSupply * 1.5 && !custom) bigMax = totalSupply * 1.5;

    let data = [];
    let step = Math.round(bigMax / 100);
    let price = poolBalance / (reserveRatio * totalSupply);
    let currentPrice = { supply: totalSupply, value: price };

    for (let i = step; i < bigMax; i += step) {
      if (i < totalSupply) {
        let eth = 1 * calculateSaleReturn({ ...props, amount: totalSupply - i });
        price = (parseFloat(poolBalance, 10) - eth) / (reserveRatio * i);
        data.push({ supply: i, sell: price, value: price });
      } else if (i > totalSupply) {
        let eth = 1 * calculateBuyPrice({ ...props, amount: i - totalSupply });
        price = (eth + parseFloat(poolBalance, 10)) / (reserveRatio * i);
        data.push({ supply: 1 * i, buy: price, value: 1 * price });
      }
    }
    return { data, currentPrice };
  }


  render() {
    if (!this.documentReady) return null;
    let { data, currentPrice } = this.getChartData();
    let width = Math.min(600, (window.innerWidth < 480 ? window.innerWidth : 480) - 30);
    let height = width * 2 / 3;
    return (
      <div >
        <ComposedChart
          style={{ margin: 'auto' }}
          width={width}
          height={height}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="supply" type={'number'} />
          <YAxis dataKey="value" type={'number'} />
          <Tooltip/>

          <Area isAnimationActive={false} dots={false} stackOffset={'none'} dataKey="value" name={'price'} key={'price'} stroke='blue' fill='none'/>

          <Area isAnimationActive={false} stackOffset={'none'} dataKey="sell" stroke="blue" fill='blue' />

          <ReferenceDot
            isFront={true}
            x={currentPrice.supply}
            y={currentPrice.value}
            r={8}
            fill="blue"
            stroke="none"
          />

        </ComposedChart>
      </div>
    );
  }
}

export default CurveChart;
