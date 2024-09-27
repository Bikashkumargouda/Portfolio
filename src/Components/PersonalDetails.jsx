import React from 'react'
import { Education } from '../constants';

const PersonalDetails = () => {
  return (
    <div className=' text-white max-w-[1300px] mx-auto p-6 place-items-center lg:my-8 my-6   '>

      <h1 className='lg:mt-8 mt-6 mb-11 text-center text-gray-200 text-3xl md:text-5xl font-bol underline underline-offset-8 font-bold uppercase'>Personal Details</h1>
      <div>
        <div className='mb-8 flex flex-wrap lg:justify-center text-gray-300 '>
          <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-gray-200 '>More About Me: -</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4 text-gray-200'>
            <h6 className='mb-2 font-semibold'>
              <span className='text-sm font-semibold'>NAME -</span>  Bikash Kumar Gouda
            </h6>
            <p>
              <span className='text-sm font-semibold'>DOB -</span> 22/07/2000
            </p>
            <p>
              <span className='text-sm font-semibold'>SEX -</span> Male
            </p>
            <p>
              <span className='text-sm font-semibold'>Marital Status - </span> Unmarried
            </p>
            <p>
              <span className='text-sm font-semibold'>Permanent Address - </span> <br />
              Gayatri Vihar, 2nd Lane, 1st Gate,  Berhampur, 760006
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='mb-1 flex flex-wrap lg:justify-center text-gray-300 '>
          <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-gray-200 '>Father Name : -</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4 text-gray-200'>
            <h6 className='mb-2 font-semibold'>
              Pramod Kumar Gouda
            </h6>
          </div>
        </div>
        <div className='mb-8 flex flex-wrap lg:justify-center text-gray-300 '>
          <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-gray-200 '>Mother Name : -</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4 text-gray-200'>
            <h6 className='mb-2 font-semibold'>
              Pratima Kumari Gouda
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails
