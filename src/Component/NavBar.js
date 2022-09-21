import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark  d-lg-block">
        <div class="container-fluid">
          <Link className='text-decoration-none text-white title-navbar' to='/'>Od. María Alejandra Tineo </Link>
          <button class="navbar-toggler fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <hr></hr>
              <li className='m-3'><Link className='text-decoration-none text-light ' to='/'>Inicio</Link></li>
              <li className='m-3'><Link className='text-decoration-none text-light' to='/Treatments'>Tratamientos</Link></li>
              <li className='m-3'><Link className='text-decoration-none text-light' to='/About'>¿Quién soy?</Link></li>
              <li className='m-3'><Link className='text-decoration-none text-light' to='/Contact'>Contactame</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
