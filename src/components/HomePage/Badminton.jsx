import React from 'react'
import Texts from './Texts'

const Badminton = () => {
  return (
    <div className='mx-20'>
      <div className='py-20 flex lg:flex-row flex-col gap-24'>
        <div className='py-4 lg:w-1/2'>
            <Texts
            info="Reserve your badminton court and enjoy a thrilling game with friends or family. We offer morning, evening and night slots to fit your schedule. Perfect for all skill level !"
            btnText="Book Your Badminton Court Now!"
            isPresent='false'><span className='text-[#FD0054]'>Smash</span> your way to fitness!</Texts>
        </div> 
        <div className='lg:w-1/2'>
          <div className='relative'>
              <img src="/images/Cricket_section/badminton.png" alt="" className='w-full'/>
                <div className='flex flex-col gap-2 xl:py-6 bg-white rounded-xl w-fit xl:px-6 p-2 absolute bottom-[10%] right-[10%]'>
                  <div className='text-4xl font-medium text-black'>99% +ive</div>
                  <div className='text-black'>Customer Reviews</div>
                  <div className='flex gap-1 items-center text-[#13DD0F]'>
                  <div>+has imporved their performance and skills</div>
                  <div className=''>
                      <img src="/images/Cricket_section/badmArrow.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 xl:block hidden'>
                <img src="/images/Cricket_section/arrow.png" alt="" />
            </div>
            </div>
          <div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Badminton
