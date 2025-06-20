import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import Alltask from '../Others/Alltask'

const AdminDashboard = () => {
  return (
    <div className='p-8 bg-[#222222] h-screen'>
        <Header/>
        <CreateTask/>
        <Alltask/>
    </div>
  )
}

export default AdminDashboard