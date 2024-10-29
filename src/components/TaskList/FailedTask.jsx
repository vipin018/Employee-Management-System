import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className=' flex-shrink-0 h-full p-5 w-[350px] bg-[#edd224] rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-4 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold' >{data.title}</h2>
            <p className='text-[12px] mt-5'>{data.description}</p>
            <div className='mt-4 '>
                <button className='bg-red-600 p-2 font-medium text-sm rounded w-full' >Failed</button>


            </div>
        </div>
    )
}

export default FailedTask