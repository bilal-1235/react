import React, { useEffect, useState } from 'react';
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import Admindashborad from './component/Dashboard/Admindashborad'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import AdminDashboard from './component/Dashboard/Admindashborad';

const App = () => {
    const [user, setUser] = useState(null)

    const handleLogin = (email,password)=> {
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin')

      }
      else if (email == 'user@me.com' && password == '123'){
        setUser ('employee')
      }
      else{
        alert ("Invaild Credentails")
      }
    }

   
  
    
  


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? < AdminDashboard /> : <EmployeeDashboard />}
    
    </>
  )
}

export default App