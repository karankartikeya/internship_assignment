'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useUser } from '@/utils/useUser';
import Features from './components/Features';

export default function Home() {
  const { userDetails, isLoading } = useUser();
  return (
    <main className="flex h-screen flex-col items-center p-10 space-y-10">
      <Navbar session={userDetails!=null} />
      <Hero/>
      <Features/>
    </main>
  )
}
