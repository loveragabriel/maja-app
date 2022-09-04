import React from 'react'
import { Footer } from '../Component/Footer'
import { Form } from '../Component/Form'
import { NavBar } from '../Component/NavBar'

export const Services = () => {
  return (
    <div>
    <NavBar></NavBar>
        <div className='Services-card'>
            <h3>Limpieza</h3>
            <img src='https://cdn.pixabay.com/photo/2022/08/19/21/15/dentist-7397734_960_720.jpg' alt='Limpienza dental'/>
            <p>Es una de las intervenciones más sencillas de cuantas se realizan en odontología y su objetivo es eliminar la placa bacteriana y el sarro acumulado en los dientes, la línea gingival y los espacios interdentales.
            </p>
        </div>
        <div className='Services-card'>
            <h3>Protesis</h3>
            <img src='https://cdn.pixabay.com/photo/2022/08/19/21/15/dentist-7397734_960_720.jpg' alt='Limpienza dental'/>
            <p>Es una de las intervenciones más sencillas de cuantas se realizan en odontología y su objetivo es eliminar la placa bacteriana y el sarro acumulado en los dientes, la línea gingival y los espacios interdentales.
            </p>
        </div>
        <div className='Services-card'>
            <h3>Arreglos Dentales</h3>
            <img src='https://cdn.pixabay.com/photo/2022/08/19/21/15/dentist-7397734_960_720.jpg' alt='Limpienza dental'/>
            <p>Es una de las intervenciones más sencillas de cuantas se realizan en odontología y su objetivo es eliminar la placa bacteriana y el sarro acumulado en los dientes, la línea gingival y los espacios interdentales.
            </p>
        </div>
        <Form></Form>
        <Footer></Footer>
    </div>
  )
}
