import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData] = useContext(AuthContext);

    return (
        <div id='allTask' className='bg-[#1c1c1c] mt-5 rounded p-5'>

            <div className='bg-emerald-500 mb-4 flex justify-between rounded py-2 px-4 text-sm md:text-base lg:text-lg'>
                <h3 className='w-1/5 font-medium'>Employee Name</h3>
                <h2 className='w-1/5 font-medium'>Active Task</h2>
                <h5 className='w-1/5 font-medium'>New Task</h5>
                <h5 className='w-1/5 font-medium'>Completed Task</h5>
                <h5 className='w-1/5 font-medium'>Failed Task</h5>
            </div>

            <div id='random' className='h-[80%] space-y-3'>
                {userData.map((elem, key) => (
                    <div key={key} className='flex flex-col md:flex-row justify-between items-center md:items-start p-3 border border-emerald-500 rounded-md space-y-2 md:space-y-0'>
                        <h2 className='w-full md:w-1/5 text-center md:text-left'>{elem.firstName}</h2>
                        <h3 className='w-full md:w-1/5 text-yellow-300 text-center md:text-left'>{elem.taskCounts.active}</h3>
                        <h5 className='w-full md:w-1/5 text-sky-400 text-center md:text-left'>{elem.taskCounts.newTask}</h5>
                        <h5 className='w-full md:w-1/5 text-green-500 text-center md:text-left'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-full md:w-1/5 text-red-600 text-center md:text-left'>{elem.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
