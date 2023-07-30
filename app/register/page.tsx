"use client";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import SignIn from '../components/SignIn'
import Registration from '../components/Registration';

type Props = {}

const Page = () => {

  const router = useRouter();
  const supabase = useSupabaseClient();

  return (
    <div className=' h-screen'>
      <Head>
        <title>
          SignUp: JetPackAssign
        </title>
        <meta
          name="robots"
          content="noindex"
        />
        <link rel="icon" href="7svar1.png" />
      </Head>
      <Registration/>
    </div>
  )
}

export default Page