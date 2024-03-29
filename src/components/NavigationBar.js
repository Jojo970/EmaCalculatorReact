import React, {useState} from 'react';
import {ReactComponent as MoonLogo} from '../images/moon.svg';
import {ReactComponent as HomeLogo} from '../images/home.svg';
import {ReactComponent as SunLogo} from '../images/sun.svg';
import {ReactComponent as QLogo} from '../images/question.svg';
import {ReactComponent as ProfileLogo} from '../images/profile.svg';


const DropItem = (props) => {

    return (
        <a href = "#" className = "drop-icon">
            {props.children}
        </a>
    )}
    




export const NavDrop = (props) => {

    return (
        <div className='dropdownmenu'>
            <DropItem icon = {<HomeLogo/>} />
            <DropItem icon = {<ProfileLogo/>} />
            <DropItem icon = {<QLogo/>} />

        </div>
    )
}

export const NavItem = (props) => {

    return (

        
        <li className='icon-item'>
            <a href = "#" className = "icon" onClick={() => props.setOpen(!props.open)}>
                {props.icon}
            </a>

            {props.open && props.children}
        </li>
    )
}

export const NavigationBar = (props) => {


    return(
        <>
        <nav className = "headNav">
            <ul className = "headNav-list"> {props.children} </ul>
        </nav>
        </>
    )

}
