'use client';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { GetServerSideProps } from 'next';
import { getUsers, supabaseAdmin } from '@/utils/supabase-admin';

type Props = {

}

function Registration({ }: Props) {


	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formData;
	const supabaseClient = useSupabaseClient();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const router = useRouter();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        let resLength = 0;
        const res = await getUsers(formData.email.toLowerCase()).then((result) => {
            resLength = result.length;
        })
        if (resLength != 0) {
            toast.error('User with this email already exists');
        }
		else {
			const { data, error } = await supabaseAdmin.auth.admin.createUser(
				{
                    email: formData.email.toLowerCase(),
                    password: formData.password,
                    user_metadata: {
                        full_name: formData.name,
                    },
                    email_confirm: true,
                }
			);
			if (error) {
				toast.error(error.message);
			}
			else {
				toast.success('Signup Successful... Redirecting to Login Page');
				router.push('/login');
			}
		}
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-1 bg-yellow-400 h-screen w-full'>

			<div className='bg-black flex flex-col justify-center'>
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
					<h2 className='text-5xl uppercase text-white font-extrabold mb-10 text-center'>Register	</h2>
					<div className='flex flex-col container text-black py-2'>
						<input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none' id="firstName" type="text"
							name='name'
							value={name}
							required={true}
							onChange={onChange}
						/>
						<label className='font-bold text-lg text-white'>Name</label>
						<i></i>
					</div>
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
					<button className='w-full my-5 py-2 bg-green-500 shadow-lg shadow-green-500/30 hover:shadow-green-500/40 text-white font-semibold rounded-lg' type='submit'>Register</button>
					<div className='flex items-center justify-center text-gray-400 py-2'>
						<Link href='/' className='items-center font-semibold'>Cancel</Link>
					</div>

					<div className='text-center '>
						<p className='text-blue-500 font-semibold cursor-pointer'>
							<Link href='/login'>Already a user ? Sign in </Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Registration
