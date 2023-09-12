import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './components/HomePage';
import MakeStrategy from './components/MakeStrategy';
import DisplayResults from './components/DisplayResults';
import HowTo from './components/HowTo';


// import { NavigationBar, NavItem, NavDrop, DropItem } from './components/NavigationBar';

import {useState} from 'react';
import {ReactComponent as MenuLogo} from './images/menu.svg';
import {ReactComponent as HomeLogo} from './images/home.svg';
import {ReactComponent as SunLogo} from './images/sun.svg';
import {ReactComponent as QLogo} from './images/question.svg';
import {ReactComponent as GithubLogo} from './images/github.svg';





function App() {
  const [emaOne, setEmaOne] = useState(null)
  const [emaTwo, setEmaTwo] = useState(null)
  const [theme, setTheme] = useState('light')
  const [buttonTheme, setButtonTheme] = useState('lightTheme')
  const [name, setName] = useState('BTC')
  const [fill, setFill] = useState('black')
  

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setButtonTheme('dark')
      setFill('lightgrey')
      } else {
      setTheme('light');
      setButtonTheme('lightTheme')
      setFill('black')
    }
  };


  return(
  <>
  <BrowserRouter>
  <NavigationBar>
    <NavItem fill = {fill} icon = {<MenuLogo fill = {fill} />}>
      <NavDrop fill = {fill} toggle = {toggleTheme}>
      </NavDrop>

    </NavItem>
  </NavigationBar>
    <div id={theme}>
    <div id = "togglebutton" onClick = {toggleTheme} className = {buttonTheme}><DropButton icon = {<SunLogo fill = {fill}/>}/></div>
      <Routes>
        <Route path = "/" element= {<HomePage theme = {theme}/>} />
        <Route path = "/howto" element= {<HowTo />} />
        <Route path = "/makestrategy" element= {<MakeStrategy setEmaOne = {setEmaOne} setEmaTwo = {setEmaTwo} name={name} setName={setName} theme = {theme}/>} />
        <Route path = "/displayresults" element = {<DisplayResults  emaOne = {emaOne} emaTwo = {emaTwo} name={name} theme = {theme}/>} />
      </Routes>

    </div>
  </BrowserRouter>
  </>
  )
}

const DropItem = (props) => {

  return (
      <NavLink to={props.toLink} className = "drop-icon">
          {props.icon}
      </NavLink>
  )}

  const DropExternal = (props) => {

    return (
        <a href='https://github.com/Jojo970/EmaCalculatorReact' target='_blank' rel="noopener noreferrer" className = "drop-icon">
            {props.icon}
        </a>
    )}

  
const DropButton = (props) => {

    return (
        <div className = "drop-icon-button">
            {props.icon}
        </div>
    )}



const NavDrop = (props) => {
  const toggleTheme = props.toggle
  return (
      <div className='dropdownmenu'>
          <DropItem icon = {<HomeLogo fill = {props.fill}/>} toLink = "/"/>
          <DropItem icon = {<QLogo fill = {props.fill}/>} toLink = "/howto"/>
          <DropExternal icon = {<GithubLogo fill = {props.fill}/>}/>
          

      </div>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false)

  return (

      
      <div className='icon-item'>
          <a href = "#" className = "icon" onClick={() => setOpen(!open)}>
              {props.icon}
          </a>

          {open && props.children}
      </div>
  )
}
const NavigationBar = (props) => {


  return(
      <>
      <nav className = "headNav">
          <div className = "headNav-list"> {props.children} </div>
      </nav>
      </>
  )

}

export default App;
