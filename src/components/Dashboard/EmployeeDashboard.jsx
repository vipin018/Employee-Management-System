import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-4 md:p-6 lg:p-10 bg-[#1C1C1C] min-h-screen'>
    <Header changeUser={props.changeUser} data={props.data} />
    <div className="space-y-8 mt-6">
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
</div>
  )
}

export default EmployeeDashboard