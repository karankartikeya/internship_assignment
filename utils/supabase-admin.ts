import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin priviliges and overwrites RLS policies!
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ''
);

const getUsers = async (email:string) => {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('email', email)
  if (error || !data) {
    throw error || new Error('No user found');
  }
  return data;
};

export {
  getUsers,
};
