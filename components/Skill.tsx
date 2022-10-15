import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {
    directionLeft? : boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative cursor-pointer flex'>
        <motion.div 
          
          className='border border-gray-500 object-cover rounded-full w-12 h-12 md:w-24 md:h-24 px-2 py-3
           filter group-hover:grayscale transition duration-300 ease-in-out'>
            <Image 
              src="/React-icon.png" width={80} height={60} alt=""
             
            />
           
        </motion.div>
        
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
          group-hover:bg-white h-12 w-12 md:h-24 md:w-24 rounded-full'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black'>100%</p>
          </div>
        </div>
    </div>
  )
}

export default Skill