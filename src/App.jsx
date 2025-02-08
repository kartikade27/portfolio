import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Project from './components/Project'
import Skills from './components/Skills'
import Education from './components/Education'
import Contcat from './components/Contcat'
import Footer from './components/Footer'





const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Education />
      <Project />
      <Skills />
      <Contcat/>
      <Footer/>

    </>
  )
}

export default App