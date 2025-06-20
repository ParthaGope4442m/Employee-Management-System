import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-600 rounded-2xl'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center p-20'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className='border-2 required border-emerald-600 py-4 px-5 text-xl outline-none bg-transparent rounded-full' type="email" placeholder='Enter your Email' />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='border-2 mt-5 required border-emerald-600 py-4 px-5 text-xl outline-none bg-transparent rounded-full' type="password" placeholder='Enter Password' />
          <button className='border-2 bg-emerald-600 border-none mt-5 py-4 px-5 text-xl outline-none rounded-full cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login