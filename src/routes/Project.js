import React from 'react'

import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "Projects" text = "Check out the projects I've worked on!"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects