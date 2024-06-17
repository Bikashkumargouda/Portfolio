import React from 'react'
// import { motion } from 'framer-motion'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  document.title = "Bikash Kumar | Contact"
  return (
    <div className='px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center lg:mt-20 mt-6' id='contact'>
      <div className=' pr-6 '>
        <h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }} className='lg:text-5xl text-2xl font-bold text-gray-200 underline underline-offset-4 mb-3 text-center'>Contact Me </h3>
        <div className='mt-2'>

          <p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='text-gray-400 text-sm lg:text-2xl flex  items-center gap-2 mb-2'> <FaPhoneAlt size={20} />+91 7788868075 / 9348659078</p>
          <p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='text-gray-400 text-sm lg:text-2xl flex  items-center gap-2 mb-2'><SiGmail size={20} />kumar.bikash.gouda@gmail.com</p>
          <p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='text-gray-400 text-sm lg:text-2xl flex  items-center gap-2 mb-2'><FaLocationDot size={20} />Benguluru, India</p>
        </div>

      </div>
      <div>
        <form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} method='POST' className='w-auto  p-5 md:p-12 text-center ' action="https://getform.io/f/nbdoplya">
          <input type="text" id='name' placeholder='Your Name ...' name='name' className='mb-2 w-[230px] lg:w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 ' />
          <input type="email" id='email' placeholder='Your Email' name='email' className='mb-2 w-[230px] lg:w-full rounded-md border border-gray-400 py-2 pl-2 pr-4' />
          <textarea id='textarea' cols="30" rows="4" placeholder='Your message ...' name='textarea' className='mb-2 w-[230px] lg:w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'></textarea>
          <button type='submit' className='w-[230px] lg:w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]' >Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
