import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { Authcontext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(Authcontext)
 
  
  const handleLogin = (email,password)=>{
     if(email == 'admin@me.com' && password=='123'){
      setUser('admin')
     }
     else if(authData && authData.employees.find((e) => email === e.email && password === e.password)) { 
      setUser('employee')
     }
     else{
      alert("invalid")
     }
  }



  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user == 'employee' ? <EmployeeDashboard/> :''}
    {user == 'admin' ? <AdminDashboard/> :''}
    </>
  )
}

export default App