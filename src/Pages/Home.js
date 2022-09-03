import React from 'react'
import { NavBar } from '../Component/NavBar'
import { PrincipalImg } from '../Component/PrincipalImg'
import { Profile } from '../Component/Profile'
import { Footer } from '../Component/Footer'
import { ProfileDescription } from '../Component/ProfileDescription'
import { Form } from '../Component/Form'
import { CardServices } from '../Component/CardServices'
export const Home = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Profile></Profile>
        <ProfileDescription></ProfileDescription>
        <PrincipalImg></PrincipalImg>
        <CardServices></CardServices>
        <Form></Form>
        <Footer></Footer>
        
    </div>
  )
}
