import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from  './Pages/about';
import Home from './Pages/Home';
import Header from './Pages/Header';
const App = () => {
  
  Routes
  return (
    <div>
      <Header/>
      <Routes>
      <Route path ='/' element = {< Home/>} />

        <Route path ='/about' element = {< About/>} />
 
      </Routes>
    </div>
  )
}

export default App