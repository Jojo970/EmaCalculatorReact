import React, {useEffect, useState} from 'react';
import {getData, convertTime, calculateYield} from '../getData';
import {useNavigate} from 'react-router-dom';
import Animation from './Animation';
import * as dfd from "danfojs";


const DisplayResults = ({emaOne, emaTwo, name, theme}) => {
  const [data, setData] = useState()

  const [tableTheme, setTableTheme] = useState('resultsTable')
  const [textTheme, setTextTheme] = useState('text')
  const [plotTheme, setPlotTheme] = useState('plot_div')
  const [pageTheme, setPageTheme] = useState('wholeResultsPage')

  useEffect(() => {
    if(theme === 'dark') {
      setTableTheme('resultsTableDark');
      setPageTheme('wholeResultsPageDark');
      setPlotTheme('plot_div_dark');
      setTextTheme('text_dark');
    } else { setTableTheme('resultsTable');
    setPageTheme('wholeResultsPage');
    setPlotTheme('plot_dive');
    setTextTheme('text');}
  },[theme])



  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }


  useEffect(() => {
    
    getData(emaOne, emaTwo, name).then(res => {

      let df = new dfd.DataFrame(res, {columns:['Open','High', 'Low', 'Close', 'Date','EMA_Difference', 'EMA_1', 'EMA_2',"buy_Sell"]})

      console.log(df)

      let timeSeries = convertTime(df['Date'])
      
      console.log(timeSeries.length)
      df.addColumn("newDate", timeSeries, { inplace: true })
      df.setIndex({column:"newDate", inplace:true})

      let tradedf = df.dropNa()

      let percentageYield = calculateYield(tradedf["buy_Sell"], tradedf['Close'])
      tradedf.addColumn("Percent Yield", percentageYield, { inplace: true })

      setData(tradedf["$data"])
      const layout = {
        title: "",
        xaxis: {
          title: "",
        },
        yaxis: {
          title: "Value in USD",
        },
        width: 1000,
      };

      const config = {
        columns: ["Close", "EMA_1", "EMA_2"],
      };

      df.plot('plot_div').line({ config, layout });
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
      <div id = "containPlot">

        <div id = {plotTheme}>
          <div id = "plot_div"></div>
        </div>
    </div>
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