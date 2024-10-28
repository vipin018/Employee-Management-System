import React from 'react'
import Header from '../Others/Header'
import TaskListNum from '../Others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {

    return (
        <div>
            <div className='p-10 bg-[#1C1C1C] h-screen  '>

                <Header data={data} />
                <TaskListNum data={data} />
                <TaskList data={data} />
            </div>
        </div>
    )
}

export default EmployeeDashboard