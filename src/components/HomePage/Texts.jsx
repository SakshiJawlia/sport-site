import React from 'react'
import Button from '../Button'
import DescriptionCricket from './DescriptionCricket'
import DescriptionSport from './DescriptionSport'

const Texts = ({children,info,btnText,isPresent}) => {
  return (
    <div className=''>
        <div className='flex flex-col gap-14 border-b p-5'>
        <div className='flex flex-col gap-6 '>
            <h3 className='text-4xl font-medium'>{children}</h3>
            <p className='text-lg text-[#353535]'>{info}</p>
        </div>
            <Button text={btnText}/>
        </div>
        <div className=''>
        {
          isPresent==="true" && <DescriptionCricket/>
        }
        {
          isPresent==="false" && <DescriptionSport/>
        }
        </div>
    </div>
  )
}

export default Texts;

