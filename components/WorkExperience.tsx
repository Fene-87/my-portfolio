import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}

      whileInView={{
        opacity: 1,
      }}

      transition={{
        duration: 2.5,
      }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full p-10
      justify-evenly items-center mx-auto'>
        <h3 className='text-gray-500 uppercase top-24 tracking-[20px] text-2xl absolute'>Experience</h3>

        <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-screen absolute top-36'>
            {/* Experience Cards */}
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience