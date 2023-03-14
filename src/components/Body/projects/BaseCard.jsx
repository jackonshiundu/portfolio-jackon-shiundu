import React from 'react'
import { FaGithub} from "react-icons/fa";
import { TiArrowForward } from 'react-icons/ti';

const BaseCard = ({type,name,backgroundImage,bgcolor,link,code,arrowhover}) => {

  return (
    
    <div className='w-[20rem] h-[14rem] bg-white rounded-md overflow-hidden hover:scale-105 transition duration-500 shadow-md'>
        <div style={{backgroundImage:`url(${backgroundImage})`}} className='bg-no-repeat h-3/4 relative bg-cover' >
            <div className='absolute bottom-3 cursor-pointer  text-white  w-full  text-center backdrop-blur-md' >
              <h3 className='font-extrabold text-xl'>{name}</h3>
              <h2>{type}</h2>
              <button className={`w-5 h-5 rounded-full ${bgcolor}`}></button>
            </div>
        </div>
        <div className='flex gap-4 items-center justify-between mx-3'>
          <h5 className='font-bold text-2xl'>Visit</h5>
          <div className='flex gap-2'>
            <a href={`${code}`} target='blank'>
              <FaGithub className='cursor-pointer text-2xl'/>
            </a>
            <a href={`${link}`} target='blank'>
              <TiArrowForward className={`cursor-poiner text-2xl hover:${arrowhover} rounded-full transition duration-300`}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default BaseCard