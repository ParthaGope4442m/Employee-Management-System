import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='px-10 py-5 w-[45%] bg-red-300 rounded-2xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-1xl font-medium'>New Task</h3>
        </div>
        <div className='px-10 py-5 w-[45%] bg-blue-300 rounded-2xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-1xl font-medium'>New Task</h3>
        </div>
        <div className='px-10 py-5 w-[45%] bg-yellow-300 rounded-2xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-1xl font-medium'>New Task</h3>
        </div>
        <div className='px-10 py-5 w-[45%] bg-green-300 rounded-2xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-1xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers