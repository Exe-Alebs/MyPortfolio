import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-[black] text-[32px] font-medium flex items-centern gap-4
    py-16 '>
        {title}

        <div className='bg-[purple] h-[4px] w-[40px] translate-y-6'>

        </div>
    </div>
  )
}

export default Heading