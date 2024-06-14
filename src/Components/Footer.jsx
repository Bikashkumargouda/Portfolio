import React from 'react'
import { FaGithubSquare, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (

    <div className="max-w-[1400px] mx-auto text-sm md:text-lg w-full fixed bottom-0 text-center  ">

      <div className='space-y-4 items-center justify-center bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]'>
        <p className='text-gray-300 p-4 '>
          ©2024. | Designed By: Bikash. | All rights reserved.
        </p>

      </div>
      <a href='#'><FaArrowUp className='text-white fixed bottom-[62px] right-[20px] lg:bottom-[62px] lg:right-[60px] bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] w-9 h-9 p-2 rounded-md' /></a>

    </div>



  )
}

export default Footer
