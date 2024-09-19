import React from 'react'
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    < Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout