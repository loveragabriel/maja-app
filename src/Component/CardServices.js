import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const CardServices = () => {
  return (
    <div>
        <div className='card-container'>
            <div>
                Información adicional
            </div>
            <ul>
                <Link to='Services'>Linmpieza</Link>
                <li>Protesis</li>
                <li>Arreglos</li>
                <li>Protesis</li>
                <li>Protesis</li>
            </ul>
        </div>
    </div>
  )
}