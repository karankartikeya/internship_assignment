"use client";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/utils/useUser';

type Props = {
}

function SignIn({ }: Props) {

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;
	const { userDetails } = useUser();
	const supabaseClient = useSupabaseClient();
	const router = useRouter();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	if (userDetails != null) {
		router.push('/movies');
	}

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { data, error } = await supabaseClient.auth.signInWithPassword(
			{
				email: formData.email,
				password: formData.password,
			}
		);
		if (!error) {
			toast.success('You are logged in');
			router.push('/movies');
		}
		else {
			toast.error('Invalid credentials');
		}
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-1 h-screen w-full'>
			<div className='bg-black-400 flex flex-col justify-center'>
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<form className='max-w-[400px] w-full mx-auto space-y-2 rounded-lg  p-8 px-8' onSubmit={onSubmit}>
					<h2 className='text-5xl uppercase text-white font-extrabold mb-10 text-center'>Login	</h2>
					<div className='flex flex-col container text-black py-2'>

						<input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500  focus:outline-none' id="email"
							type="email"
							name='email'
							required={true}
							value={email}
							onChange={onChange} />
						<label className='font-bold text-lg text-white'>Email</label>
						<i></i>
					</div>
					<div className='flex flex-col container text-black py-2'>

						<input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500  focus:outline-none' id="password"
							type="password"
							minLength={6}
							name='password'
							value={password}
							required={true}
							onChange={onChange}
							maxLength={10} />
						<label className='font-bold text-lg text-white'>Password</label>
						<i></i>
					</div>
					<button className='w-full my-5 py-2 bg-[#64ae9d] shadow-lg shadow-[#64ae9d]-500/50 hover:shadow-green-300 text-white font-semibold rounded-lg' type='submit'>SignIn</button>
					<div className='flex items-center justify-center text-gray-400 py-2'>
						<Link href='/' className='items-center font-semibold text-red-500'>Cancel</Link>
					</div>

					<div className='text-center '>
						<p className='text-blue-500 font-semibold cursor-pointer'>
							<Link href='/register'>New user ? SignUp </Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignIn