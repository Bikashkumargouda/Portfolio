import React from 'react'
// import ProjectList from './ProjectList'
import { FaLongArrowAltRight } from 'react-icons/fa'
import AllProjectList from './AllProjectList'
// import profile from '..//assets/Profile.jpg'

const AllProjects = () => {
  document.title = "Bikash Kumar | All Projects"
  return (
    <>
      <div className='my-8'>
        <AllProjectList />
      </div>
      {/* <div className='text-white  lg:text-xl text-sm flex justify-center'>
        <button className='btn flex items-center gap-1 justify-center border border-solid border-white p-1 lg:p-2 rounded mb-28 hover:bg-white hover:text-black '>See More <FaLongArrowAltRight /></button>
      </div> */}
    </>
  )
}

export default AllProjects