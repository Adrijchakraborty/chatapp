import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const[inputs,setInputs] = useState({})

	const {loading,signup} = useSignup()

	const handleChange = (e) => {
		setInputs({...inputs,[e.target.id]: e.target.value})
	}

	const handleCheckbox = (gender)=>{
		setInputs({...inputs,"gender": gender})
	}

	// console.log(inputs);
	const handleSubmit = async(e)=>{
		e.preventDefault();
		// console.log(inputs);
		await signup(inputs)
	}
	return (

		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' id="fullName" onChange={handleChange} placeholder='John Doe' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' id="username" onChange={handleChange} placeholder='johndoe' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							id="password" onChange={handleChange}
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							id="confirmPassword" onChange={handleChange}
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<GenderCheckbox id="gender" handleCheckbox={handleCheckbox} />

					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
						Already have an account?
					</Link>

					<div >
						{loading ? <span className="loading loading-spinner"></span>
 : <button disabled={loading} className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>}
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;