import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}

      whileInView={{
        opacity: 1
      }}

      transition={{
        duration: 2.5
      }}
      className='h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px]
     xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 text-gray-500 tracking-[20px] uppercase text-2xl'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[5px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5 absolute top-56'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}

export default Skills