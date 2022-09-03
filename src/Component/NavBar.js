import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu'

export const NavBar = () => {

  const [displayMenu, setDisplayMenu] = useState(true)

  return (
    <div>
        <nav className='navigation-bar'>
        <div>
        <FontAwesomeIcon icon={faPhone} onClick={()=>{window.open('tel:+5491122501325')}} />
        </div>
        <div>
            <h1 className='title-name'>Dra. Maria Alejandra</h1>
            <p>Odontología General</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faBars} onClick={()=>{setDisplayMenu(!displayMenu)}}/>
        {!displayMenu && <Menu></Menu>}
        </div>

        </nav>
    </div>
  )
}
