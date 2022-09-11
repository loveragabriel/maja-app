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
    <h3 className='text-center m-4'>Servicios</h3>
        <Cards></Cards>
        <Footer></Footer>
        <Up></Up>
  
    </div>
  )
}
