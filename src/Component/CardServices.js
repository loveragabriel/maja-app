import React from 'react'
import { Link } from 'react-router-dom'


export const CardServices = () => {
  return (
    <div className='container mt-4 '>
        <div className=' text-center'>
        <hr></hr>
            <div>
                <h3 className='text-center mb-4 fs-2'>Tratamientos</h3>
            </div>
            <ul className='list-group list-unstyled tex-list'>
                <li ><Link className='text-decoration-none text-warning'  to='Services'>Limpieza</Link></li>
                <li ><Link className='text-decoration-none text-warning' to='Services'>Protesis</Link></li>
                <li ><Link className='text-decoration-none text-warning' to='Services'>Arreglos</Link></li>
                <li ><Link className='text-decoration-none text-warning' to='Services'>Conductos</Link></li>
            </ul>
        </div>
      
    </div>
  )
}