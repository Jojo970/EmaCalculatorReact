import React, {useEffect, useState} from 'react';
import {useNavigate, NavLink} from "react-router-dom";
import axios from 'axios';
import Animation from './Animation';


const MakeStrategy = ({setEmaOne, setEmaTwo, name, setName, theme}) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [divtheme, setdivtheme] = useState('setParams');
  const [pagetheme, setpagetheme] = useState('setParamsBackground');

  useEffect(() => {
    if(theme === 'dark') {
      setdivtheme('setParamsDark');
      setpagetheme('setParamsBackgroundDark')
      
    } else { setdivtheme('setParams')
    setpagetheme('setParamsBackground')
    }
  },[theme])


  useEffect(() => {
    axios.get("https://api.binance.us/api/v3/exchangeInfo")
    .then((res) => {
      let assets = res.data.symbols
      const assetToChoose = assets.filter(asset => asset.quoteAsset === "USDT")
      
      setList(assetToChoose)
    })
  },[])

  const strategyCalculate = () => {
    navigate('/displayresults')
  }



  return (
    <>
    <div className={pagetheme}>
      <div className='blockThing'> </div>
      <p>WARNING! THIS IS A BACKTEST<br></br> RESULTS OF TEST MAY NOT REFLECT REAL TIME TRADING</p>
      <div className='howtoLink'>
        <NavLink to= "/howto">How to Use</NavLink>
      </div>
    <form onSubmit={strategyCalculate} className={divtheme}>

      <label>Base Asset</label>
      <select className='input' value={name} name = "cryptoName" onChange={(e) => setName(e.target.value)}>
                {list.map((asset) => {
                    return(
                        <option key = {asset.baseAsset}>{asset.baseAsset}</option>
                    )
                })}
            </select>

      <label>EMA 1</label>
      <input type= 'number' onChange= {(e) => {setEmaOne(e.target.value)}} required/>

      <label>EMA 2</label>
      <input type= 'number' onChange= {(e) => {setEmaTwo(e.target.value)}} required/>

      <button>Calculate</button>

    </form>
    <p>All data is retrieved from Binance.us API.<br></br>
    Prices are retrieved as daily prices.<br></br>
    Reflects data from past 1 year or amount <br></br>
    of time that the coin has been on Binance.<br></br>
    </p>
    <div className='blockThing'> </div>
    
    </div>
    <Animation/>
    </>
  )
}

export default MakeStrategy