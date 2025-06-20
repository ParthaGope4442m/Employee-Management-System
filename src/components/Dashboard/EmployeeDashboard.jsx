import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-8 bg-[#222222] h-screen'>
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard