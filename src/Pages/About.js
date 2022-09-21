import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Link } from 'react-router-dom'
import maja2 from '../Multimedia/maja2.png'
import { PageTitles } from '../Component/PageTitles'

export const About = () => {
  return (
    <div className='about'>
      <NavBar></NavBar>
      <PageTitles title='Sobre Mi' />
      <div className="container pt-3 position-relative opacity-100">
        <div className="text-center p-10  card border-light opacity-80 rounded  mh-100">
          <div className="profile-cover rounded-top "
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/21/23/42/globus-2876182_960_720.jpg")` }}>
          </div>
          <div className="pb-5 card-body text-dark">
            <img className="card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4 w-70" src={maja2} alt="Neil Portrait" />
            <div className="card-title h1 mb-2 3">María Alejandra Tineo</div>
            <div className="fw-normal card-subtitle font-weight-bold">Odontología General y Disfunción Cráneo-Mandibular</div>
            <p className="text-gray mb-4 card-text">Buenos Aires, Argentina</p>
            <p className='text-spacing fs-6 about-text'>
              Odontóloga egresada de la Universidad Central de Venezuela con título convalidado en la universidad de La Plata. Me enfoco en una atención integral a mis pacientes en tratamientos como limpieza, arreglos de caries, prótesis y tratamiento de disfunción cráneo-mandibular.
            </p>
            <Link to='/Contact'><button type="button" className="btn btn-dark w-50 m-2">Contacto</button></Link>
          </div>
        </div>
      </div>
      <Up></Up>
    </div>
  )
}