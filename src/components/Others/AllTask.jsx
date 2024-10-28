import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {


    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div id='allTask' className='bg-[#1c1c1c] mt-5 rounded p-5 '>

            <div className='bg-emerald-500 mb-2 flex justify-between rounded py-2 px-4'>
                <h3 className='w-1/5 font-medium text-lg '>Employee Name</h3>
                <h2 className='w-1/5 font-medium text-lg '>Active Task</h2>
                <h5 className='w-1/5 font-medium text-lg '>New Task</h5>
                <h5 className='w-1/5 font-medium text-lg '>Completed Task</h5>
                <h5 className='w-1/5 font-medium text-lg '>Failed Task</h5>
            </div>
            <div id='random' className='h-[80%]'>
                {userData.map(function (elem, key) {
                    return <div key={key} className=' mb-2 flex justify-between py-2 px-4 border-[1px] border-emerald-500 rounded-md'>
                        <h2 className='w-1/5'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-yellow-300 '>{elem.taskCounts.active}</h3>
                        <h5 className='w-1/5 text-sky-400'>{elem.taskCounts.newTask}</h5>
                        <h5 className='w-1/5 text-green-500'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask