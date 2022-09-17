import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='about'>
      <NavBar></NavBar>
      <div className="container pt-3 position-relative opacity-100">
        <div className="text-center p-0  card border-light bg-secondary rounded  mh-100">
          <div className="profile-cover rounded-top "
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/21/23/42/globus-2876182_960_720.jpg")` }}>
          </div>
          <div className="pb-5 card-body">
            <img className="card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4 w-50" src='https://pps.whatsapp.net/v/t61.24694-24/300016067_1522642024844357_8603089966910915499_n.jpg?ccb=11-4&oh=01_AVx-Q7VjFXhS1oKIxzzoeEOpIosHH7yGZEMeDzBMiLru7w&oe=632D28E7' alt="Neil Portrait" />
            <div className="card-title h5">Maria Alejandra</div>
            <div className="fw-normal card-subtitle h6">Odontología General y Maxilofacial</div>
            <p className="text-gray mb-4 card-text">Buenos Aires, Argentina</p>
            <p>
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
