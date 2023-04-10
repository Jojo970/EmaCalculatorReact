import React from 'react';
import { Chart } from "react-google-charts";

export const options = {
    legend: "none",
  };

const GoogleCandleChart = (data) => {
  return (
    <>
    <Chart 
        width={'100%'}
        height={450}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
        legend: 'none',
        }}
    />
    </>
  )
}

export default GoogleCandleChart