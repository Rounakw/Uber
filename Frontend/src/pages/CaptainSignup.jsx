import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainSignup() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    });

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");

  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div><div className='flex gap-2'>
        <img className='w-7 mb-10' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="" />
        <img className='w-16 mb-10 object-contain' src="https://logodix.com/logo/54423.png" alt="" />
      </div>
        <form action="" onSubmit={submitHandler}>

          <h3 className='text-base font-medium mb-2'>What's our captain's name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder='First name' />

            <input
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base focus:outline-none'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder='Last name' />
          </div>

          <h3 className='text-base font-medium mb-2'>What's our captain's email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={email?.toLowerCase()}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='email@example.com' />
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='password'
          />


          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Sign up</button>
          <p className='text-center'>Already have an account? <Link to={"/captain-login"} className='text-blue-600 '>Login here</Link></p>

        </form>
      </div>
      <div>
        <Link to={"/signup"} className='bg-[#d5622d] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Signup as User</Link>
      </div>

    </div>
  )
}


export default CaptainSignup
