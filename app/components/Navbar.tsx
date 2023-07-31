'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Menu from './Menu'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
    session: Boolean
}

function Navbar({ session }: Props) {
    const router = useRouter();
    const supabase = useSupabaseClient();
    const [menu, setMenu] = useState(false);

    const header_content = {
        logo: {
            title: "7svar",
            path: "/logo2.png",
        },
        menu: [
            {
                title: "products",
                link: "/",
            },
            {
                title: "dao",
                link: "/",
            },
            {
                title: "build",
                link: "/",
            },
            {
                title: "docs",
                link: "/",
            },
        ],
    };

    const signout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            console.log("Logout Successful");
        }
        location.reload();
    };
    return (
        <header id="nav" className=" z-30 rounded-xl -top-8  w-full h-[140px] justify-center items-center shadow-red-500">
            <nav className="mx-auto border border-gray-800 rounded-2xl flex max-w-7xl flex-row items-center justify-between top-0 space-x-4 px-4 py-1 md:px-10 md:py-3">
                {/* Logo */}
                <Image
                    src='/images/img_image1.png'
                    className="cursor-pointer p-4"
                    onClick={() => router.push("/")}
                    height={150}
                    width={156}
                    priority
                    alt={header_content?.logo?.title}
                />

                {/* Nav menu items */}
                <ul className=" hidden md:space-x-6 lg:flex">
                    {header_content?.menu &&
                        header_content?.menu.map((item, i) => (
                            <li
                                className="cursor-pointer transition p-2 rounded-lg text-white hover:text-yellow-400 font-medium text-4xl md:text-2xl"
                                key={i} onClick={() => router.push(`${item?.link}`)}>
                                {item?.title}
                            </li>
                        ))}
                </ul>

                <div>
                    {/* Buttons */}
                    <div className="hidden flex-row space-x-1 md:space-x-4 lg:flex ml-4 p-4">

                        {session ? (
                            <>
                                <button className="w-32 h-9 px-5 py-2 bg-[#64ae9d] rounded-full shadow-inner border border-white border-opacity-25 justify-center items-center inline-flex text-center text-black  font-semibold lowercase" onClick={() => router.push('/movies')}>
                                    Movies
                                </button>
                                <button className="w-32 h-9 px-5 py-2 bg-red-500 rounded-full shadow-inner border border-white border-opacity-25 justify-center items-center inline-flex text-center text-black  font-semibold lowercase" onClick={signout}>
                                    SignOut
                                </button>
                            </>
                        ) : (
                            <button className="w-32 h-9 px-5 py-2 bg-[#64ae9d] rounded-full shadow-inner border border-white border-opacity-25 justify-center items-center inline-flex text-center text-black  font-semibold lowercase" onClick={() => router.push('/login')}>
                                Launch App
                            </button>
                        )}

                    </div>

                    {/* Menu Icon */}
                    <div className="lg:hidden p-4 justify-center text-red-600 font-bold items-center h-fit" onClick={() => setMenu(!menu)}>
                        {menu ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </nav>
            <Menu menu={menu} session={session} />

        </header>
    )
}

export default Navbar