import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-full min-h-screen w-full p-4 md:p-6 lg:p-10 bg-[#1C1C1C]'>
        <Header changeUser={props.changeUser} />
        <div className="space-y-8 mt-6">
            <CreateTask />
            <AllTask />
        </div>
    </div>
    )
}

export default AdminDashboard