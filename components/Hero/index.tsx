import React from 'react'
import Image from 'next/image'
import { Github, Gmail, Linkedin } from '@/components/icons'
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from '@/components/Footer/constant'

export const Hero = () => {
  return (
    <section className="bg-gray-900 px-12 py-24 md:flex justify-between gap-24">
      <div className="flex flex-col items-center md:order-last">
        <div className="relative w-52 h-52 mb-8">
          <Image
            src="/images/photo.png"
            alt="photo"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        <div className="max-md:hidden flex flex-row justify-center gap-5 text-gray-400">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <Linkedin size="w-6 h-6" fill="fill-current" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github size="w-6 h-6" fill="fill-current" />
          </a>
          <a href={MAIL_URL} target="_blank" rel="noopener noreferrer">
            <Gmail size="w-6 h-6" fill="fill-current" />
          </a>
        </div>

      </div>

      <div className="text-white space-y-3 md:col-">
        <p className="text-gray-300">Hi, It&apos;s 
          <span className="text-white font-bold"> Nashwa</span>
        </p>

        <h1 className="font-extrabold text-3xl">Web Developer</h1>
        <p className="text-sm text-gray-300 text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque optio alias consequuntur odit deserunt ipsam facilis distinctio quos minus dicta id, tempora dignissimos cupiditate, reiciendis explicabo ipsum nobis quasi.</p>
        
        <div className="md:hidden flex gap-5 text-gray-400 pb-3">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <Linkedin size="w-6 h-6" fill="fill-current" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github size="w-6 h-6" fill="fill-current" />
          </a>
          <a href={MAIL_URL} target="_blank" rel="noopener noreferrer">
            <Gmail size="w-6 h-6" fill="fill-current" />
          </a>
        </div>

        <button className="text-gray-300 border-2 rounded-md border-gray-300 px-4 py-1 hover:bg-white">Contact</button>
      
      </div>
    </section>
  )
}

export default Hero