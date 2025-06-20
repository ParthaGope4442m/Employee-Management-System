import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const Authcontext =createContext()

const AuthProvider = ({children}) => {

    const [userdata, setUserdata] = useState(null)

    useEffect(() => {
        const{employees,admin} =getLocalStorage()
        setUserdata({employees,admin})
    },[]) 
    

  return ( 
    <div>
        <Authcontext.Provider value={userdata}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider