import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion"

type Props = {}

function Projects({}: Props) {

    const projects = [1,2,3,4,5];

  return (
    <div className='relative h-screen flex flex-col overflow-hidden text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'>
        <h3 className='uppercase text-gray-500 tracking-[20px] absolute top-24 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll pt-20 overflow-y-hidden snap-x snap-mandatory z-20'>

            {projects.map((project, i) => {
                return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}

                  whileInView={{
                    opacity: 1,
                  }}

                  transition={{
                    duration: 1.5,
                  }}
                  className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                   justify-center p-20 md:p-44 h-screen'>
                    <motion.div
                      initial={{
                        y: -300,
                        opacity: 0,
                      }}

                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}

                      transition={{
                        duration: 1
                      }}

                      
                    >
                    <Image
                      src="/png-transparent-spider-man.png" width={300} height={200} alt="" />
                    </motion.div>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl text-center font-semibold'>Case Study {i+1} of {projects.length}</h4>

                        <p className='text-lg text-center md:text-left'>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas quam fugiat iure,
                           numquam ut aut! Corporis praesentium quae repudiandae mollitia molestias unde earum 
                           pariatur architecto nemo molestiae maiores ducimus reprehenderit nesciunt similique 
                           dolor laboriosam possimus, voluptate fugit inventore quidem harum. Veritatis non nulla 
                           perferendis totam soluta sunt necessitatibus amet?
                        </p>
                    </div>  
                </motion.div>

                )
            })}
            {/* project */}
            {/* project */}
            {/* project */}
            {/* project */}
        </div>

        <div className='w-full top-[35%] absolute bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'/>
    </div>
  )
}

export default Projects