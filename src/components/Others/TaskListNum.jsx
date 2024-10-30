import React from 'react';

const TaskListNum = ({ data }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-5 mt-10'>
      <div className='w-full md:w-[45%] rounded-xl py-5 px-10 bg-purple-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-full md:w-[45%] rounded-xl py-5 px-10 bg-blue-600'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-full md:w-[45%] rounded-xl py-5 px-10 bg-yellow-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='w-full md:w-[45%] rounded-xl py-5 px-10 bg-green-600'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNum;
