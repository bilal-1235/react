import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import about from '../Components/about/about.jsx'
import Home from '../Components/home/home.jsx'
import User from '../Components/User/User.jsx'
import Github from '../Components/Github/Github.jsx'
// const router  = createBrowserRouter ([
//   {
//     path: '/',
//     element: < Layout/>,
//     children:[{
//       path: "",
//       element: <Home/>
//     },
//     { 
//       path: "about",
//       element: <about/>
//     },
//   ]

    
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
   
 <Route path='/' element = {<Layout/>}>
    <Route path='' element = {<Home/>} />
    <Route path='about' element = {<about/>} />
    <Route path='about' element = {<about/>} />
    <Route path='Github' element = {<Github/>} />
    <Route path='User/:userid' element = {<User/>} />
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
