import React, { useState } from 'react'

const Register = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    console.log(name, password)
  return (
    <div className='bg-blue-200 h-screen '>
        <form className='flex flex-col max-w-sm mx-auto gap-3 px-3 pt-[50%] sm:pt-[30%]'>
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
            <button className='bg-blue-500 p-2 rounded-sm'>Register</button>
        </form>
    </div>
  )
}

export default Register