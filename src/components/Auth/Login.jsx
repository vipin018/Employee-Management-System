import React, { useState } from 'react'

const Login = ({handleLogin}) => {

 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // two way binding
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);

        setEmail('');
        setPassword('');
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center p-4'>
        <div className="border-2 border-emerald-600 p-8 md:p-14 lg:p-20 rounded-xl w-full max-w-md bg-[#1c1c1c]">
            <form onSubmit={submitHandler} className='flex flex-col space-y-5'>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='border-2 border-emerald-600 text-white rounded-xl py-3 px-4 text-lg outline-none bg-transparent'
                    type="email"
                    placeholder='Enter Your Email'
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='border-2 border-emerald-600 text-white rounded-xl py-3 px-4 text-lg outline-none bg-transparent'
                    type="password"
                    placeholder='Enter Your Password'
                />
                <button className='border-none bg-emerald-600 rounded-xl py-3 px-5 text-lg font-semibold outline-none mt-5 hover:bg-emerald-700 transition-colors duration-300'>
                    Login
                </button>
            </form>
        </div>
    </div>
    )
}

export default Login