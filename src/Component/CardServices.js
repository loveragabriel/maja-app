import React from 'react'
import { Link } from 'react-router-dom'


export const CardServices = () => {
  return (
    <div className='container mt-4 '>
      <div className=' text-center'>
        <hr></hr>
        <div>
          <h2 className='text-center mb-4 fs-2'>Tratamientos</h2>
        </div>
        <ul className='list-group list-unstyled tex-list'>
          <li ><Link className='text-decoration-none text-warning' to='Treatments'>Arreglos</Link></li>
          <li ><Link className='text-decoration-none text-warning' to='Treatments'>Caries</Link></li>
          <li ><Link className='text-decoration-none text-warning' to='Treatments'>Limpieza</Link></li>
          <li ><Link className='text-decoration-none text-warning' to='Treatments'>Prótesis</Link></li>
          <li ><Link className='text-decoration-none text-warning' to='Treatments'>Placas Miorrelajantes</Link></li>
        </ul>
      </div>
    </div>
  )
}