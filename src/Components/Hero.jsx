import React from 'react'
import './Hero.css'
import UIDeveloper from '..//assets/UIDeveloper.gif'
import DownloadResumeButton from './DownloadResumeButton';
import { motion } from 'framer-motion';


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})



const Hero = () => {

  document.title = "Bikash Kumar | Home"
  return (

    <div className=' hero grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto  min-h-[70vh] md:mb-31  md:h-full dark:bg-white ' id='hero'>
      <div
        className='max-w-[800px] p-2'>
        < p
          className='text-gray-200 lg:text-5xl md:text-3xl text-3xl tracking-tight'>
          Hello, It's Me<br />
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
            className='lg:text-5xl md:text-3xl text-3xl '>Bikash Kumar Gouda</motion.span> <br />
        </p>
        <motion.h3
          variants={container(1)}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1 }}
          className='text-gray-200 lg:text-5xl md:text-3xl text-2xl tracking-tight font-bold' >i am <span>Front-end Developer</span> </motion.h3>

        <div className='  mt-4 mb-4 md:mb-0'>
          <DownloadResumeButton />
        </div>
      </div>
      <div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}

          src={UIDeveloper} className='w-[300px] md:w-[400px] ' alt="" />
      </div>
    </div>

  )
}

export default Hero
