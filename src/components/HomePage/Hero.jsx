import React from 'react'
import Button from '../Button'

const Hero = () => {
  return (
    <div className='mx-20 flex lg:flex-row flex-col justify-between lg:gap-12 gap-0'>
      <div className='flex flex-col gap-8 lg:w-1/2 xl:py-48 py-32'>
        <h1 className='font-semibold xl:text-6xl text-4xl'><span className='text-[#FD0054]'>Get Active</span>, Have Fun! Your One-Stop <span className='text-[#FD0054]'>Park for Sports</span> & Leisure</h1>
        <p className='text-[#6E6E6E] font-semibold xl:text-2xl md:text-xl text-wrap'>Book your badminton court, cricket pitch, or swimming lane! Delicious food court on-site.</p>
        <div className='flex xl:gap-14 gap-8 lg:justify-start justify-center md:flex-row flex-col'>
            <Button text="Get Started"/>
            <button className='px-6 py-3 font-semibold text-[#252525] border border-[#252525] rounded-full hover:bg-[#252525] hover:text-white transition duration-500'>Learn More</button>
        </div>
      </div>

      <div className="">
        <div className="flex lg:gap-4 gap-12">
         
            <div className="flex flex-col gap-10 pt-12 bg-[url('/images/Hero/bg-1.png')] bg-left-bottom bg-no-repeat" >
              <div className=''>
                  <img src="/images/Hero/cricket.png" alt="" className='shadow-[5px_5px_35px_0px_rgba(0,143,232,0.18)] hover:-translate-y-2 transition duration-300'/>
              </div>
              <div className='rounded-lg'>
                  <img src="/images/Hero/swimming.png" alt=""  className='shadow-[5px_5px_35px_0px_rgba(0,143,232,0.18)] hover:-translate-y-2 transition duration-300' />
              </div>
            </div>
            <div className="flex flex-col bg-[url('/images/Hero/bg-1.png')] bg-right-top bg-no-repeat">
              <div className=''>
                  <img src="/images/Hero/badminton.png" alt=""  className='hover:-translate-y-2 transition duration-300'/>
              </div>
              <div className=''>
                  <img src="/images/Hero/food.png" alt="" className='shadow-[5px_5px_35px_0px_rgba(0,143,232,0.18)] hover:-translate-y-2 transition duration-300'/>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero


