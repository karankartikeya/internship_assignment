'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useUser } from '@/utils/useUser';

export default function Home() {
  const { userDetails, isLoading } = useUser();
  return (
    <main className="flex h-screen flex-col items-center p-10">
      <Navbar session={userDetails!=null} />
      <Hero/>
    </main>
  )
}
