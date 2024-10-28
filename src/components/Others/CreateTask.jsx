import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')


    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({
            taskTitle,
            taskDate,
            taskDescription,
            category,
            active: false,
            newtask: true,
            failed: false,
            completed: false
        })

        const data = userData
        console.log();

        data.forEach((elem) => {
            if (assignTo === elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
            }
        });

        setUserData(data);
        console.log(data)

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }} className='mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a task' />
                    </div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }} className='mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none text-gray-300 bg-transparent border-gray-400 border-[1px]' type="date" name="" id="" />
                    </div>
                    <div> <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }} className=' mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' id="" />
                    </div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} className=' mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design, development, etc' id="" />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start '>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className=' w-full h-44 text-sm py-2 px-4 rounded border-gray-400 outline-none bg-transparent border-[1px]' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-600 p-3 rounded-md mt-4 text-lg font-medium w-1/2'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask