import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
        className='flex flex-row items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}
        >
        {/* Social Icons */}
        <SocialIcon 
          url='https://www.twitter.com'
          bgColor='transparent'
          fgColor='gray'
          />
        <SocialIcon 
          url='https://www.instagram.com'
          bgColor='transparent'
          fgColor='gray'
          />
        <SocialIcon 
          url='https://www.linkedin.com'
          bgColor='transparent'
          fgColor='gray'
          />
        <SocialIcon 
          url='https://www.github.com'
          bgColor='transparent'
          fgColor='gray'
          />
      </motion.div>

      <Link href="#contact">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}
      >
      <SocialIcon 
          className='cursor-pointer'
          network='email'
          bgColor='transparent'
          fgColor='gray'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
      </motion.div>
      </Link>
    </header>
  )
}

export default Header;