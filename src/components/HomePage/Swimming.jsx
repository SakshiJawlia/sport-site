import React from 'react'
import Texts from './Texts'

const Swimming = () => {
  return (
    <div className='mx-20'>
      <div className='py-20 flex lg:flex-row flex-col-reverse gap-24 '>
        <div className="lg:w-1/2">
          <div className='relative'>
            <img src="/images/Cricket_section/swimming.png" alt="" className='w-full'/>
              <div className='flex flex-col gap-2 xl:py-6 bg-[#000000] text-white border border-white rounded-xl w-fit xl:px-6 p-2 absolute bottom-[5%] right-[10%] '>
                <div className='text-4xl font-medium'>99% +ive</div>
                <div className='text-[#F2F2F2]'>Swimming Pool</div>
                <div className='flex gap-1 items-center text-[#F2F2F2]'>
                  <div>+has imporved their performance and skills</div>
                  <div>
                    <img src="/images/Cricket_section/swimArrow).png" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 lg:w-1/2'>
          <Texts
          info="Dive into our refreshing swimming pool for a rejuvenating experience. Perfect for laps, leisure swims, or a fun day our with family. We offer various timings for your convenience."
          btnText="Book Your Swimming Lane Here!"
          isPresent='false'>Make a Splash and <span className='text-[#FD0054]'>Cool Down!</span></Texts>
        </div> 
      </div>
    </div>
  )
}

export default Swimming
