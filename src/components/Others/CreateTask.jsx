import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form className="flex flex-nowrap w-full mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-md">
            <div className="w-full md:w-1/2 space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Task Title</label>
            < input
                type="text" placeholder="Make a..." 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                <input type="date"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Assign To</label>
                <input type="text" placeholder="Employee Name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <input type="text" placeholder="Design, Dev, etc."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"/>
            </div>
            </div>
        <div className='w-1/2 px-5'>
        <div className="w-full md:w-full flex flex-col">
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea placeholder="Task details..."
                className="w-full h-56.5 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400">
            </textarea>
            </div>
            <div className="w-full">
                <button type="submit" className="px-6  mt-5 py-2 md:w-full bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">Create Task</button>
            </div>
        </div>
  
  
</form>

        </div>
  )
}

export default CreateTask