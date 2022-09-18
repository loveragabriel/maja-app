import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Form } from '../Component/Form'
import { Up } from '../Component/Up'
import { PageTitles } from '../Component/PageTitles'

export const Contact = () => {
  return (
    <div className='m-0 p-0'>
    <NavBar></NavBar>
    <PageTitles title='Enviame tu Consulta'/>
    <Form></Form>
    <Up></Up>
    </div>
  )
}
