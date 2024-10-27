import React from 'react'

const CreateTask = () => {
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a task' />
                    </div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none text-gray-300 bg-transparent border-gray-400 border-[1px]' type="date" name="" id="" />
                    </div>
                    <div> <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input className=' mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' id="" />
                    </div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Company</h3>
                        <input className=' mb-4 text-sm py-1 px-2 w-2/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design, development, etc' id="" />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start '>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className=' w-full h-44 text-sm py-2 px-4 rounded border-gray-400 outline-none bg-transparent border-[1px]' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-600 p-3 rounded-md mt-4 text-lg font-medium w-1/2'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask