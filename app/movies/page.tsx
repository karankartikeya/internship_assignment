'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Movies } from '@/types';
import axios from 'axios';
import Movie from '../components/Movie';
import { useUser } from '@/utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar';

type Props = {};

function Page({ }: Props) {

    const { userDetails, isLoading } = useUser();
    const router = useRouter();
    const supabase = useSupabaseClient();

    // const getSession = async () => {
    //     const { data: { session } } = await supabase.auth.getSession();
    //     console.log(session);
    //     if (!session) {
    //         router.push('login');
    //     }
    // }

    const pushBack = () => {
        router.push('/login');
        return true;
    }

    const [page, setPage] = useState<number>(1);
    const my_api_key = process.env.NEXT_PUBLIC_TMDB;
    const FeaturedApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${my_api_key}&page=${page}`;

    const getMovies = async () => {
        return await axios.get(FeaturedApi).then((res) => res.data.results);
    };

    const { isLoading: loadingCheck, data } = useQuery<Movies[]>(
        ['movies', page],
        getMovies,
        {
            staleTime: 60000,
        }
    );

    if (loadingCheck) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex min-h-screen flex-col items-center p-10'>
            <Navbar session={userDetails != null} />
            <div className="movie_app">
                <div className='flex justify-between space-x-10'>
                    <h1 className="text-lg md:text-[48px] text-white text-center flex-col">
                        Here are your movies Karan
                    </h1>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {isLoading ? (
                        <h1 className="loading">Loading...</h1>
                    ) : userDetails != null ? (
                        (
                            <>
                                {(data ?? []).length > 0 &&
                                    (data ?? []).map((movie) => <Movie key={movie.id} {...movie} />)}
                            </>
                        )
                    ) : (<div>{pushBack()}</div>)}
                </div>

                <div className="space-x-5">
                    <button
                        className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => setPage((prev) => prev - 1)}
                        disabled={page === 1 ? true : false}
                    >
                        Prev
                    </button>
                    <button
                        className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={page === 100 ? true : false}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page;