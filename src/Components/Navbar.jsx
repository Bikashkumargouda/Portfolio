import { Menu, X } from "lucide-react"
import { useState } from "react"
import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

  const [mobiledraweropen, setMobiledraweropen] = useState(false)

  const togglebar = () => {
    setMobiledraweropen(!mobiledraweropen)
  }

  const closeNav = () => {
    setNav(false)
  }


  return (
    <section >
      <nav className="text-white sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 dark:bg-black dark:text-white" >
        <div className="container px-4 mx-auto relative text-base">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className='text-2xl lg:text-3xl font-bold tracking-tighter text-[#3d6ca4]'>Bikash .</Link>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12 md:font-bold ' >
              <li className="cursor-pointer hover:bg-white hover:text-black rounded p-1" >

                <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-800 bg-white p-1 rounded" : ""}
                >About</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-white hover:text-black rounded p-1" >

                <NavLink to='/skill' className={({ isActive }) => isActive ? "text-blue-800 bg-white p-1 rounded" : ""}
                >Skill</NavLink>
              </li>
              <li className="cursor-pointer hover:bg-white hover:text-black rounded p-1" >

                <NavLink to='/project' className={({ isActive }) => isActive ? "text-blue-800 bg-white p-1 rounded" : ""}
                >Projects</NavLink>
              </li>

              <li className="cursor-pointer hover:bg-white hover:text-black rounded p-1" >
                <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-800 bg-white p-1 rounded" : ""} >Contact</NavLink>
              </li>

            </ul>

            <div className=" lg:flex justify-center space-x-12 items-center text-center">
              <div className="hidden lg:block">
                <Link to="/contact" className='bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] py-2 px-3 rounded-md'>
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={togglebar}>
                {mobiledraweropen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobiledraweropen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full  p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                <li className="py-4 text-center hover:bg-white hover:text-black rounded   ">
                  <Link onClick={closeNav} to='/about'>About</Link>
                </li>
                <li className="py-4 text-center hover:bg-white hover:text-black rounded   ">
                  <Link onClick={closeNav} to='/skill'>Skill</Link>
                </li>
                <li className="py-4 text-center hover:bg-white hover:text-black rounded   ">
                  <Link onClick={closeNav} to='/project'>Project</Link>
                </li>
                <li className="py-4 text-center hover:bg-white hover:text-black rounded   ">
                  <Link onClick={closeNav} to='/contact'>Contact</Link>
                </li>

              </ul>
              <div className="flex space-x-6 ">
                <Link onClick={closeNav} to='/contact' className='bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] py-2 px-3 rounded-md mt-2 '>
                  Contact Me
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}

export default Navbar

// className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>