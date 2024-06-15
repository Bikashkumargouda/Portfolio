import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css"
import { AllProject } from '../constants'
const ProjectList = () => {


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:my-20 my-5 mx-5 ">

      {AllProject.map((item, index) => {
        return (
          <div key={index} className="row relative overflow-hidden cursor-pointer rounded-md ">
            <img src={item.image} className='w-full rounded-md block  ' alt="" />
            <div className="layer w-full h-0 absolute left-0 bottom-0 rounded-md overflow-hidden flex flex-col justify-center items-center text-center py-0 px-10 bg-gradient-to-b from-[#50a7c7b4] via-[#1f7c8f] to-[#3d6ca4] ">
              <h5 className='font-bold text-xl mb-3 text-black '>{item.title}</h5>
              <p className='lg:text-xl md:text-sm hidden md:block lg:block text-black mb-3'>{item.desc} </p>

              <div className='flex gap-9 mt-4 lg:mt-3 items-center '>

                <a className='flex gap-2 items-center font-bold border border-black p-2 rounded ' href="#">  Visit site <FaExternalLinkAlt /></a>
                <a href="#"><FaGithub className='lg:size-10 size-10' /></a>
              </div>
            </div>
          </div>
        )
      })}

    </div >

  )
}

export default ProjectList
