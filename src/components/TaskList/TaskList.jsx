import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

    return (
        <div id='taskList' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap overflow-x-auto  w-full py-5 mt-10' >
            {data.tasks.map((elem, key) => {
                if (elem.active) {
                    return <AcceptTask key={key} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={key} data={elem} />
                }
                if (elem.CompleteTask) {
                    return <CompleteTask key={key} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={key} data={elem} />
                }
            })}
        </div>
    )
}

export default TaskList