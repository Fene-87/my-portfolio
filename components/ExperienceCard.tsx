import { motion } from "framer-motion"
import Image from "next/image"
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[200px]
      md:w-[400px] xl:w-[600] snap-center bg-[#292929] p-20 opacity-70 hover:opacity-100 cursor-pointer
      transition-opacity duration-200 overflow-hidden h-[500px]">
        <motion.div
          initial={{
            y: -100, opacity: 0
          }}

          whileInView={{
            y:0, opacity: 1
          }}

          transition={{
            duration: 1.2
          }}

          viewport={{
            once: true,
          }}
        >
            <Image 
              src="/kenya-power.png" height={100} width={100} alt=""
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"/>
        </motion.div>

        <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">Attachment</h4>
            <p className="font-bold text-1xl mt-1">Kenya Power</p>
            <div className="flex space-x-2 my-2">
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300">Started...Ended</p>
            <ul className="list-disc space-y-3 ml-5 text-lg">
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard