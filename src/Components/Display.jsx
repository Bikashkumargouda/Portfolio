import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Home from './Home'
import Skill from './Skill'
import AllProjects from './AllProjects'



const Display = () => {
  return (
    <div className='mb-20'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/allprojects' element={<AllProjects />} />
      </Routes>
    </div>
  )
}

export default Display
