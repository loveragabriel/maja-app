import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'



export const Menu = () => {
  return (
    <div>
      <div id='menu-container'>
        <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/Services'>Services</Link></li>
        <li><Link to='/About'>Sobre mi</Link></li>
        <li><Link to='/Contact'>Contacto</Link></li>
        </ul>
      </div>
    </div>
  )
}