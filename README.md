# EMA Calculator

EMA Calculator is a web app built with React.js for backtesting EMA crossover strategy on cryptocurrencies.

## Try It

Go to this [link](https://ema-calculator.netlify.app) and click the EMA Crossover link. 

Pick a cryptocurrecny to test on the scrolldown.
Pick 2 EMA data lengths and enter them in. 

Press Calculate and watch the magic happen!.

## Installation

To run this application locally, follow the steps below.

1. Clone this repository
2. Open a terminal and run `npm i`
3. After all packages are installed, run `npm start`

## Built With / How it Works

Front End : React.js

Data Calculation : Danfo.js

Data is collected via API calls to a cryptocurrency exchange.

The API call retrieves data in the form of a JSON message.

The data is sent to a script that turns the incoming JSON message into a Danfo JS dataframe.

The script then iterates over the dataframe and finds points in time where trades may have occurred.

Based on those points in time, the script calculates your potential profits.

That data is sent over to the front end and displayed.

