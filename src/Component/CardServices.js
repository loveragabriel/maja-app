import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const CardServices = () => {
  return (
    <div className='service-component'>
        <div className='card-container'>
            <div>
                <h3>Detalle de mis especializadas</h3>
            </div>
            <ul>
                <li><Link to='Services'>Limpieza</Link></li>
                <li><Link to='Services'>Protesis</Link></li>
                <li><Link to='Services'>Arreglos</Link></li>
                <li><Link to='Services'>Conductos</Link></li>
                <li><Link to='Services'>Linmpieza</Link></li>
            </ul>
        </div>
    </div>
  )
}