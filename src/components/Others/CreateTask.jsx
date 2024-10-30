import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        // Create the task within submitHandler to ensure it's available immediately
        setNewTask({
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        })

        const data = userData

        data.forEach(function (elem) {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData(data)
        console.log(data);

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
        {/* Left Column */}
        <div className='w-full md:w-1/2 mb-6 md:mb-0'>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                <input
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className='mb-4 text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400'
                    type="text"
                    placeholder='Make a task'
                />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                <input
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    className='mb-4 text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 text-gray-300'
                    type="date"
                />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Assign To</h3>
                <input
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    className='mb-4 text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400'
                    type="text"
                    placeholder='Employee Name'
                />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='mb-4 text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400'
                    type="text"
                    placeholder='design, development, etc'
                />
            </div>
        </div>

        {/* Right Column */}
        <div className='w-full md:w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
            <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className='w-full h-40 text-sm py-2 px-3 rounded border border-gray-400 outline-none bg-transparent'
                cols="30"
                rows="10"
            ></textarea>
            <button className='bg-emerald-600 py-3 px-4 rounded-md mt-4 text-lg font-medium w-full md:w-3/5'>
                Create Task
            </button>
        </div>
    </form>
</div>

    );
};

export default CreateTask;
