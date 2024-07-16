import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight,FiArrowRight } from "react-icons/fi";

const Button = ({text}) => {
  return (
    <div className='group'>
        <button className='flex gap-2 items-center group-hover:bg-white group-hover:text-black bg-[#FD0054] border-2 border-[#FAACC9] text-white px-6 py-3 rounded-full group-hover:border-black font-semibold transition duration-500'>
            <div className=''>
                {text}
            </div>
            <div className=''>
                <div className='group-hover:hidden'>
                    <FiArrowUpRight />
                </div> 
                <div className='group-hover:block hidden'>
                    <FiArrowRight />
                </div>
            </div>
        </button>
    </div>
  )
}

export default Button
