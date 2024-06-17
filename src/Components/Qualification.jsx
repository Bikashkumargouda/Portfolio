import React from 'react';
import { Education } from '../constants';
// import { motion } from 'framer-motion';



const Qualification = () => {
  return (
    <div className=' text-white max-w-[1300px] mx-auto p-6 place-items-center lg:my-8 my-6   '>

      <h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}

        className='lg:mt-8 mt-6 mb-11 text-center text-gray-200 text-3xl md:text-5xl font-bol underline underline-offset-8 font-bold uppercase'>Education</h1>
      <div>
        {Education.map((Education, index) => {
          return (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center text-gray-300 '>
              <div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-gray-200 '>{Education.year}</p>
              </div>
              <div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-xl lg:w-3/4 text-gray-200'>
                <h6 className='mb-2 font-semibold'>
                  {Education.college}
                </h6>
                <p>
                  {Education.trade} - <span className='text-sm text-purple-200'>{Education.percentage}</span>
                </p>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Qualification














