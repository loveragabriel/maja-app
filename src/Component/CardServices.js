import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const CardServices = () => {
  return (
    <div className='container mt-4 '>
        <div className=' text-center'>
            <div>
                <h3 className='fs-2'>Tramientos y Especializadades</h3>
            </div>
            <ul className='list-group list-unstyled'>
                <li ><Link className='text-decoration-none'  to='Services'>Limpieza</Link></li>
                <li ><Link className='text-decoration-none' to='Services'>Protesis</Link></li>
                <li ><Link className='text-decoration-none' to='Services'>Arreglos</Link></li>
                <li ><Link className='text-decoration-none' to='Services'>Conductos</Link></li>
                <li ><Link className='text-decoration-none' to='Services'>Linmpieza</Link></li>
            </ul>
        </div>
    </div>
  )
}