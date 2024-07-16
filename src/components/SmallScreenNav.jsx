import React from 'react'
import navlinks from '../data/Navlinks'
import { Link } from 'react-router-dom'

const SmallScreenNav = ({openHandler}) => {
  return (
    <div className='w-[40%] h-screen bg-white absolute shadow-2xl right-0 duration-300'>
      <ul className='flex flex-col gap-6 items-center py-20 h-full'>
        {
            navlinks.map((link)=>(
                <li className='text-xl font-semibold  text-[#6666]/100 border-b-2 border-transparent hover:border-b-2 hover:border-black  hover:text-black transition duration-300'>
                    <Link to={link.href}>{link.title}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default SmallScreenNav