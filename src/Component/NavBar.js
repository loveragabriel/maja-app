import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu';
import { Link } from 'react-router-dom';

export const NavBar = () => {

   const [show,setShow] = useState(false);

  return (
    <div>
          <nav class="navbar navbar-expand-lg bg-dark  d-lg-block">
  <div class="container-fluid">
    <Link  className='text-decoration-none' to='/'>Dra. Maria Alejandra </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

      <li className='m-3'><Link className='text-decoration-none ' to='/'>Inicio</Link></li>
        <li className='m-3'><Link className='text-decoration-none' to='/Services'>Services</Link></li>
        <li className='m-3'><Link className='text-decoration-none' to='/About'>Sobre mi</Link></li>
        <li className='m-3'><Link className='text-decoration-none' to='/Contact'>Contacto</Link></li>
        
  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
