import React from 'react';
const Recharts = require('recharts');
const {
  Area,
  // Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ReferenceDot,
  ComposedChart
} = Recharts;

class CurveChart extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }

  render () {
    if (!this.props.chartData) return;
    if (!this.props.documentReady) return;
    let { data, currentPrice } = this.props.chartData;
    let width = Math.min(600, (window.innerWidth < 480 ? window.innerWidth : 480) - 30);
    let height = width * 2/3;
    return (
      <div >
        <ComposedChart
          style={{margin:'auto'}}
          width={width}
          height={height}
          data={data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
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
            // label={'current price'}
            x={currentPrice.supply}
            y={currentPrice.value}
            r={8}
            fill="blue"
            stroke="none"
          />

        </ComposedChart>
      </div>
    )
  }
}

export default CurveChart;