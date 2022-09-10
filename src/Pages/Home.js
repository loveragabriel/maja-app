import React from 'react'
import { NavBar } from '../Component/NavBar'
import { PrincipalImg } from '../Component/PrincipalImg'
import { Profile } from '../Component/Profile'
import { Footer } from '../Component/Footer'
import { ProfileDescription } from '../Component/ProfileDescription'
import { Form } from '../Component/Form'
import { CardServices } from '../Component/CardServices'
import { Up } from '../Component/Up'
import { Carrusel } from '../Component/Carrusel'
export const Home = () => {
  return (
    <div>
  <NavBar></NavBar>
        {/* <NavBar></NavBar> */}
        <Profile></Profile>
        <ProfileDescription></ProfileDescription>
        <Carrusel></Carrusel>
        <CardServices></CardServices>
        <Footer></Footer>
        <Up></Up>
        
    </div>
  )
}
