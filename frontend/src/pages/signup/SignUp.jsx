import React from 'react'
import { useState } from 'react';
import GenderCheckbox from './GenderCheckbox'
import {Link} from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import { AuthContext } from '../../context/AuthContext';
const SignUp = () => {
  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
		await signup(inputs)
	};
  return (
    
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl mt-2 font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatterBox</span>
				</h1>
                <form onSubmit={handleSubmit}>
  <div>
    <label className='label p-2 '>
      <span className='text-base label-text text-blue-50'>Fullname</span>
    </label>
    <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-10' 
    value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
/>
    <label className='label p-2 '>
      <span className='text-base label-text text-blue-50'>Username</span>
    </label>

    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10 mb-4' 
    value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
    <label className='label p-2'>
      <span className='text-base label-text text-blue-50'>Password</span>
    </label>

    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10 mb-4' 
    value={inputs.password}
    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
    />
    <label className='label p-2'>
      <span className='text-base label-text text-blue-50'>Confirm Password</span>
    </label>

    <input type='password'
     placeholder='Enter Confirm Password'
      className='w-full input input-bordered h-10 mb-4' 
      value={inputs.confirmPassword}
      onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
      />
  </div>

  <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
  <Link to={"/login"} className='text-blue-50 hover:underline hover:text-blue-600 mt-2 inline-block'	href='#'>
						Already have an account?
					</Link>
					<div>
                    <button className='btn btn-block btn-sm mt-4 text bg-blue-600 hover:bg-blue-700 text-blue-50'
                    disabled={loading}>
{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
      
    </button>
   </div>
  </form>
				</div>
    </div>
  )
}

export default SignUp