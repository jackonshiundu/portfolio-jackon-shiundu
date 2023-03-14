import React, {useState}from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
const Links = () => {
    const [bg,setBg]=useState(true)
    const handleClick=()=>{
      setBg(!bg)
    }
    return (
      <Fade top>
        <div className='my-7 flex justify-center'>
          <div className='bg-gray-600 w-[15rem] flex  px-4 py-2 rounded-lg '>
            <Link to='/' className={`p-2 cursor-pointer w-1/2 text-2xl bg-${bg?'white':'gray-600'} rounded-lg transition duration-500`} onClick={handleClick}>Projects</Link>
            <Link to='/skills' className={`p-2 cursor-pointer text-center w-1/2 text-2xl bg-${bg?'gray-600':'white'} rounded-lg transition duration-500`} onClick={handleClick}>Skills</Link>
          </div>
        </div>
      </Fade>
    )
}

export default Links
