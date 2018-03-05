import React from 'react';

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
  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }
  componentDidMount() {
    this.documentReady = true;
    this.forceUpdate();
  }

  getChartData(props) {
    let data = [];
    let { totalSupply, ratio, balance } = props;
    let step = Math.round(totalSupply / 100);
    let price = balance / (ratio * totalSupply);
    let currentPrice = { supply: totalSupply, value: price };

    for (let i = step; i < totalSupply * 1.5; i += step) {
      if (i < totalSupply) {
        let eth = 1 * this.props.calculateSaleReturn({ ...props, amount: totalSupply - i });
        price = (parseFloat(balance, 10) - eth) / (ratio * i);
        data.push({ supply: i, sell: price, value: price });
      } else if (i > totalSupply) {
        let eth = 1 * this.props.calculateBuyPrice({ ...props, amount: i - totalSupply });
        price = (eth + parseFloat(balance, 10)) / (ratio * i);
        data.push({ supply: 1 * i, buy: price, value: 1 * price });
      }
    }
    return { data, currentPrice };
  }


  render() {
    if (!this.documentReady) return null;
    let { data, currentPrice } = this.getChartData(this.props);
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
            alwaysShow={true}
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
