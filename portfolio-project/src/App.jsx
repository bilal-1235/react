import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import  Mywork  from './Component/MyWork/Mywork'
import Contact from './Component/Contact/Contact'

const  App=()=> {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    </div>
    
  )
}

export default App