import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form className='flex flex-wrap items-start w-full justify-between gap-6'> {/* Added gap here */}
      <div className='w-[40%]'> {/* Adjusted width for better spacing */}
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Enter Title Name' />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
          <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Employee Name' />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc.' />
        </div>
      </div>
      <div className='w-[40%] flex flex-col items-start'> {/* Adjusted width here as well */}
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea className='w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border border-gray-400 mb-4' placeholder='Enter task description'></textarea>
        <button className='bg-emerald-600 px-5 py-3 hover:bg-emerald-500 rounded text-sm mt-4 w-full'>Create Task</button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask