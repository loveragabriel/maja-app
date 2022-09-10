import React from 'react'
import { NavBar } from '../Component/NavBar'
import { NavBar_ } from '../Component/NavBar_'
import { Up } from '../Component/Up'

export const About = () => {
  return (
    <div className='about'>
    <NavBar_></NavBar_>
    <h2>Dra. Maria Alejandra</h2>
    <img   src='https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_960_720.jpg' width='100vw'/>
    <p>
    If you know anyone who has studied to become a doctor, or if you watch TV shows that take place in medical settings, you’ve probably heard terms like "intern," "resident," or "attending." While they are all considered to be doctors, they have not all completed their medical training. Knowing the differences among them will help you determine their experience level, and whether they truly have enough experience to help you.
    </p>



    <Up></Up>
    </div>
  )
}
