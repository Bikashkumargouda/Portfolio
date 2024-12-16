import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css"
import { AllProject } from '../constants'

const AllProjectList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:my-20 my-5 mx-5 ">

      {AllProject.map((item, index) => {
        return (
          <div key={index} className="row relative overflow-hidden rounded-md ">
            <img src={item.image} className='w-full rounded-md block h-full ' alt="" />
            <div className="layer w-full h-0 absolute left-0 bottom-0 rounded-md overflow-hidden flex flex-col justify-center items-center text-center py-0 px-10 bg-gradient-to-b from-[#50a7c7b4] via-[#1f7c8f] to-[#3d6ca4] ">
              <h5 className='font-bold text-xl mb-3 text-black '>{item.title}</h5>
              <p className='lg:text-sm md:text-sm hidden md:block lg:hidden text-black mb-3'>{item.desc} </p>

              <div className='flex gap-9 mt-4 lg:mt-3 items-center '>

                <a className='flex gap-2 items-center font-bold border border-black p-2 rounded cursor-pointer ' href={item.url} target='_blank'>  Visit site <FaExternalLinkAlt /></a>
                <a href={item.github} target='_blank'><FaGithub className='lg:size-10 size-10 cursor-pointer' /></a>
              </div>
            </div>
          </div>
        )
      })}

    </div >

  )
}

export default AllProjectList