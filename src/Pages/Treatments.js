import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Up } from '../Component/Up'
import { Cards } from '../Component/Cards'
import { Footer } from '../Component/Footer'
import { PageTitles } from '../Component/PageTitles'

export const Treatments = () => {
  return (
    <div>
      <NavBar></NavBar>
      <PageTitles title='Tratamientos' />
      <Cards></Cards>
      <Up></Up>
      <Footer></Footer>
    </div>
  )
}
