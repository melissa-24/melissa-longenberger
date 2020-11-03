import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'


const NavOptions = (props) => {
    const {handleToggle, history} = props
    const [activeItem, setActiveItem] = useState('Home')

    const navOptions = [
        "Home",
        "Current Projects",
        "Past Projects",
        "Resume",
        "Contact Me"
    ]

    const handleClick = (e) => {
        handleToggle && handleToggle()

        let clickedNav = e.target.getAttribute("nav")
        setActiveItem(clickedNav)
        clickedNav === 'Home' ? history.push('/') : history.push(`${clickedNav}`)
    }

    return (
        navOptions.map(option => 
            <div className={"nav-option" + (activeItem === option ? " clicked" : '')}
            onClick={handleClick}
            nav={option}
            key={option}
            >
                {option}
            </div>
        )
    )
}

export default withRouter(NavOptions)