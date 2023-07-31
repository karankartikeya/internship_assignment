'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useUser } from '@/utils/useUser';
import Features from './components/Features';
import Update from './components/Update';

export default function Home() {
  const { userDetails, isLoading } = useUser();
  return (
    <main className="flex h-screen flex-col items-center p-10 space-y-10">
      <Navbar session={userDetails != null} />
      <Hero />
      <Features />
      <div className='mx-auto flex w-full md:w-1/2 flex-col mt-20 space-y-16 px-8 py-8 lg:space-y-24'>
        <Update />
      </div>
    </main>
  )
}
