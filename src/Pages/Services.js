import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Cards } from '../Component/Cards'
import { Footer } from '../Component/Footer'

export const Services = () => {
  return (
    <div>
    <NavBar></NavBar>
    <h3 className='text-center m-4 h-100'>Tratamientos</h3>
        <Cards></Cards>
        <Up></Up>
        <Footer></Footer>
    </div>
  )
}
