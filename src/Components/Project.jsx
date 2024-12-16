import React from 'react'
import ProjectList from './ProjectList';
import { FaExternalLinkAlt } from "react-icons/fa";
// import picture2 from "..//assets/p1.webp"
import picture2 from "..//assets/p2.webp"
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Btn.css"
import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate

const Project = () => {
  document.title = "Bikash Kumar | Projects"
  const navigate = useNavigate();

  const allProject = () => {
    navigate('/allprojects');
  }


  return (
    <>
      <div className='my-8'>
        <ProjectList />
      </div>
      <div className='text-white  lg:text-xl text-sm flex justify-center'>
        <button onClick={allProject} className='btn flex items-center gap-1 justify-center border border-solid border-white p-1 lg:p-2 rounded mb-28 hover:bg-white hover:text-black '>See More <FaLongArrowAltRight /></button>

      </div>
    </>
  )
}

export default Project
