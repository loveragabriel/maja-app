import React from 'react'
import { Footer } from '../Component/Footer'
import { Form } from '../Component/Form'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Cards } from '../Component/Cards'

export const Services = () => {
  return (
    <div>
    <NavBar></NavBar>

    <h3 className='services-title'>Servicios</h3>
        <Cards></Cards>
        <Form></Form>
        <Footer></Footer>
        <Up></Up>
  
    </div>
  )
}
