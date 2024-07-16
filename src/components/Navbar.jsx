import React from 'react'
import navlinks from '../data/Navlinks'
import { Link, useSearchParams } from 'react-router-dom'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import SmallScreenNav from './SmallScreenNav'


const Navbar = () => {

  const [open, setopen] = useState(false)
  function openHandler(){
    setopen(!open)
  }

  return (
    <div className="shadow-[0px_10px_10px_-3.75px_rgba(0,0,0,0.05),0px_2.29px_2.29px_-2.5px_rgba(0,0,0,0.12),0px_0.6px_0.6px_-1.25px_rgba(0,0,0,0.14)] lg:sticky top-0 bg-white z-50 bg-opacity-90 w-full relative">
      <div className='flex justify-between md:px-20 px-10 py-4'>
        <div className='flex items-center gap-2'>
            <div>
                <img src="/images/Logo/logo.png" alt="" className='rounded-full'/>
            </div>
            <div className='md:text-xl text-lg font-bold tracking-tighter'> MRPC Sports Park</div>
        </div>

        <div className='lg:flex hidden gap-6 items-center'>
            <ul className='flex gap-8 font-semibold text-[#6666]/100 '>
                {
                    navlinks.map((link)=>(
                        <li key={link.title} className='border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-black'>
                            <Link to={link.href}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <Button text="Get Started"></Button>
        </div>
        <div className='lg:hidden block border-2 border-[#6666] shadow-lg bg-white p-2 items-center' onClick={openHandler}>
            {
              open ? <FontAwesomeIcon icon={faXmark} className='text-[#FD0054]'/> :<FontAwesomeIcon icon={faBars} className='text-[#FD0054]'/>
            }
        </div>
      </div>
      {
        open && <SmallScreenNav openHandler={openHandler}/>
      }
    </div>
  )
}
export default Navbar;
