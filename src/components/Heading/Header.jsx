import React from 'react'
import Typed from 'react-typed'
import { FaGithub,FaWhatsapp } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import cv from './jackon.pdf'
const Header = () => {
  return (
    <Fade top>
      <div className='flex items-center flex-col justify-center pt-5'>
        <div className='  relative    border-3  border-4 border-blue-600 rounded-full flex items-center justify-center'>
          <div className=' w-[13rem] h-[13rem] rounded-full border-white-300 overflow-hidden m-4'>
          <img src={require('../../assets/profile.jpg')} alt='' className=' object-cover -mt-10'/>
          </div>
          <span className='absolute w-8 h-8  rounded-full border-4 border-slate-200 dark:border-slate-900 bg-blue-600 top-9 left-[11rem] z-50 '></span>
        </div>
        <div className='text-center mt-9'>
          <h1 className='text-4xl uppercase font-bold dark:text-white'>Jackon Shiundu</h1>
          <Typed
                  strings={[
                      'Web Developer',
                      'Graphic Designer']}
                      typeSpeed={40}
                      backSpeed={50}
                      attr="placeholder"
                      loop >
                      <input type="text" className='font-semibold text-gray-500 text-2xl text-center bg-transparent'/>
          </Typed>
        </div>
        <div className='flex justify-center gap-10 mt-9 h-full'>
          <a href={cv} download>
              <button className='bg-blue-700 p-3 rounded-md shadow-md shadow-blue-300 active:scale-150 transition duration-500 text-white '>
              Download CV</button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+254757094679" target='blank'>
            <FaWhatsapp className='text-4xl text-green-600 cursor-pointer'/>
          </a>
          <a href="https://github.com/jackonshiundu" target='blank'>
            <FaGithub className='text-4xl text-blue cursor-pointer text-blue-900'/>
          </a>
        </div>
      </div>
    </Fade>
  )
} 

export default Header
