import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Hi, The name is Mark />",
      "<I love football />",
      "<But most importantly I love to code />"
    ],

    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center text-center overflow-hidden justify-center'>
      <BackgroundCircles />
      <Image
        className='mx-auto relative rounded-full object-cover'
        src="/MarkProfile.jpg" width={128} height={128} alt=""/>

      <div className='z-20'> 
        <h2 className='text-sm pb-2 uppercase tracking-[10px] text-gray-500'>Software developer</h2>
        <h1 className='text-3xl lg:text-3xl font-semibold px-10'>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>

      <div className='z-20'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>

        <Link href="#experience">
        <button className='heroButton'>Experience</button>
        </Link>

        <Link href="#skills">
        <button className='heroButton'>Skills</button>
        </Link>

        <Link href="#projects">
        <button className='heroButton'>Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero