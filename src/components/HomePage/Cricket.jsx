import React from 'react'
import Texts from './Texts'
import Button from '../Button'

const Cricket = () => {
  return (
    <div className='mx-20'>
      <div className='py-20 flex lg:flex-row gap-24 flex-col-reverse'>
        <div className='lg:w-1/2'>
        <div className='relative w-full'>
            <img src="/images/Cricket_section/cricket2.png" alt="" className='w-full'/>
            <div className='absolute top-[4%] right-[10%] w-[37%] xl:block hidden'>
              <img src="/images/Cricket_section/ground.png" alt="" className='w-[100%]'/>
            </div>
            <div className='absolute top-[45%] right-[25%] border border-white rounded-lg z-40 xl:block hidden'>
              <img src="/images/Cricket_section/ball.png" alt="" />
            </div>
            <div className='absolute bottom-0 right-0 rounded-xl z-20 xl:block hidden'>
              <img src="/images/Cricket_section/batsman.png" alt="" className='rounded-br-xl'/>
            </div>
            <div className='flex flex-col gap-3 absolute bottom-[10%] xl:left-[5%] right-[5%] bg-white border xl:w-[30%] w-[45%] rounded-xl px-4 py-2 shadow-[9px_13px_64px_0px_rgba(0,0,0,0.25)]'>
              <div>
                <img src="/images/Cricket_section/cricketArrow.png" alt="" />
              </div>
              <p className='text-xs font-semibold'>Get Cricket Slot online just by one <span className='text-[#FD0054]'>CLICK!</span></p>
              <div className='flex gap-3'>
                <button className='text-xs font-medium px-3 py-1 text-[#222222] border border-[#222222] rounded-lg hover:bg-[#222222] hover:text-white transition duration-500'>Later</button>
                <button className='text-xs font-medium xl:px-5 p-1 text-white bg-[#FD0054] rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition duration-500'>Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 lg:w-1/2'>
          <Texts
          info="Experience the thrill of cricket on our well-maintained pitch. Suitable for friendly matches, practice sessions, or tournaments. Book your slot and get ready to bat, bowl, and field!"
          btnText="Reserve your Cricket Pitch Today"
          isPresent='true'>Gear up for a <span className='text-[#FD0054]'>Six-Tastic</span> time :</Texts>
        </div> 
      </div>
    </div>
  )
}


export default Cricket
