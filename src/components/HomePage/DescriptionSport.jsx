import React from 'react'

const DescriptionSport = () => {
  return (
    <div className='py-24'>
      <div className='flex flex-col gap-5'>
            <div className='flex gap-3'>
                <div>
                    <img src="/images/Cricket_section/rally.png" alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-xl font-medium text-[#222222]'>Rally Up!</div>
                    <div className=''>We'll provide drills and games tailored for begineers to develop control and consistency.</div>
                </div>
            </div>
             <div className='flex gap-3'>
                <div>
                    <img src="/images/Cricket_section/play.svg" alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-xl font-medium text-[#222222]'>Get Competitive!</div>
                    <div className=''>Participate in organized matches and partner with player of similar skill for a fun and competitive experience.</div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default DescriptionSport
