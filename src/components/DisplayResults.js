import React, {useEffect, useState} from 'react';
import {getData, calculateYield} from '../getData';
import {useNavigate} from 'react-router-dom';
import Animation from './Animation';
import * as dfd from "danfojs";
<<<<<<< HEAD
=======

>>>>>>> 2043ca5de23e25ba1159a8e5f30ec458c431d6fa


const DisplayResults = ({emaOne, emaTwo, name, theme}) => {
  const [data, setData] = useState()
<<<<<<< HEAD
  const [tableTheme, setTableTheme] = useState('resultsTable')
  const [textTheme, setTextTheme] = useState('text')
  const [pageTheme, setPageTheme] = useState('wholeResultsPage')
=======
  const [numberofTrades, setNumberOfTrades] = useState(0)
  const [money, setMoney] = useState(10000)
  const [tableTheme, setTableTheme] = useState('resultsTable')
  const [textTheme, setTextTheme] = useState('text')
  const [pageTheme, setPageTheme] = useState('wholeResultsPage')

>>>>>>> 2043ca5de23e25ba1159a8e5f30ec458c431d6fa

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


      df.setIndex({column:"Date_Converted", inplace:true})

      let tradedf = df.dropNa()

      let percentageYield = calculateYield(tradedf["buy_Sell"], tradedf['Close'])

      tradedf.addColumn("Percent Yield", percentageYield, { inplace: true })


      setData(tradedf["$data"])
      setNumberOfTrades(data.length)
      setMoney(data[-1][-1] * money)
    }
    )
  }, [data])


  return (
    <div>
    <div className={pageTheme}>
      <h1 id = {textTheme}>
        Display Results for {name}/USDT YTD
      </h1>
    <div>
      <div>
        <p># of Trades</p>
        <p>{numberofTrades}</p>
      </div>
      <div>
        <p>Profit Calculator</p>
        <p>{money}</p>
      </div>
        <div className = "containerTable">
          {data ? (
            <table className={tableTheme} >
              <thead>
            <tr>
              <th>Trade Date</th>
              <th>Price</th>
              <th>Side (Buy/Sell)</th>
              <th>Percent Yield</th>
            </tr>
              </thead>
              <tbody>
                {
              data.map((d) => {
                return(
                  <tr>
                    <td key={d[8]}>{d[8]}</td>
                    <td key={d[1]}>${d[1]*1}</td>
                    <td id= {d[9]} key={d[9]}>{d[9]}</td>
                    <td key={d[10]}>{d[10]}%</td>
                  </tr>
                )
              })
            }
              </tbody>
            
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