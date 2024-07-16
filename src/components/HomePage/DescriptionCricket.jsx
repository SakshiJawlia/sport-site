import React from 'react'

const list=[
    {
        item:"Ehance your games skills on real feel pitch."
    },
    {
        item:"Get goodies and many more surprises."
    },
    {
        item:"Test, Reherase and Elevate yourself in game of cricket."
    }
]

const DescriptionCricket = () => {
  return (
    <div>
      <div className='flex flex-col gap-1 py-24'>
      {
        list.map((info)=>(
            <div className='flex gap-2'>
                <img src="/images/Cricket_section/starIcon.png" alt="" />
                <div>{info.item}</div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default DescriptionCricket
