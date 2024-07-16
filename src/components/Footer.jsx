import React from 'react'
import navlinks from '../data/Navlinks'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mx-20'>
      <div className='py-10 flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-8'>
        <div className='flex items-center gap-2'>
                <div>
                    <img src="/images/Logo/logo.png" alt="" className='rounded-full'/>
                </div>
                <div className='text-xl font-bold tracking-tighter'> MRPC Sports Park</div>
        </div>
        <div>
          <ul className='flex gap-6 font-semibold text-[#6666]/100 '>
                  {
                      navlinks.map((link)=>(
                          <li key={link.title} className='border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-black'>
                              <Link to={link.href}>{link.title}</Link>
                          </li>
                      ))
                  }
          </ul>
        </div>
        <div className='font-semibold'>©2024 – Build by <span className='text-[#FD0054]'>Nextfly Technologies</span></div>
      </div>
    </div>
  )
}

export default Footer
