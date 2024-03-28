import React, { useState } from 'react'

const Register = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    console.log(name, password)
  return (
    <div className='bg-blue-200 h-screen '>
      <h1 className='text-center text-3xl font-semibold pt-8 uppercase'>Register</h1>
        <form className='flex flex-col max-w-sm mx-auto gap-3 px-3 pt-[50%] sm:pt-[6rem]'>
            <input 
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            type="text" placeholder='username' 
            className='p-2 rounded-sm'/>
            <input 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" placeholder='password' 
            className='p-2 rounded-sm'/>
            <button className='bg-blue-500 p-2 rounded-sm hover:opacity-95
            disabled:opacity-85'>Register</button>
        </form>
    </div>
  )
}

export default Register