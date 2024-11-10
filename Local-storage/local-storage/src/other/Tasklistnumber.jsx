import React from 'react'

const Tasklistnumber = () => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className=' px-9 py-6 w-[45%] rounded-xl h-40 w-1/2 bg-red-400'>
        <h2 className=' text-3xl font-semibold p-5'>0</h2>
        <h3 className=' text-xl font-medium '>New Task</h3>
        </div>
        <div className=' px-9 py-6 w-[45%] rounded-xl h-40 w-1/2 bg-blue-400'>
        <h2 className=' text-3xl font-semibold p-5'>0</h2>
        <h3 className=' text-xl font-medium '>New Task</h3>
        </div>
        <div className=' px-9 py-6 w-[45%] rounded-xl h-40 w-1/2 bg-green-400'>
        <h2 className=' text-3xl font-semibold p-5'>0</h2>
        <h3 className=' text-xl font-medium '>New Task</h3>
        </div><div className=' px-9 py-6 w-[45%] rounded-xl h-40 w-1/2 bg-yellow-400'>
        <h2 className=' text-3xl font-semibold p-5'>0</h2>
        <h3 className=' text-xl font-medium '>New Task</h3>
        </div>
        
    </div>
  )
}

export default Tasklistnumber