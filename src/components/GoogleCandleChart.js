import React from 'react';
import { Chart } from "react-google-charts";

export const options = {
  legend: "none",
  animation:{
    duration: 1500,
    easing: 'linear',
    startup: true
  },
};

const GoogleCandleChart = ({data}) => {
  return (
    <>
    <Chart 
        width={'100%'}
        height={450}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}

    />
    </>
  )
}

export default GoogleCandleChart