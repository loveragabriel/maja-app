import React from 'react'
import { NavBar } from '../Component/NavBar'
import { PrincipalImg } from '../Component/PrincipalImg'
import { Profile } from '../Component/Profile'
import { Footer } from '../Component/Footer'
export const Home = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Profile></Profile>
        <PrincipalImg></PrincipalImg>
        
        <Footer></Footer>
    </div>
  )
}
