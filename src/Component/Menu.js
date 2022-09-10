import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {  faBars } from '@fortawesome/free-solid-svg-icons'



export const Menu = () => {
  const [show,setShow] = useState(false);
  return (
    <div >
      <div id='menu-container' className='offcanvas offcanvas-start show w-50 bg-dark bg-gradient bg-opacity-80' >
        <ul className=' list-group list-unstyled p-10'>
        <li className='m-3'><Link className='text-decoration-none ' to='/'>Inicio</Link></li>
        <li className='m-3'><Link className='text-decoration-none' to='/Services'>Services</Link></li>
        <li className='m-3'><Link className='text-decoration-none' to='/About'>Sobre mi</Link></li>
        <li className='m-3'><Link className='text-decoration-none' to='/Contact'>Contacto</Link></li>
        </ul>
      </div>
    </div>
  )
}