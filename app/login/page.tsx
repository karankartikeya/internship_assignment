"use client";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import SignIn from '../components/SignIn'

type Props = {}

const Page = () => {

  const router = useRouter();
  const supabase = useSupabaseClient();

  return (
    <div className=' h-screen'>
      <Head>
        <title>
          SignIn: JetPackAssign
        </title>
        <meta
          name="robots"
          content="noindex"
        />
        <link rel="icon" href="7svar1.png" />
      </Head>
      <SignIn/>
    </div>
  )
}

export default Page