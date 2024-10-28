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
        <div className='flex h-screen w-screen items-center justify-center' >
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required className='border-2 border-emerald-600 text-white rounded-2xl py-4 px-5 text-xl  outline-none bg-transparent' type="email" placeholder='Enter Your Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required className='border-2 border-emerald-600 text-white rounded-2xl py-4 px-5 text-xl  outline-none mt-5 bg-transparent' type="password" placeholder='Enter Your Password' />
                    <button className='border-none bg-emerald-600 rounded-3xl py-4 px-5 text-xl outline-none mt-10 ' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login