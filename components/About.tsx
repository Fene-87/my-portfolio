import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
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
      className='h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl 
      px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}

          whileInView={{
            x: 0,
            opacity: 1,
          }}

          transition={{
            duration: 1.2,
          }}

          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover"
        >
          <Image 
            src="/MarkProfile.jpg" height={250} width={250} alt="" 
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
             md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is a little background</h4>
          <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nobis, placeat eaque veniam reprehenderit perferendis 
             voluptates id aut non. Laborum corporis ipsam aliquam 
             consequatur, illum tempore, voluptate illo officia, 
             magnam sed iste accusamus quidem? Deserunt officiis 
             quam placeat commodi. Animi iure facere harum odit cumque
             ratione nostrum. Dolorum inventore corrupti quae.</p>
        </div>
    </motion.div>
  )
}

export default About