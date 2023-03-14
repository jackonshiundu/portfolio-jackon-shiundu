import React,{useState} from 'react'
import { BsSunFill,BsMoonStarsFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import useDarkMode from '../darkmode/useDarkMode';
const Footer = () => {
  const [bg,setBg]=useState(true)
  const [colorTheme,setTheme]=useDarkMode()
  const handleClick=()=>{
    setBg(!bg)
    setTheme(colorTheme)
  }

  return (
    <div className='text-center mt-10 text-gray-600 text-sm font-semi-bold py-4 flex flex-col items-center sm:flex-row justify-center gap-5'>
      <p className='dark:text-white transition duration-500'>&copy;Jackoncode.All rights Reserved</p>
      <div className='flex items-center gap-2'>
        <IoIosCall className='dark:text-white transition duration-500'/> 
        <p className='dark:text-white transition duration-500'>0757094679</p>
      </div>
      <div className='flex w-10 h-5  bg-gray-300 items-center rounded-full overflow-hidden'>
        <BsSunFill className={`${bg&&'bg-blue-900'} w-1/2 rounded-full text-yellow-700 h-5 p-1 transition duration-500`}  onClick={handleClick}/>
        <BsMoonStarsFill className={`${bg||'bg-yellow-700'} rounded-full w-1/2 text-blue-900 h-5 p-1 transition duration-500`}  onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Footer
