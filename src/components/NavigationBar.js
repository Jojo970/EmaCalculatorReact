import React, {useState} from 'react';



export const NavItem = (props) => {
    return (
        <li>
            <a href = "#" className = "icon">
                {props.icon}
            </a>
        </li>
    )
}


export const NavigationBar = (props) => {
    const [isClicked, setIsClicked] = useState(false)

    const toggleBar = () => {
        if(isClicked) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }


    return(
        <>
        <nav className = "headNav">
            <ul className = "headNav-list"> {props.children} </ul>
        </nav>
        </>
    )

}
