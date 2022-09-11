import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <div>
          <nav class="navbar navbar-expand-lg bg-secondary  d-lg-block">
  <div class="container-fluid">
    <Link  className='text-decoration-none text-dark ' to='/'>Dra. Maria Alejandra </Link>
    <button class="navbar-toggler  text-light" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

      <li className='m-3'><Link className='text-decoration-none text-dark ' to='/'>Inicio</Link></li>
        <li className='m-3'><Link className='text-decoration-none text-dark' to='/Services'>Services</Link></li>
        <li className='m-3'><Link className='text-decoration-none text-dark' to='/About'>Sobre mi</Link></li>
        <li className='m-3'><Link className='text-decoration-none text-dark' to='/Contact'>Contacto</Link></li>
        
  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
