import React, {useEffect, useState} from 'react';
import {getData, calculateYield} from '../getData';
import {useNavigate} from 'react-router-dom';
import Animation from './Animation';
import * as dfd from "danfojs";


const DisplayResults = ({emaOne, emaTwo, name, theme}) => {
  const [data, setData] = useState()
  const [tableTheme, setTableTheme] = useState('resultsTable')
  const [textTheme, setTextTheme] = useState('text')
  const [pageTheme, setPageTheme] = useState('wholeResultsPage')

  useEffect(() => {
    if(theme === 'dark') {
      setTableTheme('resultsTableDark');
      setPageTheme('wholeResultsPageDark');
      setTextTheme('text_dark');
    } else { setTableTheme('resultsTable');
    setPageTheme('wholeResultsPage');
    setTextTheme('text');}
  },[theme])



  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }


  useEffect(() => {
    
    getData(emaOne, emaTwo, name).then(res => {

      let df = new dfd.DataFrame(res, {columns:['Date','Open','High', 'Low', 'Close', 'EMA_Difference', 'EMA_1', 'EMA_2', "Date_Converted", "buy_Sell"]})

      const chartData = {
        'Date': df["Date_Converted"]["$data"],
        'Open': df["Open"]["$data"],
        'High': df["High"]["$data"],
        'Low': df["Low"]["$data"],
        'Close': df["Close"]["$data"],
      }

      let chartDf = new dfd.DataFrame(chartData)

      const chartMaker = chartDf['$data']
      setChartDataSet(chartMaker)


      df.setIndex({column:"Date_Converted", inplace:true})

      let tradedf = df.dropNa()

      let percentageYield = calculateYield(tradedf["buy_Sell"], tradedf['Close'])

      tradedf.addColumn("Percent Yield", percentageYield, { inplace: true })

      setData(tradedf["$data"])

    }
    )
  }, [])

  return (
    <div>
    <div className={pageTheme}>
      <h1 id = {textTheme}>
        Display Results for {name}/USDT YTD
      </h1>
    <div>
        <div className = "containerTable">
          <h3 id = {textTheme}>Trade Details</h3>
          {data ? (
            <table className={tableTheme} >
            <tr>
              <th>Trade Date</th>
              <th>Price</th>
              <th>Side (Buy/Sell)</th>
              <th>Percent Yield</th>
            </tr>
            {
              data.map((d) => {
                return(
                  <tr>
                    <td key={d[7]}>{d[7]}</td>
                    <td key={d[0]}>${d[0]*1}</td>
                    <td id= {d[6]} key={d[6]}>{d[6]}</td>
                    <td key={d[8]}>{d[8]}%</td>
                  </tr>
                )
              })
            }
          </table>
          ) : (<div> </div>) }
        </div>
        <button onClick={goHome}>Go Home</button>
    </div>
          </div>

          <Animation/>
    </div>
  )
}

export default DisplayResults