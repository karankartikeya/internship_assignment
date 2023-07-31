'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import React, { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

type Props = {}

function Provider({
  children,
}: {
  children: React.ReactNode
}) {


  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
      >
        {children}
      </SessionContextProvider>
    </QueryClientProvider>
  )
}

export default Provider