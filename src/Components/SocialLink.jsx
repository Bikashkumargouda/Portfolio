import React from 'react'
import { motion } from 'framer-motion'
import { SocialLinklogo } from '../constants'


const iconVariants = (duration) => ({
  initial: { y: -10 },

  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    }
  }
})

const SocialLink = () => {
  return (
    <>
      <div className='flex flex-wrap text-center items-center md:flex gap-6  text-3xl lg:text-5xl  justify-center'>
        {SocialLinklogo.map((item, index) => {
          return (
            <div key={index} >
              <ul>
                <li className='hover:scale-y-50 transition-all'>
                  <a href={item.link} className='' target='_blank'>{item.logo}</a>
                </li>
              </ul>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default SocialLink;
