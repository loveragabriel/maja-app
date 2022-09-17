import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Cards } from '../Component/Cards'

export const Services = () => {
  return (
    <div>
    <NavBar></NavBar>
    <h3 className='text-center m-4'>Tratamientos</h3>
        <Cards></Cards>
        <Up></Up>
    </div>
  )
}
