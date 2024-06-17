import React from 'react'



const Experience = () => {
  return (
    <div className=' text-white max-w-[1300px] mx-auto p-6 place-items-center lg:my-8 my-6'>

      <h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='mt-6 lg:mt-8  mb-11 text-center text-gray-200 text-3xl md:text-5xl font-bol underline underline-offset-8 font-bold uppercase'>Experience</h1>
      <div>

        <div className='mb-8 flex flex-wrap lg:justify-center text-gray-300'>
          <div className='w-full lg:w-1/4'>
            <p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className='mb-2 text-sm text-gray-200'>2023 - Present</p>
          </div>
          <div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 text-2xl md:text-3xl  font-semibold'>
              Web Developer
            </h6>
            <p className='text-gray-200'>
              Worked as Front-end developer. Build the whole Front End website link
              <a className=' text-blue-600' target="_blank" href="https://www.siitsurada.in/">(siitsurada.in)</a>
              ,
              design and responsiveness used tailwind CSS and custom-designed pages , gave it a ”good look and feel” with fully responsive .
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
