import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext);
    console.log(authData.employees);

    return (
        <div id='allTask' className='bg-[#1c1c1c] mt-5 rounded p-5 h-48 overflow-auto'>

            <div className='bg-red-500 mb-2 flex justify-between rounded py-2 px-4'>
                <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
                <h3 className='w-1/5 bg-red-600 '>New Task</h3>
                <h5 className='w-1/5 bg-red-600'>Active Task</h5>
                <h5 className='w-1/5 bg-red-600'>Completed Task</h5>
                <h5 className='w-1/5 bg-red-600'>Failed Task</h5>
            </div>

            {authData.employees.map(function (elem) {
                return <div className='bg-red-500 mb-2 flex justify-between rounded py-2 px-4'>
                    <h2 className='w-1/5 bg-red-600'>{elem.firstName}</h2>
                    <h3 className='w-1/5 bg-red-600 '>task</h3>
                    <h5 className='w-1/5 bg-red-600'>Status</h5>
                    <h5 className='w-1/5 bg-red-600'>Status</h5>
                    <h5 className='w-1/5 bg-red-600'>Failed</h5>
                </div>
            })}
        </div>
    )
}

export default AllTask