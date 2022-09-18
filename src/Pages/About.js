import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Link } from 'react-router-dom'
import maja2 from '../Multimedia/maja1.png'

export const About = () => {
  return (
    <div className='about'>
      <NavBar></NavBar>
      <div className="container pt-3 position-relative opacity-100">
        <div className="text-center p-10  card border-light bg-secondary rounded  mh-100">
          <div className="profile-cover rounded-top "
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/21/23/42/globus-2876182_960_720.jpg")` }}>
          </div>
          <div className="pb-5 card-body text-dark">
            <img className="card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4 w-50" src={maja2} alt="Neil Portrait" />
            <div className="card-title h1">Maria Alejandra</div>
            <div className="fw-normal card-subtitle h3">Odontología General y Maxilofacial</div>
            <p className="text-gray mb-4 card-text h4">Buenos Aires, Argentina</p>
            <p className='p-20'>
              Odontologa egresada de la Universidad Central de Venezuela. Mi primeros años de carreras los desempeñé realizando trabajos de asistencias y atención en la Ciudad de Buenos Aires. Matriculada para ejercer en la Ciudad Autonoma de Buenos Aires, vengo realizando tratamientos de Odontología General para mejorar la salud bucal de mis pacientes.
            </p>
            <Link to='/Contact'><button type="button" className="btn btn-dark w-50 m-2">Contacto</button></Link>
          </div>
        </div>
      </div>
      <Up></Up>
    </div>
  )
}
