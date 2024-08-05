import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

const HomePage = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <section className="w-full">
        <Navbar />
        <div className="pt-16"></div>
        <Hero />
        <About />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

export default HomePage
