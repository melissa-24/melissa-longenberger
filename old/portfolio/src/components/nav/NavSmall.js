import React, { useState } from 'react'

import NavOptions from './NavOptions'

const NavSmall = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className='nav-small'>
            <button className='button' onClick={handleToggle}>
                Menu
            </button>
            {toggleMenu ? <NavOptions handleToggle={handleToggle} /> : ""}
        </nav>
    )
}

export default NavSmall