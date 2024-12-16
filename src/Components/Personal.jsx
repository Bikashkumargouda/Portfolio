import React from 'react'
import profile from '..//assets/Profile.jpg'
import SocialLink from './SocialLink';
import LazyLoad from 'react-lazyload';




const Personal = () => {
  document.title = "Bikash Kumar | About"
  return (
    <>
      <div className="grid md:grid-cols-[2fr_1fr] text-white max-w-[1300px] mx-auto p-6 place-items-center my-8 " id='about'>
        <h1 className="text-gray-200 text-3xl md:text-5xl font-bold mb-4 mt-3 col-start-1">
          About Me :-
        </h1>
        <div className="col-start-1 text-gray-300 mb-4">
          <p>
            As a passionate Frontend Developer, I specialize in crafting intuitive and dynamic user interfaces that provide seamless experiences across devices. With a strong foundation in HTML, CSS, and JavaScript, combined with modern framework like React, I transform complex design concepts into responsive, interactive websites and applications. <br />
            <br />
            My approach is user-centric, ensuring every project not only looks stunning but also functions flawlessly. I have a keen eye for detail, a knack for problem-solving, and a relentless drive for staying updated with the latest industry trends and technologies. <br />
            <br />Beyond coding, I am dedicated to continuous learning and community involvement, often contributing to open-source projects and participating in local tech meetups. Let's build something amazing together!
          </p>

          <div className="  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-5 my-3  ">
            <SocialLink />
          </div>
        </div>

        <div className='relative group row-start-1 md:col-start-2 md:row-end-3'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-full blue opacity-25 group-hover:opacity-100 transition duration-300'>
          </div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-bur-full rounded-full">
            <LazyLoad height={200} offset={100} placeholder={<div>Loading image...</div>}>
              <img src={profile} alt="" className='md:max-w-[500px] md:max-h-[400px] max-h-[300px] rounded-full' />
            </LazyLoad>

          </div>
        </div>
      </div >

    </>
  )
}

export default Personal
