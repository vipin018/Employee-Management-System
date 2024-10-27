import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-5xl font-bold' >Vipin👋</span> </h1>
        <button className='bg-red-600 rounded-md py-3 px-4 font-semibold'>Logout</button>
    </div>
  )
}

export default Header