import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {
  const [email, setEmal] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault()

    setUserData({ email, password })

    setEmal("")
    setPassword("")
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://logodix.com/logo/54423.png" alt="" />
        <form action="" onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input required className='bg-[#eeeeee] mb-7 rounded px-4  py-2 border w-full text-lg placeholder:text-base' value={email} onChange={(e) => setEmal(e.target.value)} type="email" placeholder='email@example.com' />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required className='bg-[#eeeeee] mb-7 rounded px-4  py-2 border w-full text-lg placeholder:text-base' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />

          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>New here? <Link to={"/signup"} className='text-blue-600 '>Create new Account</Link></p>

        </form>
      </div>
      <div>
        <Link to={"/captain-login"} className='bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>

    </div>
  )
}

export default UserLogin
