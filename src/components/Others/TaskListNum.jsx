import React from 'react'

const TaskListNum = () => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
<div className='w-[45%] rounded-xl py-5 px-10 bg-purple-500'>

<h2 className='text-3xl font-semibold' >0</h2>
<h3 className='text-xl font-medium'>New Task</h3>

</div>
<div className='w-[45%] rounded-xl py-5 px-10 bg-blue-600'>

<h2 className='text-3xl font-semibold' >0</h2>
<h3 className='text-xl font-medium'>New Task</h3>

</div>
<div className='w-[45%] rounded-xl py-5 px-10 bg-yellow-500'>

<h2 className='text-3xl font-semibold' >0</h2>
<h3 className='text-xl font-medium'>New Task</h3>

</div>
<div className='w-[45%] rounded-xl py-5 px-10 bg-green-600'>

<h2 className='text-3xl font-semibold' >0</h2>
<h3 className='text-xl font-medium'>New Task</h3>

</div>
    </div>
  )
}

export default TaskListNum