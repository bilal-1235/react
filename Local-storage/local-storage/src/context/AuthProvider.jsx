import React, { createContext,useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const  [userData, setUserData] = useState(null)

    const data = getLocalStorage()
    console.log(data.employees)



  return (
    <div>
        <AuthContext.Provider value={"Bilal"} >
            {children}

        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider