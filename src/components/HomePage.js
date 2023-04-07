import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Animation from './Animation';

const HomePage = ({theme}) => {
  const [divtheme, setdivtheme] = useState('linksToStrategies')
  const [textTheme, setTextTheme] = useState('text')
  const [animationStyle, setAnimationStyle] = useState(false)

  useEffect(() => {
    if(theme === 'dark') {
      setdivtheme('linksToStrategiesDark')
      setTextTheme('text_dark')
      setAnimationStyle(true)
    } else { setdivtheme('linksToStrategies')
  setTextTheme('text')
  setAnimationStyle(false)}
  },[theme])

  return (
    <>
    <div className='homepage'>
      <h1 id = {textTheme}>
      Strategy Profit Calculator
      </h1>
    <div className={divtheme}>
      <div>
        <NavLink to= "/makestrategy">
        EMA Crossover
        </NavLink>
      </div>
    </div>
    
    <Animation/>
      </div>
    </>
  )
}

export default HomePage