import React from 'react'
import profile from '..//assets/Profile.webp'
import { RiTailwindCssFill } from "react-icons/ri";
// import {  } from 'framer-';


import {
  DiJavascript,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGithubBadge,
} from 'react-icons/di'

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

const Personal = () => {
  document.title = "Bikash Kumar | About"
  return (
    <>
      <div className="grid md:grid-cols-[2fr_1fr] text-white max-w-[1300px] mx-auto p-6 place-items-center my-8 " id='about'>
        <h1 className="text-gray-200 text-3xl md:text-5xl font-bold mb-4 mt-3 col-start-1">
          About Me :-
        </h1>
        <div className="col-start-1 text-gray-300 mb-4">
          <p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            As a passionate Frontend Developer, I specialize in crafting intuitive and dynamic user interfaces that provide seamless experiences across devices. With a strong foundation in HTML, CSS, and JavaScript, combined with modern framework like React, I transform complex design concepts into responsive, interactive websites and applications. <br />
            <br />
            My approach is user-centric, ensuring every project not only looks stunning but also functions flawlessly. I have a keen eye for detail, a knack for problem-solving, and a relentless drive for staying updated with the latest industry trends and technologies. <br />
            <br />Beyond coding, I am dedicated to continuous learning and community involvement, often contributing to open-source projects and participating in local tech meetups. Let's build something amazing together!
          </p>
          <div
            className="  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 mt-3 ">
            <ul
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}

              className='skill  flex flex-wrap text-center items-center md:flex gap-4 text-2xl md:text-5xl  justify-center'>
              <li
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center  '>
                <DiHtml5 className='text-[#DD4B25]' />
                <p className='text-xl'>HTML</p>
              </li>
              <li
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center'><DiCss3 className='text-[#254BDD]' />
                <p className='text-xl'>CSS</p>
              </li>
              <li
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center'><DiJavascript className='text-[#EFD81D]' />
                <p className='text-xl'>Java-Script</p>
              </li>
              <li
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center'><DiBootstrap className='text-[#8713F4]' />
                <p className='text-xl'>Bootstrap</p>
              </li>

              <li
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center'><DiReact className='text-[#5ED3F3]' />
                <p className='text-xl'>React</p>
              </li>

              <li
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center'><DiGithubBadge className='text-orange-600' />
                <p className='text-xl'>Github</p>
              </li>
              <li
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className=' flex flex-col justify-center items-center text-center'>
                <RiTailwindCssFill className='text-[#38BDF8]' />
                <p className='text-xl'>Tailwind</p>
              </li>
            </ul>
          </div>
        </div>

        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='relative group row-start-1 md:col-start-2 md:row-end-3'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-full blue opacity-25 group-hover:opacity-100 transition duration-300'>
          </div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-bur-full rounded-full">
            <img src={profile} alt="" className='md:max-w-[500px] md:max-h-[400px] max-h-[300px] rounded-full' />
          </div>
        </div>
      </div >
    </>
  )
}

export default Personal
