import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export const Menu = () => {
  return (
    <div>
        <div className='menu-container'>
            <ul>
            <li>Inicio</li>                <li>Sobre mi</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>

        </div>
    </div>
  )
}