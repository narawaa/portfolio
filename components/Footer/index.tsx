import React from 'react'
import { Github, Gmail, Linkedin } from '@/components/icons'
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from './constant'

export const Footer = () => {
  return (
    <footer className='bg-black-100 grid grid-cols-1 gap-3 sm:grid-cols-2 px-10 py-3 text-gray-400 text-sm sm:flex sm:justify-between'>
      <div className="flex gap-5">
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

      <span>&copy; 2024. All rights reserved.</span>

    </footer>
  )
}