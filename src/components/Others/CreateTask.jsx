import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        // Create the task within submitHandler to ensure it's available immediately
        const newTask = {
            taskTitle,
            taskDate,
            taskDescription,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        const updatedData = userData.map((elem) => {
            if (assignTo === elem.firstName) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                };
            }
            return elem;
        });

        setUserData(updatedData);  // Updates context and triggers localStorage update in AuthProvider

        // Clear form fields after submission
        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            type="text"
                            placeholder='Make a task'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none text-gray-300 bg-transparent border-gray-400 border-[1px]'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className=' mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            type="text"
                            placeholder='Employee Name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className=' mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            type="text"
                            placeholder='design, development, etc'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className=' w-full h-44 text-sm py-2 px-4 rounded border-gray-400 outline-none bg-transparent border-[1px]'
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className='bg-emerald-600 p-3 rounded-md mt-4 text-lg font-medium w-1/2'>Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
