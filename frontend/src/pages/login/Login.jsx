
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
     			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
     				<h1 className='text-3xl font-semibold text-center text-gray-300'>
     					Login
     					<span className='text-blue-500'> ChatterBox</span>
    			</h1>
          <form>
  <div>
    <label className='label p-2'>
      <span className='text-base label-text text-blue-50'>Username</span>
    </label>
    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
    <label className='label p-2'>
      <span className='text-base label-text text-blue-50'>Password</span>
    </label>
    <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10 mb-4' />
  </div>
  <a href='#' className='text-blue-50 hover:underline hover:text-blue-600 mt-2 inline-block mb-4'>
    {"Don't"} have an account?
  </a>

  <div>
    <button className='btn btn-block btn-sm mt-2 text bg-blue-600 hover:bg-blue-700 text-blue-50'>
      Login
    </button>
  </div>
</form>
    </div>
    </div>
  )
}

export default Login;
