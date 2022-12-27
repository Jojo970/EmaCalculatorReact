import React from 'react'

const HowTo = () => {


  return (
    <div className='howtopage'>
      <h1>What is the EMA Crossover Strategy?</h1>
      <div className='howtoparagraph'>

      <p>Understanding the EMA Crossover Strategy sounds pretty daunting if you're new to trading. In reality, its actually a pretty simple concept and even novices can pick it up quite quickly! But before we jump in, you have to understand what the EMA is.</p>
      <ul>
        <li><b>EMA</b> (Exponential Moving Average) - A moving average that places a greater significance on the most recent price points.<br></br> Ex. EMA 12 (daily data points) - Uses the 12 most recent days' price points to predict the price of the next day.<br></br> Ex. EMA 30 (4hr data points) - Uses the 30 most recent price points to predict the price of the next data point.</li>
      </ul>
      <p>Well now we have a good grasp of what the EMA is and what it might be used for. Now on to the good part. What is the EMA Crossover Strategy? It is a trading strategy that uses 2 EMA indicators at different data point lengths (i.e EMA 12 and EMA 50) and uses their "crossing points" to predict change in trends. The most conventional would be to buy a stock/crypto when the lower EMA crosses under the higher one. In our example, we would buy a stock/crypto when the price of the EMA 12 goes from being greater than the EMA 50 to then being less than the EMA 50. We would sell the stock/crypto on the inverse, when the price of the EMA 50 goes from being greater than the EMA 12 to then being less than the EMA 12.</p>
      <br></br>
      <p>For a more in depth article about the EMA Crossover, click this <a href= 'https://altfins.com/knowledge-base/ema-12-50-crossovers/' target='_blank' rel="noopener noreferrer">link</a>!</p>
      </div>
      </div>
      )
}

export default HowTo