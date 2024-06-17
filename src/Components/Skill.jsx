import React from 'react'
import { skillicon } from '../constants'

const Skill = () => {
  document.title = "Bikash Kumar | Skill"
  return (
    <div className='glass'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className=''>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-gray-200'>Skill</p>
          <p className='py-6 mt-2 text-xl text-gray-200'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

          {skillicon.map(({ id, src, title, style }) => {
            return (
              <div key={id} className={`shadow-lg  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 px-3 lg:p-0 mx-auto' />
                <p className='mt-4 text-sm lg:text-xl text-gray-200'>{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Skill
