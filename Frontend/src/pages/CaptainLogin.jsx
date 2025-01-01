import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CaptainLogin() {
    const [email, setEmal] = useState("")
    const [password, setPassword] = useState("")
    const [captainData, setCaptainData] = useState({});
    const submitHandler = (e) => {
        e.preventDefault()

        setCaptainData({ email, password })

        setEmal("")
        setPassword("")
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <div className='flex gap-2'>
                    <img className='w-7 mb-10' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="" />
                    <img className='w-16 mb-10 object-contain' src="https://logodix.com/logo/54423.png" alt="" />
                </div>
                <form action="" onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>

                    <input
                        required
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
                        value={email}
                        onChange={(e) => setEmal(e.target.value)}
                        type="email"
                        placeholder='email@example.com' />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='password'
                    />


                    <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Login</button>
                    <p className='text-center'>Join a fleet? <Link to={"/captain-signup"} className='text-blue-600 '>Register as a Captain</Link></p>

                </form>
            </div>
            <div>
                <Link to={"/login"} className='bg-[#d5622d] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Login as User</Link>
            </div>

        </div>
    )
}

export default CaptainLogin
